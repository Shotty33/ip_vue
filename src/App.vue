<template>
  <navBar></navBar>
  <homeSection></homeSection>
  <footerSection></footerSection>
</template>

<script>
import navBar from './components/views/Nav.vue'
import homeSection from './components/views/Home.vue'
import footerSection from './components/views/Footer.vue'

export default {
  name: 'App',
  components: {
    navBar,
    homeSection,
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
}

@import url('https://fonts.googleapis.com/css2?family=Edu+SA+Beginner&display=swap');
</style>
