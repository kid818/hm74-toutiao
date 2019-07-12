// 配置路由
// 引入vue-router
import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/views/login'

// 导入首页
import Home from '../views/home/home.vue'
// 导入欢迎页
import Welcome from '../views/welcome/welcome.vue'
// 文章发布
import Article from '../views/article/article.vue'
// 素材管理
import Image from '../views/image/image.vue'
// 发布文章
import Publish from '../views/publish/publish.vue'
// 评论管理
import Comment from '../views/comment/comment.vue'
// 粉丝管理
import Fans from '../views/fans/fans.vue'
// 个人设置
import Setting from '../views//setting/setting.vue'
// 404
import NotFound from '../views/404/404.vue'
// 注册use
Vue.use(VueRouter)
// 初始化路由对象（配置路由规则）
const router = new VueRouter({
  routes: [
    // 登录页
    { name: 'login', path: '/login', component: Login },
    // 首页
    {
      path: '/',
      component: Home,
      children: [
        { name: 'welcome', path: '/', component: Welcome },
        // 给主页重定向
        { path: '/', redirect: { name: 'welcome' } },
        { path: '/article', component: Article },
        { path: '/image', component: Image },
        { path: '/publish', component: Publish },
        { path: '/comment', component: Comment },
        { path: '/fans', component: Fans },
        { path: '/setting', component: Setting }
      ]
    },
    // ...很多规则
    { name: '404', path: '*', component: NotFound }
  ]
})
// 加上前置守卫
router.beforeEach((to, from, next) => {
  if (to.path === '/login') return next()
  const user = window.sessionStorage.getItem('hm74-toutiao')
  if (user) return next()
  next('/login')
})
export default router
