<template>
  <div class="container">
    <div v-if="showLoginForm">
      <Login></Login>
      <p>Not a member?<span @click="showLoginForm=!showLoginForm"> Create account?</span></p>
    </div>
   <div v-else>
       <Signup></Signup>
             <p>Already Member?<span @click="showLoginForm=!showLoginForm"> Login account</span></p>

   </div>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import Login from "../components/Login";
import Signup from "../components/Signup";
export default {
  components: {
    Login,
    Signup,
  },
  setup() {
    let showLoginForm = ref(true);

    return { showLoginForm };
  },
};
</script>

<style>



</style>
