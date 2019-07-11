// 配置路由
// 引入vue-router
import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/views/login'
// 发布文章组件
import Publish from '@/views/publish/Publish.vue'
// 首页欢迎组件
import Welcome from '../views/welcome/Welcome.vue'
// 内容管理组件
import Article from '../views/article/Article.vue'
// 评论管理组件
import Comment from '../views/comment/Comment.vue'
// 素材管理组件
import Image from '../views/image/Image.vue'
// 粉丝管理
import Fans from '../views/fans/Fans.vue'
// 个人设置组件
import Setting from '../views/setting/Setting.vue'
// 注册use
Vue.use(VueRouter)
// 初始化路由对象（配置路由规则）
const router = new VueRouter({
  routes: [
    { name: 'login', path: '/login', component: Login },
    // 二级路由
    { name: 'welcome', path: '/', component: Welcome },
    { name: 'publish', path: '/publish', component: Publish },
    { name: 'article', path: '/article', component: Article },
    { name: 'comment', path: '/comment', component: Comment },
    { name: 'image', path: '/image', component: Image },
    { name: 'fans', path: '/fans', component: Fans },
    { name: 'setting', path: '/setting', component: Setting }
  ]
})
// 导出
export default router
