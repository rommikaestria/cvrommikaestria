import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import { createRouter, createWebHashHistory } from 'vue-router';

// Definisi rute - rute
const routes = [{}];

// Membuat router
const router = createRouter({
  history: createWebHashHistory(),
  routes, // short for `routes: routes`
});

//createApp(App).mount('#app');
const app = createApp(App);
app.use(router);
app.mount('#app');
