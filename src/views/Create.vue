<template>
  <form @submit.prevent="addPost" class="createcss">
    <h1 class="">Create Post</h1>


        <img  :src="picture">
        <br>
  
    
    <input type="file" @change="uploadImage" class="form-control" />
   

   
    <label>Title</label>
    <input type="text" required v-model="title" />

    <label>Body</label>
    <textarea required v-model="body"></textarea>

    <label>Tags(Hit enter to ad a tag)</label>
    <input type="text" v-model="tag" @keydown.enter.prevent="handleKeydown" />
    <div v-for="tag in tags" :key="tag" class="pill">
      {{ tag }}
    </div>
    <br /><br />
    <button class="btn btn-success">Add Post</button>
  </form>
</template>

<script>
import { ref } from "@vue/reactivity";
import { useRouter } from "vue-router";
import { firebase, db, timestamp } from "../firebase/config";

export default {
  setup() {
    let router = useRouter(); //this.$router
    let title = ref("");
    let body = ref("");
    let tag = ref("");
    let tags = ref([]);
    let picture = ref(null);

    let handleKeydown = () => {
      if (!tags.value.includes(tag.value)) {
        tags.value.push(tag.value);
      }
      tag.value = "";
    };

    let uploadImage = (e) => {
     

      if (e.target.files[0]) {
        let file = e.target.files[0];

        var storageRef = firebase
          .storage()
          .ref("posts/" + file.name);

        let uploadTask = storageRef.put(file);

        uploadTask.on(
          "state_changed",
          (snapshot) => {},
          (error) => {
          },
          () => {
            uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
            picture.value = downloadURL; 
            });
          }
        );
      }
    };
    let addPost = async () => {
      let newPost = {
        title: title.value,
        body: body.value,
        tags: tags.value,
        picture:picture.value,
        created_at: timestamp(),
      };
      let res = await db.collection("posts").add(newPost);

      router.push("/blog");
    };

    return {
      title,
      body,
      tag,
      handleKeydown,
      tags,
      addPost,
      router,
      uploadImage,
      picture
    };
  },
};
</script>

<style>
.createcss {
  max-width: 480px;
  margin: 0 auto;
}
input,
textarea {
  display: block;
  margin: 10px 0;
  width: 100%;
  box-sizing: border-box;
  padding: 10px;
  border: 1px solid #eee;
}
textarea {
  height: 160px;
}

a:link {
  text-decoration: none;
}
</style>
