<template>
  <div>
    <div class="blogtop">
      <h1>ブログ</h1>
      <input
        class="input"
        type="text"
        placeholder="ブログを探す"
        v-model="search"
      />
    </div>
    <div class="blog container">
      <div v-if="error">
        {{ error }}
      </div>
      <div v-if="posts.length > 0" class="row">
        <div class="col-md-10">
          <PostsList :posts="filteredSearch"></PostsList>
          <div
            v-if="filteredSearch.length <= 0"
            class="mx-auto alert alert-danger"
          >
            Sry,We not found your wanted blog !
          </div>
        </div>
        <div class="col-md-2 order-first order-md-last">
          <TagCloud :posts="posts"></TagCloud>
        </div>
      </div>
      <div v-else><Spinner></Spinner></div>
    </div>
  </div>
</template>

<script>
import TagCloud from "../components/TagCloud";
import Navbar from "../components/Navbar";
import Spinner from "../components/Spinner";
import PostsList from "../components/PostsList";
import getPosts from "../composables/getPosts";
import { computed, ref } from "@vue/runtime-core";

export default {
  components: {
    TagCloud,
    Navbar,
    Spinner,
    PostsList,
  },

  setup() {
    let { posts, error, load } = getPosts();
    let search = ref("");
    load();

    let filteredSearch = computed(() => {
      return posts.value.filter((post) => {
        return post.title.includes(search.value);
      });
    });

    return { posts, error, search, filteredSearch };
  },
};
</script>
<style>
.blogtop {
  max-width: 500px;
  margin: 0 auto;
  text-align: center;
  padding: 20px;
}
.blogtop input {
  border: 1px solid rgb(156, 156, 156);
  border-radius: 5px;
}
.blog {
  max-width: 1500px;
  margin: 0 auto;
  padding-bottom: 50px;
}
/* .layout {
  display: grid;
  grid-template-columns: 3fr 1fr;
  gap: 20px;
} */
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
.pill::before {
  background: #fff;
  border-radius: 10px;
  box-shadow: inset 0 1px rgba(0, 0, 0, 0.25);
  content: "";
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
  content: "";
  position: absolute;
  right: 0;
  top: 0;
}
.pill a{
   color: rgb(87, 85, 85);
  text-decoration: none;
}

.pill:hover {
  background-color: rgb(169, 169, 169);
  color: white;
}

.pill:hover::after {
  border-left-color: rgb(169, 169, 169);
}
.alert {
  width: 500px;
  align-items: center;
  justify-content: center;
}
</style>
