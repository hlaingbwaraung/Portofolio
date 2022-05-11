<template>
  <div v-if="post" class="detailpost">
    <img :src="post.picture" class="img-fluid rounded-start" />
    <h2>{{ post.title }}</h2>
    <p>{{ post.body }}</p>

    <button class="m-2 btn btn-danger" @click="deletePost">Delete</button>
  </div>
  <div v-else>
    <Spinner></Spinner>
  </div>
</template>

<script>
import Spinner from "../components/Spinner";
import getPost from "../composables/getPost";
import { useRoute, useRouter } from "vue-router";

import { db } from "../firebase/config";

export default {
  components: { Spinner },
  props: ["id"],
  setup(props) {
    let route = useRoute();
    let router = useRouter();
    let { post, error, load } = getPost(route.params.id); //{post,error,load}
    load();
    let deletePost = async () => {
      let id = props.id;
      await db.collection("posts").doc(id).delete();
      router.push("/blog");
    };
    return { post, error, deletePost };
  },
};
</script>

<style>
.detailpost {
  max-width: 1000px;
  margin: 0 auto;
  padding: 50px;
}
.detailpost h2 {
  font-size: 35px;
  text-align: center;
  margin: 20px;
  font-weight: bold;
}
.detailpost p {
  width: 100%;
  margin: 30px;
  font-size: 20px;
  letter-spacing: 1px;
  line-height: 2.6;
}
</style>
