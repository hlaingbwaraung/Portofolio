<template>
  <nav class="navbar nav-default sticky-top navbar-expand-lg navbar-light bg-light">
    <div class="container">
      <router-link :to="{ name: 'Home' }" class="navbar-brand"><img src="../photo/logo.png" width="30" height="30"></router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <router-link :to="{ name: 'Home' }">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'Contact' }">Contact</router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'Blog' }">Blog</router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'Chat' }">Chat</router-link>
          </li>
           <li class="nav-item">
            <router-link :to="{ name: 'Create' }">Create</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script>
export default {};
</script>

<style>
.navbar {
  padding: 30px;
}
.navbar a {
  font-size: 20px;
  color: #bbb;
  text-decoration: none;
  margin-left: 20px;
}
.navbar a.router-link-active {
  color: rgb(255, 6, 6);
  font-weight: bold;
}
</style>
