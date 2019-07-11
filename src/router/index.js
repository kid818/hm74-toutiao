// 配置路由
// 引入vue-router
import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/views/login'

// 导入首页
import Home from '../views/home/home.vue'
// 注册use
Vue.use(VueRouter)
// 初始化路由对象（配置路由规则）
const router = new VueRouter({
  routes: [
    // 登录页
    { name: 'login', path: '/login', component: Login },
    // 首页
    { anme: 'home', path: '/', component: Home }
  ]
})
// 导出
export default router
