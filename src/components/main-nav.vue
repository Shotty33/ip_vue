<template>
  <nav class="navbar" id="navbar">
    <div class="container">
      <div class="navbar" id="main-nav">
        <ul class="nav-links">
          <li class="nav-item">
            <router-link to="/" class="nav-link"><span>Home</span></router-link>
          </li>
          <li class="nav-item">
            <router-link to="/" class="nav-link"><span>About</span></router-link>
          </li>
          <li class="nav-item">
            <router-link to="/" class="nav-link"><span>Services & Pricing</span></router-link>
          </li>
          <li class="nav-item">
            <router-link to="/" class="nav-link"><span>Contact Us</span></router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "mainNav",
};
</script>

<style>
.navbar {
  background-color: #26272b;
  color: #737373;
  display: flex;
  justify-content: flex-end;
  padding: 15px 10px;
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
  margin-right: 0;
}

.nav-links a {
  text-decoration: none;
  color: #737373;
  font-weight: bold;
}
</style>
