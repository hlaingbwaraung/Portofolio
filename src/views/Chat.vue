<template>
  <div class="container">
    <div class="form">
      <div v-if="showLoginForm">
        <Login></Login>
        <p class="text-right">
          Not a member?<span @click="showLoginForm = !showLoginForm">
            Create account?</span
          >
        </p>
      </div>
      <div v-else>
        <Signup></Signup>
        <p class="text-right">
          Already Member?<span @click="showLoginForm = !showLoginForm">
            Login account</span
          >
        </p>
      </div>
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

<style scoped>
.container {
  position: relative;
  margin: 50px auto;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.form {
  padding: 10px;
}
p {
  text-align: justify;
  font-size: 15px;
  letter-spacing: 2px;
  float: right;
}
span {
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  cursor: pointer;
  color: rgb(44, 150, 243);
}
</style>
