<template>
 <div class="blogtop">
    <h1>Blog Page</h1>
    <input type="text" placeholder="Search Blog">
 </div>
  <div class="blog">
    <div v-if="error">
      {{ error }}
    </div>
    <div v-if="posts.length > 0" class="layout">
      <div>
        <PostsList :posts="posts"></PostsList>
      </div>
      <div><TagCloud :posts="posts"></TagCloud></div>
    </div>
    <div v-else><Spinner></Spinner></div>
  </div>
</template>

<script>
import TagCloud from "../components/TagCloud";
import Navbar from "../components/Navbar";
import Spinner from "../components/Spinner";
import PostsList from "../components/PostsList";
import getPosts from "../composables/getPosts";

export default {
  components: {
    TagCloud,
    Navbar,
    Spinner,
    PostsList,
  },
  setup() {
    let { posts, error, load } = getPosts();
    load();
    return { posts, error };
  },
};
</script>
<style>
.blogtop{
  max-width: 500px;
  margin: 0 auto;
  text-align: center;
  padding: 10px;
}
.blogtop input{
 border: 1px solid rgb(156, 156, 156);
 border-radius: 5px;
}
.blog {
  max-width: 1200px;
  margin: 0 auto;
  padding: 10px;
}
.layout {
  display: grid;
  grid-template-columns: 3fr 1fr;
  gap: 20px;
}
</style>
