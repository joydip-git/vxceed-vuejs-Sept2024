import PostListOptionsAPI from "@/components/PostListOptionsAPI.vue";
import HomePage from "../components/HomePage.vue";
import PostDetailOptionsAPI from "@/components/PostDetailOptionsAPI.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
    { path: '/home', component: HomePage },
    { path: '/', redirect: '/home' },
    { path: '/posts', component: PostListOptionsAPI },
    { path: '/posts/view/:id', component: PostDetailOptionsAPI }
]

export const router = createRouter({
    routes: routes,
    history: createWebHistory()
})