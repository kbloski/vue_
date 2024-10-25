import { createRouter, createWebHistory } from "vue-router";
import CoachDetails from "./pages/coaches/CoachDetails.vue";
import CoachesList from "./pages/coaches/CoachesList.vue";
import CoachRegister from "./pages/coaches/CoachRegister.vue";
import ContactCoach from "./pages/requests/ContactCoach.vue";
import RequestReceived from "./pages/requests/RequestReceived.vue";
import NotFound from "./pages/NotFound.vue";

const router = createRouter({
    history: createWebHistory(),
    // linkActiveClass: 'class-css-name',
    routes: [
        { path: "/", redirect: "/coaches" },
        { path: "/coaches", component: CoachesList },
        {
            path: "/coaches/:id",
            component:CoachDetails ,
            props: true,
            children: [
                { path: "contact", component: ContactCoach }, // /coaches/c1/contact
            ],
        },
        { path: "/register", component: CoachRegister },
        { path: "/requests", component: RequestReceived },
        { path: "/:catchAll(.*)", component: NotFound },
    ],
});

export default router;
