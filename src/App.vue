<template>
  <navBar></navBar>
  <router-view></router-view>
  <footerSection></footerSection>
</template>

<script>
import navBar from './components/views/Nav.vue'
import footerSection from './components/views/Footer.vue'

export default {
  name: 'App',
  components: {
    navBar,
    footerSection,
  }
}
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-family: "Edu SA Beginner", roboto sans-serif;
}

@import url('https://fonts.googleapis.com/css2?family=Edu+SA+Beginner&display=swap');
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css');
.rainbow-text{
  background-image: linear-gradient(
    45deg,
    #f00,
    #345
    #0f0,
    #f0f,
    rgb(255, 170, 0),
    rgb(255, 0, 128),
    rgb(128, 0, 255),
  );
  background-size: 100% 100%;
  animation: rainbow-animation 1s ease infinite;
  background-clip: text;
  -webkit-background-clip: text; /* For Safari/WebKit */
  color: transparent;
  font-size: 36px;
  font-weight: bold;
  text-align: center;
  font-family: "Edu SA Beginner", roboto sans-serif;
}

</style>
