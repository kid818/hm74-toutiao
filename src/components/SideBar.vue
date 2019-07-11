<template>
    <ul>
        <router-link to="/">首页</router-link><br>
        <router-link to="/publish">发布文章</router-link><br>
        <router-link to="/article">内容管理</router-link><br>
        <router-link to="/comment">评论管理</router-link><br>
        <router-link to="/image">素材管理</router-link><br>
        <router-link to="/fans">我的粉丝</router-link><br>
        <router-link to="/setting">个人设置</router-link><br>
    </ul>
</template>

<script>
export default {

}
</script>

<style scope>
ul {
    width:20%;
    background-color: aqua;
    height: 800px;
    display:inline-block;
}
</style>
