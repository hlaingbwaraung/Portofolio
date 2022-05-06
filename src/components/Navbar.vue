<template>
  <header>
 <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
  <router-link :to="{ name: 'Home' }">Home</router-link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
  <router-link :to="{ name: 'Home' }">Home</router-link>
        </li>
        <li class="nav-item">
        <router-link :to="{ name: 'Create' }">Create</router-link>
        </li>
        <li class="nav-item">
        <router-link :to="{ name: 'Blog' }">Blog</router-link>
        </li>
        <li class="nav-item">
        <router-link :to="{ name: 'Chat' }">Chat</router-link>
        </li>
      </ul>
    </div>
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
    width: 100%;
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