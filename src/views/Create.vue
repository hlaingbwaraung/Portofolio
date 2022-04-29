<template>
<form>
    <h1 class="">Create Post</h1>
  <label>Title</label>
  <input type="text" required v-model="title">

  <label>Body</label>
  <textarea required v-model="body"></textarea>

  <label >Tags(Hit enter to ad a tag)</label>
  <input type="text" v-model="tag" @keydown.enter.prevent="handleKeydown">
  <div v-for="tag in tags" :key="tag" class="pill">
        {{tag}}
  </div>

  <button class="btn btn-success">Add Post</button>
</form>

</template>

<script>
import { ref } from '@vue/reactivity'
export default {
        setup(){
            let title=ref("");
            let body=ref("");
            let tag=ref("");
            let tags=ref([]);
            let handleKeydown=()=>{
                        if(!tags.value.includes(tag.value)){
                                tags.value.push(tag.value)
                        }
                        tag.value=""
            }

            return{title,body,tag,handleKeydown,tags}
        }
}
</script>

<style>
 form {
    max-width: 480px;
    margin: 0 auto;
    text-align: left;
  }
  input, textarea {
    display: block;
    margin: 10px 0;
    width: 100%;
    box-sizing: border-box;
    padding: 10px;
    border: 1px solid #eee;
  }
  textarea {
    height: 160px;
  }
  label {
    display: inline-block;
    margin-top: 30px;
    position: relative;
    font-size: 20px;
    color: white;
    margin-bottom: 10px;
  }
  label::before {
    content: "";
    display: block;
    width: 130%;
    height: 100%;
    background: #7c7c7c;
    position: absolute;
    z-index: -1;
    padding-right: 40px;
    left: -10px;
    transform: rotateZ(-1.5deg);
  }
  .pill {
    display: inline-block;
    margin: 10px 10px 0 0;
    color: #444;
    background: #ddd;
    padding: 8px;
    border-radius: 20px;
    font-size: 14px;
  }

 
 
</style>