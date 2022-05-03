<template>
  <h1>Log In</h1>
  <form @submit.prevent="login">
  <input type="email" placeholder="Email" v-model="email">
  <input type="password" placeholder="password" v-model="password">
  <button class="btn btn-success">Log In</button>
</form>
</template>

<script>
import { ref } from '@vue/reactivity'
export default {
    setup(){
  
        let email = ref("");
        let password = ref("");
        let login =()=>{
 

        }
 return{ email,password,login}

    }
}
</script>

<style>

</style>