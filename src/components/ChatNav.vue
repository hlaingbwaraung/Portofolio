<template>
  <nav v-if="user">
    <div>
      <p>hi {{ user.displayName }}</p>
      <p class="email">Logged in as : {{ user.email }}</p>
    </div>
    <button class="btn btn-warning" @click="logout">Logout</button>
  </nav>
</template>

<script>
import { ref } from "@vue/reactivity";
import { auth } from "../firebase/config";
import getUser from "../composables/getUser";

export default {
  setup() {
    let error = ref(null);
    let { user } = getUser();

    let logout = async () => {
      try {
        await auth.signOut();
        console.log("logged out");
      } catch (err) {
        error.value = err.message;
        console.log(err.value);
      }
    };

    return { logout, user, error };
  },
};
</script>

<style scoped>
nav {
  padding: 20px;
  border-bottom: 1px solid #eee;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
nav p {
  margin: 2px auto;
  font-size: 16px;
  color: #444;
}
nav p.email {
  font-size: 14px;
  color: #999;
}
</style>
