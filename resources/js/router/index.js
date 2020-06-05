import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import Dashboard from '../components/Dashboard'
import Developer from '../components/Developer'
import Profile from '../components/Profile'
import Users from '../components/Users'
import NotFound from '../components/NotFound'


const routes = [
    {
        component: Dashboard,
        name: "dashboard",
        path: "/dashboard"
    },
    {
        component: Developer,
        name: "developer",
        path: "/developer"
    },
    {
        component: Profile,
        name: "profile",
        path: "/profile"
    },
    {
        component: Users,
        name: "users",
        path: "/users"
    },
    {
        component: NotFound,
        name: "NotFound",
        path: "*"
    },

]

export default new VueRouter({
    mode: "history",
    routes, // short for routes:routes
})
