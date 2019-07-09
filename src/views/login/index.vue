<template>
  <div class="login-container">
    <el-card class="login-box">
      <img src="../../assets/images/logo_index.png" alt />
      <form>
        <el-input placeholder="请输入用户名" class="name"></el-input>
        <el-input placeholder="请输入密码" show-password class="paw"></el-input>
        <el-button class="ve">发送验证码</el-button>
        <el-checkbox class="ck"></el-checkbox>
        <span>
          我已同意并阅读
          <a href="#">用户协议</a>和
          <a href="#">隐私条款</a>
        </span>
        <br />
        <el-button class="login" type="primary">登录</el-button>
      </form>
    </el-card>
  </div>
</template>

<script>
export default {}
</script>

<style scoped lang='less'>
.login-container {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  //cover铺面容器 多余剪裁 contain在容器内完全显示图片
  //背景图定位 / 背景图尺寸
  background: url(../../assets/images/login_bg.jpg) no-repeat center / cover;
  .login-box {
    width: 400px;
    height: 300px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    img {
      display: block;
      width: 200px;
      margin: 10px auto;
    }
    .name {
      margin-top: 10px;
    }
    .paw {
      margin-top: 10px;
      width: 63%;
    }
    .ve {
      margin-left: 20px;
    }
    .ck {
      margin-right: 15px;
      margin-top: 20px;
    }
    span{
        font-size: 14px;
        a {
        color: skyblue;
        text-decoration: none;
      }
    }
    .login {
      width: 100%;
      margin-top: 20px;
    }
  }
}
</style>
