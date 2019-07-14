<template>
  <el-container class="home-contaniner">
    <el-aside class="my-aside" :width="collapse?'64px':'200px'">
      <div class="logo" :class="{close:collapse}"></div>
      <el-menu
        router
        style="border-right:none"
        :default-active="$route.path"
        background-color="#002033"
        text-color="#fff"
        active-text-color="#ffd04b"
        :collapse="collapse"
        :collapse-transition="false"
      >
        <el-menu-item index="/">
          <i class="el-icon-s-home"></i>
          <span slot="title">首页</span>
        </el-menu-item>

        <el-menu-item index="/article">
          <i class="el-icon-document"></i>
          <span slot="title">内容管理</span>
        </el-menu-item>

        <el-menu-item index="/image">
          <i class="el-icon-picture"></i>
          <span slot="title">素材管理</span>
        </el-menu-item>

        <el-menu-item index="/publish">
          <i class="el-icon-s-promotion"></i>
          <span slot="title">发布文章</span>
        </el-menu-item>

        <el-menu-item index="/comment">
          <i class="el-icon-chat-dot-round"></i>
          <span slot="title">评论管理</span>
        </el-menu-item>

        <el-menu-item index="/fans">
          <i class="el-icon-present"></i>
          <span slot="title">粉丝管理</span>
        </el-menu-item>

        <el-menu-item index="/setting">
          <i class="el-icon-setting"></i>
          <span slot="title">个人设置</span>
        </el-menu-item>
      </el-menu>
    </el-aside>
    <el-container>
      <el-header class="my-header">
        <span class="el-icon-s-fold" @click="toggleMenu()"></span>
        <span class="text">江苏传智播客科技教育有限公司</span>
        <el-dropdown style="float:right" @command="handleCommand">
          <span class="el-dropdown-link">
            <img
              style="vertical-align: middle"
              width="30"
              height="30"
              :src="avatar"
              alt
            />
            <b>{{name}}</b>
            <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item icon="el-icon-setting" command="setting">个人设置</el-dropdown-item>
            <el-dropdown-item icon="el-icon-unlock" command="logout">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-header>
      <el-main class="my-main">
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  data () {
    return {
      collapse: false,
      avatar: '',
      name: ''
    }
  },
  created () {
    const user = JSON.parse(window.sessionStorage.getItem('hm74-toutiao'))
    this.avatar = user.photo
    this.name = user.name
  },
  methods: {
    toggleMenu () {
      this.collapse = !this.collapse
    },
    // 1.使用的是click dom的原生时间
    // 2.此时你绑定的一个原生事件给组件el-dropdown-item
    // 3.组件解析过后 这个标签是不存在的事件绑定无效
    // 4.时间修饰符：@click.prevent组织浏览器默认行为  绑定原生元素
    setting () {
      this.$router.push('/setting')
    },
    logout () {
      // 清楚sessionStorage中的hm
      window.sessionStorage.removeItem('hm74-toutiao')
      this.$router.push('/login')
    },
    handleCommand (command) {
      // command就是点击的选项中的command的值
      this[command]()
    }
  }
  // 测试token验证的请求
  // created: function () {
  //   this.$http
  //     .get('http://ttapi.research.itcast.cn/mp/v1_0/articles')
  //     .then(res => {
  //       console.log(res)
  //     })
  //     .catch(() => {})
  // }
}
</script>

<style scoped lang='less'>
.home-contaniner {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  .my-aside {
    background: #002033;
    .logo {
      width: 100%;
      height: 60px;
      background: #024 url(../../assets/images/logo_admin.png) no-repeat center /
        140px auto;
    }
    .close {
      background: url(../../assets/images/logo_admin_01.png) no-repeat center /
        36px auto;
    }
  }
  .my-header {
    border-bottom: 1px solid #ddd;
    line-height: 60px;
    .el-icon-s-fold {
      font-size: 26px;
      vertical-align: middle;
    }
    .text {
      vertical-align: middle;
      padding-left: 10px;
    }
  }
}
</style>
