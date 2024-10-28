import { createRouter, createWebHistory } from "vue-router";
import { defineAsyncComponent } from "vue";

const TheRefs = defineAsyncComponent( ()=> import('./pages/TheRefs.vue'))
const TheMethods = defineAsyncComponent( () => import('./pages/TheMethods.vue'))

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/' , redirect: '/refs' },
        { path: '/refs', component: TheRefs},
        { path: '/methods', component: TheMethods}
    ]
})

export default router;