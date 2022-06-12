<template>

<div v-if="showbtn" class="text-center m-3">
  <button class="btn btn-primary m-auto" @click="admin=!admin">admin</button>
</div>
 <div class="container">
   <div class="row justify-content-md-center">
       <div  class="col-lg-4 col-md-6" v-for="post in posts" :key="post.id">
    <SinglePost :admin='admin' :post="post"></SinglePost>
  </div>
   </div>
 </div>
</template>

<script>
import { ref } from '@vue/reactivity';
// import { ref } from '@vue/reactivity';
import SinglePost from "./SinglePost";
export default {
  components: { SinglePost },
  props: ["posts","showbtn"],
  setup(props) {
    // let button = ref(false);
     let admin = ref(false);
     return {admin};
  
  },
};
</script>

<style scoped>

</style>
