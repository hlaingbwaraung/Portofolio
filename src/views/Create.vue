<template>
<form @submit.prevent="addPost">
    <h1 class="">Create Post</h1>
  <label>Title</label>
  <input type="text" required v-model="title">

  <label>Body</label>
  <textarea required v-model="body"></textarea>

  <label >Tags(Hit enter to ad a tag)</label>
  <input type="text" v-model="tag" @keydown.enter.prevent="handleKeydown">
  <div v-for="tag in tags" :key="tag" class="pill">
        {{tag}}
  </div>
<br><br>
  <button class="btn btn-success" >Add Post</button>
</form>

</template>

<script>
import { ref } from '@vue/reactivity'
import { useRouter} from 'vue-router'
import {db,timestamp } from "../firebase/config"
 
export default {
        setup(){
            let router =useRouter();//this.$router
            let title=ref("");
            let body=ref("");
            let tag=ref("");
            let tags=ref([]);
            
            let handleKeydown=()=>{
                        if(!tags.value.includes(tag.value)){
                                tags.value.push(tag.value)
                        }
                        tag.value=""
            } 
            let addPost=async()=>{
                  let newPost=   {
                                title:title.value,
                                body:body.value,
                                tags:tags.value,
                                created_at:timestamp()
                            }
                         let res = await  db.collection("posts").add(newPost)
                       
                       router.push("/");
                        
            }


            return{title,body,tag,handleKeydown,tags,addPost,router}
        }
}
</script>

<style>
 form {
    max-width: 480px;
    margin: 0 auto;
    text-align: left;
  }
  input, textarea {
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
  label {
    display: inline-block;
    margin-top: 30px;
    position: relative;
    font-size: 20px;
    color: white;
    margin-bottom: 10px;
  }
  label::before {
    content: "";
    display: block;
    width: 130%;
    height: 100%;
    background: #7c7c7c;
    position: absolute;
    z-index: -1;
    padding-right: 40px;
    left: -10px;
    transform: rotateZ(-1.5deg);
  }
  .pill {
     background: #eee;
  border-radius: 3px 0 0 3px;
  color: #999;
  display: inline-block;
  height: 26px;
  line-height: 26px;
  padding: 0 20px 0 23px;
  position: relative;
  margin: 0 10px 10px 0;
  text-decoration: none;
  -webkit-transition: color 0.2s;
  }
a:link {
  text-decoration: none;
}

 .pill::before {
  background: #fff;
  border-radius: 10px;
  box-shadow: inset 0 1px rgba(0, 0, 0, 0.25);
  content: '';
  height: 6px;
  left: 10px;
  position: absolute;
  width: 6px;
  top: 10px;
}

.pill::after {
  background: #fff;
  border-bottom: 13px solid transparent;
  border-left: 10px solid #eee;
  border-top: 13px solid transparent;
  content: '';
  position: absolute;
  right: 0;
  top: 0;
}

.pill:hover {
  background-color: rgb(169, 169, 169);
  color: white;
}

.pill:hover::after {
   border-left-color: rgb(169, 169, 169); 
}
 
</style>