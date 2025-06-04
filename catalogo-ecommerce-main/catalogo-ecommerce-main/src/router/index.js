import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProductDetailView from '../views/ProductDetailView.vue'
import CartView from '../views/CartView.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/product/:id', component: ProductDetailView, props: true },
  { path: '/cart', component: CartView }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
