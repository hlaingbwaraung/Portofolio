<template>
  <h1>Log In</h1>
  <form @submit.prevent="login">
    <input type="email" placeholder="Email" v-model="email" />
    <input type="password" placeholder="password" v-model="password" />
    <div class="error" v-if="error">{{ error }}</div>
    <button class="btn btn-success">Log In</button>
  </form>
</template>

<script>
import { ref } from "@vue/reactivity";
import { auth } from "../firebase/config";
import useLogin from "../composables/useLogin";
import { useRouter} from 'vue-router'

export default {
  setup() {
    let email = ref("");
    let password = ref("");
     let router =useRouter();
    let { error, signIn } = useLogin();

    let login = async () => {
      let res = await signIn(email.value, password.value);
      if (res) {
      router.push("/chatroom");
      }
    };
    return { email, password, login, error ,useRouter};
  },
};
</script>

<style></style>
