import { createWebHistory, createRouter } from 'vue-router'
import SvgToSvgConverter from './components/SvgToSvgConverter.vue'
import TheWelcome from './components/TheWelcome.vue'

const routes = [
  { path: '/', component: TheWelcome },
  { path: '/svg_converter', component: SvgToSvgConverter },
]

export const router = createRouter({
  routes,
  history: createWebHistory(),
})
