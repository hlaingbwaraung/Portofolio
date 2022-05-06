<template>
  <h1 class="text-center">Log In</h1>
  <form @submit.prevent="login">
    <div class="form-group">
    <input type="email" class="form-control" placeholder="Email" v-model="email" />
    <input type="password" class="form-control" placeholder="password" v-model="password" />
    <div class="error" v-if="error">{{ error }}</div>
    <button class="btn btn-success">Log In</button>
    </div>
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

<style>

</style>
