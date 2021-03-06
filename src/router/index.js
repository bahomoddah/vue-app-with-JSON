import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Help from "../views/Help.vue";
import ContactUs from "../views/ContactUs.vue";
import Blog from "../views/Blog.vue";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home
    },
    {
        path: "/about",
        name: "About",
        component: About
    },

    {
        path: "/help",
        name: "Help",
        component: Help
    },
    {
        path: "/ContactUs",
        name: "ContactUs",
        component: ContactUs
    },
    {
        path: "/Blog",
        name: "Blog",
        component: Blog
    }
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
});

export default router;
