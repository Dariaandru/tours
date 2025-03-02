import { createRouter, createWebHistory } from "vue-router";

const routerHistory = createWebHistory();

import HomePage from '@/components/pages/home.vue'
import AboutPage from '@/components/pages/about.vue'
import TravelsPage from "@/components/pages/travels.vue"
import DescriptionPage from "@/components/pages/description.vue";
import ContactsPage from "@/components/pages/contacts.vue";


const routes = createRouter({
    history: routerHistory,
    routes: [
        {
            path: "/",
            name: "home",
            component: HomePage,
        },
        
        {
            path: "/about",
            name: "about",
            component: AboutPage,
        },
        {
            path: "/contacts",
            name: "contacts",
            component: ContactsPage,
        },
        {
            path: "/travels",
            name: "travels",
            component: TravelsPage,
        },
        {
            path: "/travels/:description",
            name: "description",
            component: DescriptionPage,
        },
    ],
});


export default routes;
