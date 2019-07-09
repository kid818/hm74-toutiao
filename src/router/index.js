// 配置路由
// 引入vue-router
import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/views/login'
// 注册use
Vue.use(VueRouter)
// 初始化路由对象（配置路由规则）
const router = new VueRouter({
  routes: [
    { path: '/', redirect: { name: 'login' } },
    { name: 'login', path: '/login', component: Login }
  ]
})
// 导出
export default router
