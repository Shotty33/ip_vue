import Vue from 'vue';
import VueRouter from 'vue-router';
import HomeSection from './components/HomeSection.vue';
import AboutSection from './components/AboutSection.vue';
import ServicesSection from './components/ServicesSection.vue';
import ContactSection from './components/ContactSection.vue';

Vue.use(VueRouter);

const routes = [
  { path: '/', component: HomeSection },
  { path: '/about', component: AboutSection },
  { path: '/services', component: ServicesSection },
{ path: '/contact', component: ContactSection },
];

const router = new VueRouter({
  routes,
  mode: 'history', 
});

export default router;