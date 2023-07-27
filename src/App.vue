<template>
  <mainNav></mainNav>
  <homeSection></homeSection>
  <aboutSection></aboutSection>
  <servicesSection></servicesSection>
  <contactSection></contactSection>
  <footerSection></footerSection>
</template>

<script>
import mainNav from './components/main-nav.vue'
import homeSection from './components/home-section.vue'
import footerSection from './components/footer-section.vue'
import aboutSection from './components/about-section.vue'
import servicesSection from './components/services-section.vue'
import contactSection from './components/contact-section.vue'

export default {
  name: 'App',
  components: {
    mainNav,
    homeSection,
    footerSection,
    aboutSection,
    servicesSection,
    contactSection,
    
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
