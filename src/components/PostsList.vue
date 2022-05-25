<template>
 
 <div class="container">
   <div class="row justify-content-md-center">
       <div  class="col-lg-4 col-md-6" v-for="post in posts" :key="post.id">
    <SinglePost :post="post"></SinglePost>
  </div>
   </div>
 </div>
</template>

<script>
import SinglePost from "./SinglePost";
export default {
  components: { SinglePost },
  props: ["posts"],
  setup(props) {},
};
</script>

<style></style>
