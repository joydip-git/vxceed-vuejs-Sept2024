import HomePage from "@/components/common/HomePage.vue"
import ProductDetail from "@/components/products/ProductDetail.vue"
import ProductList from "@/components/products/ProductList.vue"
import { createRouter, createWebHistory } from "vue-router"

const routes = [
    { path: '/home', component: HomePage },
    { path: '/', redirect: '/home' },
    { path: '/products', component: ProductList },
    { path: '/products/view/:id', component: ProductDetail },
]

export const router = createRouter({
    routes: routes,
    history: createWebHistory()
})