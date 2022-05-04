<template>
  <h1>SignUp</h1>
  <form @submit.prevent="signUp">
    <input type="text" placeholder="Display Name" v-model="displayName" />
    <input type="email" placeholder="Email" v-model="email" />
    <input type="password" placeholder="password" v-model="password" />
    <div class="error" v-if="error">{{ error }}</div>
    <button class="btn btn-success">Sign Up</button>
  </form>
</template>

<script>
import { ref } from "@vue/reactivity";
import useSignup from "../composables/useSignup";
export default {
  setup() {
    let displayName = ref("");
    let email = ref("");
    let password = ref("");
    let { error, createAccount } = useSignup();

    let signUp = async () => {
      let res = await createAccount(
        email.value,
        password.value,
        displayName.value
      );
      if (res) {
        console.log(res.user);
      }
    };
    return { displayName, email, password, signUp, error };
  },
};
</script>

<style></style>
