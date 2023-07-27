import { createRouter, createWebHistory } from 'vue-router';
import homeSection from './components/home-section.vue';
import aboutSection from './components/about-section.vue';
import servicesSection from './components/services-section.vue';
import contactSection from './components/contact-section.vue';

const routes = [
  { path: '/', component: homeSection },
  { path: '/about', component: aboutSection },
  { path: '/services', component: servicesSection },
  { path: '/contact', component: contactSection },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
