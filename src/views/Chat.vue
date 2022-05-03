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
.container {
  width: 90%;
  max-width: 960px;
  margin: 80px auto;
  border-radius: 20px;
  text-align: center;
  box-shadow: 2px 4px 6px rgba(28, 6, 49, 0.1);
  background: white;
  padding: 20px 0;
  font-size: 20px;
  font-weight: 400;
  letter-spacing: 1px;
}
.container span{
  font-weight: bold;
  text-decoration: underline;
  cursor: pointer;
}
.error {
  color: #ff3f80;
  font-size: 14px;
}
</style>
