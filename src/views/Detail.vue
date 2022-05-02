<template>
 
  <div v-if="post" class="post">
      <h2>{{post.title}}</h2>
      <p>{{post.body}}</p>
      <button class="m-2 btn btn-danger" @click="deletePost">Delete</button>
  </div>
  <div v-else>
       <Spinner></Spinner>
  </div>
</template>

<script>
import Spinner from '../components/Spinner'
import getPost from "../composables/getPost"
import {useRoute, useRouter} from "vue-router"
import {userRouter} from "vue-router"

import {db} from "../firebase/config"

export default {
  components: { Spinner },
  props:["id"],
  setup(props){
    let route = useRoute();
    let router=useRouter();
    let {post,error,load}=getPost(route.params.id);//{post,error,load}
    load();
    let deletePost = async()=>{
     let id = props.id;
     await db.collection("posts").doc(id).delete();
     router.push("/");
    }
    return{post,error,deletePost}
  }
}
</script>

<style>

</style>