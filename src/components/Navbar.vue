<template>
  <header>
    <nav class="navbar navbar-light bg-light justify-content-between">
      <a class="navbar-brand">Navbar</a>
      <div>
        <router-link :to="{ name: 'Home' }">Home</router-link>
        <router-link :to="{ name: 'Create' }">Create</router-link>
        <router-link :to="{ name: 'Blog' }">Blog</router-link>
        <router-link :to="{ name: 'Contact' }">Contact</router-link>
        <router-link :to="{ name: 'Chat' }">Chat</router-link>

      </div>
    </nav>
  </header>
</template>

<script>
export default {

}
</script>

<style>
header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
   
    background-color: white;
  }
 .navbar{
  margin: 0 auto;

  width: 100%;
   padding: 20px;
   background-color: white;
   box-shadow: 0px 3px 11px -5px rgba(0, 0, 0, 1);
 }
  header a {
   font-size: 20px;
    color: #bbb;
    text-decoration: none;
    margin-left: 20px;


  }
  header a.router-link-active {
    color: #444;
    font-weight: bold;
  }
</style>