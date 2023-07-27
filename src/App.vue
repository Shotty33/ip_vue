<template>
  <mainNav></mainNav>
  <homeView></homeView>
  <footerSection>{{ footer-section }}</footerSection>
</template>

<script>
import mainNav from './components/main-nav.vue'
import homeView from './components/home-view.vue'
import footerSection from './components/footer-section.vue'

export default {
  name: 'App',
  components: {
    mainNav,
    homeView,
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
  margin-top: 60px;
}
</style>
