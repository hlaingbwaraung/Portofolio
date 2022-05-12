<template>
  <nav
    class="navbar nav-default fixed-top navbar-expand-lg navbar-light bg-light"
  >
    <div class="container">
      <router-link :to="{ name: 'Home' }" class="navbar-brand"
        ><img src="../photo/logo.png" width="50" height="50"
      /></router-link>
      <button
        class="navbar-toggler d-flex d-lg-none flex-column justify-content-around collapsed"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="toggler-icon top-bar"></span>
        <span class="toggler-icon middle-bar"></span>
        <span class="toggler-icon bottom-bar"></span>

      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto" >
          <li class="nav-item" id="headingOne" >
            <router-link :to="{ name: 'Home' }" data-bs-toggle="collapse" data-bs-target="#navbarNav">Home</router-link>
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
export default {

};
</script>

<style>
.navbar {
  padding: 20px;
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
.navbar-toggler {
    width: 20px;
    height: 20px;
    position: relative;
    transition: .5s ease-in-out;
}

.navbar-toggler,
.navbar-toggler:focus,
.navbar-toggler:active,
.navbar-toggler-icon:focus {
    outline: none;
    box-shadow: none;
    border: 0;
    position: relative;
}

.navbar-toggler span {
    margin: 0;
    padding: 0;
}

.toggler-icon {
    display: block;
    position: absolute;
    height: 3px;
    width: 100%;
    background: #d3531a;
    border-radius: 1px;
    opacity: 1;
    left: 0;
    transform: rotate(0deg);
    transition: .25s ease-in-out;
}

.middle-bar {
    margin-top: 0px;
}


/* State when the navbar is collapsed */

.navbar-toggler.collapsed .top-bar {
    position: absolute;
    top: 0px;
    transform: rotate(0deg);
}

.navbar-toggler.collapsed .middle-bar {
    opacity: 1;
    position: absolute;
    top: 10px;
    filter: alpha(opacity=100);
}

.navbar-toggler.collapsed .bottom-bar {
    position: absolute;
    top: 20px;
    transform: rotate(0deg);
}

/* when navigation is clicked */

.navbar-toggler .top-bar {
    top: inherit;
    transform: rotate(135deg);
}

.navbar-toggler .middle-bar {
    opacity: 0;
    top: inherit;
    filter: alpha(opacity=0);
}

.navbar-toggler .bottom-bar {
    top: inherit;
    transform: rotate(-135deg);
}

/* Color of 3 lines */

.navbar-toggler.collapsed .toggler-icon {
    background: linear-gradient( 263deg, rgba(252,74,74,1) 0%, rgba(0,212,255,1) 100% );
}

@media only screen and (max-width: 990px) {
  .navbar-collapse {
    padding: 0;
  }
  
  .navbar a {
    font-size: 40px;
 
  }
  .nav-item{
    text-align: center;
    padding: 30px;
  }
  
}
</style>
