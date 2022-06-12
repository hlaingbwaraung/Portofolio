<template>
  <div class="post">
    <div class="card m-auto" style="width: 18rem">
      <router-link :to="{ name: 'Detail', params: { id: post.id } }">
        <img
          :src="post.picture"
          class="card-img-top sgpostImg img-fluid rounded mx-auto d-block"
          alt="..."
        />
        <div class="card-body">
          <h3 class="card-title">{{ post.title }}</h3>
          <p class="card-text">{{ cutPostBody }}</p>
          <div v-for="tag in post.tags" :key="tag" class="pill">
            <router-link :to="{ name: 'Tag', params: { tag } }">
              {{ tag }}
            </router-link>
          </div>
          <div v-if="admin">
            <button class="btn btn-warning">edit</button>
            <button class="btn btn-danger">delete</button>
          
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
import { computed, ref } from "vue";
export default {
  props: ["post",'admin'],
  setup(props) {
  
    let cutPostBody = computed(() => {
      return props.post.body.substring(0, 50) + "....";
    });
    return { cutPostBody};
  },
};
</script>

<style scoped>
.post {
  margin: 0 10px 30px;
  padding-bottom: 30px;
  border-bottom: 1px dashed #e7e7e7;
}
.card {
  transition: 0.5s;
  height: 370px;
}
.card:hover {
  box-shadow: 3px 3px 3px rgb(90, 89, 89);
  transform: translateY(-8px);
}
.card-title {
  font-weight: 600;
}
.card-title,
.card-body {
  color: black;
}
.sgpostImg {
  height: 150px;
}
/* 
@media only screen and (max-width: 1200px) {
  
} */
</style>
