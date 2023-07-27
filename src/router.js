import Vue from 'vue';
import VueRouter from 'vue-router';
import HomeView from './components/HomeView.vue';
import AboutSection from './components/AboutView.vue';
import ServicesSection from './components/ServicesView.vue';
import ContactSection from './components/ContactView.vue';

Vue.use(VueRouter);

const routes = [
  { path: '/', component: HomeView },
  { path: '/about', component: AboutView },
  { path: '/services', component: ServicesView },
{ path: '/contact', component: ContactView },
];

const router = new VueRouter({
  routes,
  mode: 'history', // Use history mode for cleaner URLs (optional)
});

export default router;