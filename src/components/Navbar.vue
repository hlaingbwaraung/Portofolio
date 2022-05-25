<template>
  <nav
    class="navbar nav-default fixed-top navbar-expand-lg navbar-light bg-light"
  >
    <div class="container">
      <router-link
        :to="{ name: 'Home' }"
        class="navbar-brand"
        @click="toggleNav"
        ><img src="../photo/logo.png" width="50" height="50"
      /></router-link>
      <h4>APOLLO</h4>
      <button
        class="navbar-toggler d-flex d-lg-none flex-column justify-content-around collapsed"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
        :class="{ active: collapsed }"
      >
        <span class="toggler-icon top-bar"></span>
        <span class="toggler-icon middle-bar"></span>
        <span class="toggler-icon bottom-bar"></span>
      </button>
      <div
        class="collapse navbar-collapse"
        id="navbarNav"
        :class="{ active: show }"
      >
        <ul class="navbar-nav ms-auto" @click="toggleNav">
          <li class="nav-item">
            <router-link :to="{ name: 'Home' }">HOME</router-link>
          </li>

          <li class="nav-item">
            <router-link :to="{ name: 'Blog' }">BLOG</router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'Contact' }">CONTACT</router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'Chat' }">CHAT</router-link>
          </li>
          <!-- <li class="nav-item">
            <router-link :to="{ name: 'Create' }">CREATE</router-link>
          </li> -->
        </ul>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  data() {
    return {
      show: false,
      collapsed: true,
    };
  },
  methods: {
    toggleNav() {
      (this.show = !this.show), (this.collapsed = !this.collapsed);
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    },
  },
};
</script>

<style>
.navbar {
  padding: 20px;
}
.nav-item {
  transition: 0.5s;
}
.nav-item a {
  font-size: 20px;
  color: rgb(99, 99, 99);
  margin: 5px;
  padding: 15px;
  text-decoration: none;
}
.nav-item a:hover {
  color: #000a0f;
}
.navbar a.router-link-active {
  color: #ff3153;
  font-weight: bold;
}
.nav-item:hover {
  border-radius: 5px;
  transform: translateY(-2px);
}
.navbar-toggler {
  width: 20px;
  height: 20px;
  position: relative;
  transition: 0.5s ease-in-out;
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
  transition: 0.25s ease-in-out;
}

.middle-bar {
  margin-top: 0px;
}

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

.navbar-toggler.collapsed .toggler-icon {
  background: linear-gradient(
    263deg,
    rgba(252, 74, 74, 1) 0%,
    rgba(0, 212, 255, 1) 100%
  );
}
.navbar-collapse .collapse show {
  background-color: aqua;
  font-size: 80px;
}
h4 {
  font-family: serif;
  padding-top: 10px;
}
@media only screen and (max-width: 990px) {
  .navbar-collapse {
    padding: 0;
  }

  .navbar a {
    font-size: 30px;
  }
  .nav-item {
    text-align: center;
    padding: 30px;
  }
  h4 {
    display: none;
  }
}
</style>
