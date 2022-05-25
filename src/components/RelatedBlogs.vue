<template>
  <section id="banner">
    <div class="container mt-3">
      <h1 class="title animated text-center mb-5">最新ブロック</h1>
<div class="row">
  <div>
      <PostsList :posts="relatedPosts"></PostsList>
</div>
</div>
    </div>
  </section>
</template>

<script>
import { computed } from "@vue/runtime-core";
import getPosts from "../composables/getPosts";
import PostsList from "./PostsList";
export default {
  components: {
    PostsList,
  },
  setup() {
    let { posts, error, load } = getPosts();
    load();
    let relatedPosts = computed(() => {
      return posts.value.slice(0,2);
    });
    return { posts, error, relatedPosts };
  },
};
</script>

<style scoped>
#banner{
  background-color: white;
}
</style>
