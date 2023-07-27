import { createRouter, createWebHistory } from 'vue-router';
import homeSection from './components/views/Home.vue';
import aboutSection from './components/views/About.vue';
import servicesSection from './components/views/Services.vue';
import contactSection from './components/views/Contact.vue';

const routes = [
  { path: '/', 
  name: 'homeSection',
  component: homeSection },
  { path: '/aboutSection', 
  name: 'aboutSection',
  component: aboutSection },
  { path: '/services', 
  name: 'servicesSection',
  component: servicesSection },
  { path: '/contact', 
  name: 'contactSection',
  component: contactSection },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
