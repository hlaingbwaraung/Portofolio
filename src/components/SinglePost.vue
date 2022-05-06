<template>
  <div class="post">
    <router-link :to="{ name: 'Detail', params: { id: post.id } }">
      <div class="card mb-3" style="max-width: 800px">
        <div class="row g-0">
          <div class="col-md-4">
            <img src="../photo/3.png" class="img-fluid rounded-start" />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h3 class="card-title">{{ post.title }}</h3>
              <p class="card-text">{{ cutPostBody }}</p>
              <div v-for="tag in post.tags" :key="tag" class="pill">
                <router-link :to="{ name: 'Tag', params: { tag } }">
                  {{ tag }}
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
import { computed } from "vue";
export default {
  props: ["post"],
  setup(props) {
    let cutPostBody = computed(() => {
      return props.post.body.substring(0, 100) + "....";
    });
    return { cutPostBody };
  },
};
</script>

<style>
.post {
  margin: 0 40px 30px;
  padding-bottom: 30px;
  border-bottom: 1px dashed #e7e7e7;
 
}

</style>
