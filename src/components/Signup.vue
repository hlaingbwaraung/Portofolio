<template>
  <h1>SignUp</h1>
  <form @submit.prevent="signUp">
  <input type="text" placeholder="Display Name" v-model="displayName">
  <input type="email" placeholder="Email" v-model="email">
  <input type="password" placeholder="password" v-model="password">
  <button class="btn btn-success">Sign Up</button>
</form>
</template>

<script>
import { ref } from '@vue/reactivity'
export default {
    setup(){
        let displayName = ref("");
        let email = ref("");
        let password = ref("");

        let signUp =()=>{
 

        }
 return{ displayName,email,password,signUp}

    }
}
</script>

<style>

</style>