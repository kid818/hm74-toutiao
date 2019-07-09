import Vue from 'vue'
import App from './App.vue'

// 引入element-ul
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// 导入router
// 1.默认索引 文件夹下 存在 index.js  index.vueindex.json默认加载这么文件
// 2.在使用vue-cli的时候@符号子啊路径中作为前缀使用的时候默认代表src目录
import router from '@/router'

// 把element-ui注册到vue实例
Vue.use(ElementUI)
Vue.config.productionTip = false
// 职责1:导入项目需要依赖的资源(包 CSS)
// 职责2:初始化根实例
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
