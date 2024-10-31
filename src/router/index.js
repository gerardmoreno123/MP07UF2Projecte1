import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import CalculatorView from "../views/CalculatorView.vue";
import CommentsAPIView from "../views/CommentsAPIView.vue";
import UsersAPIView from "../views/UsersAPIView.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/', name: 'home', component: HomeView
        },
        {
            path: '/calculator', name: 'calculator', component: CalculatorView
        },
        {
            path: '/comments-api', name: 'comments-api', component: CommentsAPIView
        },
        {
            path: '/users-api', name: 'users-api', component: UsersAPIView
        }
    ]
})

export default router