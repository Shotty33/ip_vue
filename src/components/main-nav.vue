<template>
  <nav class="navbar" id="navbar">
    <div class="container">
      <div class="navbar" id="main-nav">
        <!-- Hamburger icon for small screens -->
        <div class="hamburger" @click="toggleMenu">
          <div class="bar"></div>
          <div class="bar"></div>
          <div class="bar"></div>
        </div>

        <!-- Regular navigation links for larger screens -->
        <ul class="nav-links" :class="{ 'show-menu': showMenu }">
          <li class="nav-item">
            <router-link to="/"><span>Home</span></router-link>
          </li>
          <li>
            <router-link to="/about"
              ><span class="nav-item">About</span></router-link
            >
          </li>
          <li class="nav-item">
            <router-link to="/services"
              ><span>Services & Pricing</span></router-link
            >
          </li>
          <li class="nav-item">
            <router-link to="/contact"><span>Contact Us</span></router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>


export default {
  name: "mainNav",

  data() {
    return {
      showMenu: false,
    };
  },
  methods: {
    toggleMenu() {
      this.showMenu = !this.showMenu;
    },
  },
};
</script>

<style>
.navbar {
  background-color: #26272b;
  color: #737373;
  display: flex;
  justify-content: flex-end;
  padding: 10px 5px;
}

.nav-links {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
}

.nav-links li {
  margin-right: 20px;
}

.nav-links li:last-child {
  margin-right: 5px;
}

.hamburger {
  display: none;
}

.bar {
  width: 15px;
  height: 1px;
  background-color: #737373;
  margin: 5px 0;
}

/* Media query for small screens */
@media screen and (max-width: 770px) {
  .nav-links {
    display: none;
  }
  .hamburger {
    display: flex;
  }
  .show-menu .nav-links {
    display: flex;
    flex-direction: column;
  }
}
</style>
