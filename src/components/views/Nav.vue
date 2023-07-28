<template>
  <nav class="navbar" id="navbar">
    <div class="container">
      <div class="logo">
        <img
          id="logo"
          src="https://ipwebapp.s3.us-east-2.amazonaws.com/images/logo.png"
          alt="logo"
        />
      </div>
      <div class="navbar" id="main-nav">
        <!-- Hamburger icon for small screens -->
        <div class="hamburger">
          <img id="hamburger-icon" @click="toggleMenu()"
            src="https://ipwebapp.s3.us-east-2.amazonaws.com/images/2952827.png"
            alt="hamburger menu icon"
          />
        </div>

        <!-- Regular navigation links for larger screens -->
        <ul class="nav-links" :class="{ 'show-menu': showMenu }">
          <li>
            <router-link v-bind:to="{ name: 'homeSection' }" class="nav-item"
              >Home</router-link
            >
          </li>
          <li>
            <router-link v-bind:to="{ name: 'aboutSection' }" class="nav-item"
              >About</router-link
            >
          </li>
          <li>
            <router-link
              v-bind:to="{ name: 'servicesSection' }"
              class="nav-item"
              >Services &amp; Pricing</router-link
            >
          </li>
          <li>
            <router-link v-bind:to="{ name: 'contactSection' }" class="nav-item"
              >Contact Us</router-link
            >
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
.container {
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  padding: 10px 5px;
  background-color: #26272b;
}

#logo {
  display: flex;
  width: 150px;
  height: auto;
}

.nav-links {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: flex-end;
}

.nav-links li {
  list-style: none;
  margin-right: 30px;
  justify-content: flex-end;
}

.nav-links li:last-child {
  margin-right: 5px;
}

.hamburger {
  display: none;
}

.nav-item {
  font-size: 27px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 1px;
  border-radius: 5px;
  text-decoration: none;
  color: aqua;
  font-family: "Edu SA Beginner", roboto sans-serif;
}

.nav-item:hover {
  color: #fff;
  background-color: #737373;
}

/* Media query for small screens */
@media screen and (max-width: 800px) {
  .nav-links {
    display: none;
  }
  .hamburger {
    display: flex;
    justify-content: flex-end;
    height: 70px;
    width: auto;
    cursor: pointer;
  }
  .show-menu .nav-links {
    display: flex;
    flex-direction: column;
    align-items: flex-end; 
    position: relative;
    /* top: 70px; 
    right: 10px;
    background-color: #26272b;
    padding: 10px;
    border-radius: 5px; */
  }
}
</style>
