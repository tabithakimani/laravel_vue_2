import Dashboard from './components/Dashboard.vue'
import Profile from './components/Profile.vue'
import User from './components/Users.vue'
import Developer from './components/Developer.vue'
import Login from "./components/Login";
import Register from "./components/Register";

export const routes = [
    {
        path:'/dashboard',
        component:Dashboard,
        meta: {
            requiresAuth: true
        }
    },
    {
        path:'/profile',
        component:Profile,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/login',
        name: 'login',
        component: Login
    },
    {
        path: '/register',
        name: 'register',
        component: Register
    },
    {
        path:'/users',
        component:User,
        meta: {
            requiresAuth: true
        }
    },
    {
        path:'/developer',
        component:Developer,
        meta: {
            requiresAuth: true
        }
    },

];
