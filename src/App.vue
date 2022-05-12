<template>
  <div>
    <Navbar></Navbar>
    <router-view />
    <Footer></Footer>
  </div>
</template>
<script>
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
export default {
  components: {
    Footer,
    Navbar,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
