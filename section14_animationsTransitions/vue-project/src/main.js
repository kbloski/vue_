import { createApp } from 'vue';
import {createRouter, createWebHistory} from 'vue-router'

import App from './App.vue';
import BaseModal from './components/BaseModal.vue';
import AllUsers from './pages/AllUsers.vue';
import CourseGoals from './pages/CourseGoals.vue';
import TheTransition from './pages/TheTransition.vue';

const router = createRouter( {
    history: createWebHistory(),
    routes: [
        { path: '/', component: TheTransition},
        {path: '/users', component: AllUsers},
        {path: '/goals', component: CourseGoals},
    ]
})

const app = createApp(App);

app.component('base-modal', BaseModal);
app.use(router);

// Nie powoduje startowej animacji dla routes
router.isReady().then( ()=>{
    app.mount('#app');
});

