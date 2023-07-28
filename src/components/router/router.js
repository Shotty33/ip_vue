import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import Services from '../views/Services.vue';
import Contact from '../views/Contact.vue';

const routes = [
  { path: '/',
    name: 'homeSection',
    component: Home },
  { path: '/about',
    name: 'aboutSection',
    component: About },
  { path: '/services',
    name: 'servicesSection',
    component: Services },  
  { path: '/contact',
    name: 'contactSection',
    component: Contact },
];

const router = createRouter({
  history: createWebHistory(),
  base: process.env.BASE_URL,
  routes,
});

export default router;