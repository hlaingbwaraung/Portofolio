<template>
  <div>
    <Navbar></Navbar>
    <router-view />
    <ScrolltoTop></ScrolltoTop>
    <Footer></Footer>
  </div>
</template>
<script>
import ScrolltoTop from "./components/ScrolltoTop";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
export default {
  components: {
    ScrolltoTop,
    Footer,
    Navbar,
  },
};
</script>

<style>
#app {
  font-family: monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
