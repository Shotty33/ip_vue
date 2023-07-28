import { createRouter, createWebHistory } from 'vue-router';
import Home from './components/views/Home.vue';
import About from './components/views/About.vue';
import Services from './components/views/Services.vue';
import Contact from './components/views/Contact.vue';

const routes = [
  { path: '/',
    name: 'homeSection',
    component: Home },
  { path: '/about',
    name: 'About',
    component: About },
  { path: '/services',
    name: 'Services',
    component: Services },  
  { path: '/contact',
    name: 'Contact',
    component: Contact },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;