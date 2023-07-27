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
          <li>
            <router-link v-bind:to="{name: 'home'}" class="nav-item"><span>Home</span></router-link>
          </li>
          <li>
            <router-link v-bind:to="{name: 'about'}" class="nav-item"><span>About</span></router-link>
          </li>
          <li>
            <router-link to="/services" class="nav-item"
              ><span>Services & Pricing</span></router-link
            >
          </li>
          <li>
            <router-link to="/contact" class="nav-item"><span>Contact Us</span></router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>


export default {
  name: "navBar",

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
  list-style: none;
  margin-right: 20px;
}

.nav-links li:last-child {
  margin-right: 5px;
}

.hamburger {
  display: none;
}

.nav-item {
  font-size: 12px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 1px;
  border-radius: 5px;
  text-decoration: none;
  color: aqua;
}

.nav-item:hover {
  color: #fff;
  background-color: #737373;
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

  .bar {
  width: 15px;
  height: 1px;
  background-color: #737373;
  margin: 5px 0;  
}
}
</style>
