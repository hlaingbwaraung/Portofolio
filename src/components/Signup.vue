<template>
  <!-- <h1>SignUp</h1>
  <form @submit.prevent="signUp">
    <input type="text" placeholder="Display Name" v-model="displayName" />
    <input type="email" placeholder="Email" v-model="email" />
    <input type="password" placeholder="password" v-model="password" />
    <div class="error" v-if="error">{{ error }}</div>
    <button class="btn btn-success">Sign Up</button>
  </form> -->
   <div class="container">
    <div class="row">
      <div class="col-md-6">
        <img src="../photo/1.png" class="img-fluid rounded-start" />
      </div>
      <div class="col-md-6">
        
        <h1 class="text-center">Sign Up</h1>
        <form @submit.prevent="signUp">
          <div class="form-group">
    <input type="text" placeholder="Display Name" v-model="displayName" />

            <input
              type="email"
              class="form-control"
              placeholder="Email"
              v-model="email"
            />
            <input
              type="password"
              class="form-control"
              placeholder="password"
              v-model="password"
            />
            <div class="error" v-if="error">{{ error }}</div>
            <button class="btn btn-success">Sign Up</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import useSignup from "../composables/useSignup";
import { useRouter} from 'vue-router'
export default {
  setup() {
    let router = useRouter();
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
        router.push("/chatroom");
      }
    };
    return { displayName, email, password, signUp, error,router };
  },
};
</script>

<style></style>
