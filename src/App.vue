<template>
  <mainNav></mainNav>
  <homeSection></homeSection>
  <footerSection></footerSection>
</template>

<script>
import mainNav from './components/main-nav.vue'
import homeSection from './components/home-section.vue'
import footerSection from './components/footer-section.vue'

export default {
  name: 'App',
  components: {
    mainNav,
    homeSection,
    footerSection,
    
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

@import url('https://fonts.googleapis.com/css2?family=Edu+SA+Beginner&display=swap');
</style>
