<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6">
        <img src="../photo/login.png" class="chatImg img-fluid" />
      </div>
      <div class="col-md-6">
        <h1 class="text-center">ログイン</h1>

        <form @submit.prevent="login">
          <div class="form-group">
            <input
              type="email"
              class="form-control"
              placeholder="メール"
              v-model="email"
            />
            <input
              type="password"
              class="form-control"
              placeholder="パスワード"
              v-model="password"
            />
            <div class="error" v-if="error">{{ error }}</div>
            <button class="button">ログイン</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import { auth } from "../firebase/config";
import useLogin from "../composables/useLogin";
import { useRouter } from "vue-router";

export default {
  setup() {
    let email = ref("");
    let password = ref("");
    let router = useRouter();
    let { error, signIn } = useLogin();

    let login = async () => {
      let res = await signIn(email.value, password.value);
      if (res) {
        router.push("/chatroom");
      }
    };
    return { email, password, login, error, useRouter };
  },
};
</script>

<style></style>
