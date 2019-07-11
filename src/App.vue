<template>
  <div id="app">
    <!-- 一级路由对应组件渲染的位置 -->
    <nav-bar></nav-bar>
    <div>
      <side-bar></side-bar>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
// 导入顶部导航组件
import NavBar from './components/NavBar.vue'
// 导入侧栏组件
import SideBar from './components/SideBar.vue'
export default {
  name: 'app',
  components: {
    NavBar,
    SideBar
  }
}
</script>

<style lang="less">
* {
  margin: 0;
  padding: 0;
}
</style>
