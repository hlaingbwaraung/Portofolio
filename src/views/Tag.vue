<template>
  <div class="container">
    <div v-if="error">
      {{ error }}
    </div>
    <div v-if="posts.length" class="row">
      <div class="col-md-10 p-3">
        <PostsList :posts="filteredPosts"></PostsList>
      </div>
      <div class="col-md-2 order-first order-md-last">
        <TagCloud :posts="posts"></TagCloud>
      </div>
    </div>
    <div v-else>loading..</div>
  </div>
</template>

<script>
import TagCloud from "../components/TagCloud";
import PostsList from "../components/PostsList";
import { computed } from "@vue/runtime-core";
import getPosts from "../composables/getPosts";
export default {
  components: {
    TagCloud,
    PostsList,
  },
  props: ["tag"],
  setup(props) {
    let { posts, error, load } = getPosts();
    load();
    let filteredPosts = computed(() => {
      return posts.value.filter((post) => {
        return post.tags.includes(props.tag);
      });
    });
    return { posts, error, filteredPosts };
  },
};
</script>

<style scoped>
.container {
  margin: 50px auto;
}
</style>
