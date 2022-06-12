<template>
  <h1 class="text-center">admin panel</h1>
  <AdminNav></AdminNav>
  <PostsList :posts="posts" :showbtn="showbtn"></PostsList>
</template>

<script>
import PostsList from '../../components/PostsList'
import AdminNav from '../../components/Admin/AdminNav'
import getPosts from "../../composables/getPosts"
import { ref } from '@vue/reactivity'
export default {
  components: {
    PostsList, AdminNav },
 setup(){
      // composable function
      let showbtn =ref(true);
      let {posts,error,load}=getPosts()//{posts,error,load}
      
      load();
      return {posts,error,showbtn};
    }
}
</script>

<style>

</style>