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
// 注册use
Vue.use(VueRouter)
// 初始化路由对象（配置路由规则）
const router = new VueRouter({
  routes: [
    // 登录页
    { name: 'login', path: '/login', component: Login },
    // 首页
    {
      anme: 'home',
      path: '/',
      component: Home,
      children: [
        { name: 'welcome', path: '/welcome', component: Welcome },
        // 给主页重定向
        { path: '/', redirect: { name: 'welcome' } },
        { path: '/article', component: Article },
        { path: '/image', component: Image },
        { path: '/publish', component: Publish },
        { path: '/comment', component: Comment },
        { path: '/fans', component: Fans },
        { path: '/setting', component: Setting }
      ]
    }
  ]
})
// 导出
export default router
