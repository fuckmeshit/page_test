<template>
    <el-aside width="200px" background-color="#545c64">
        <el-menu
        background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
        <el-menu-item index="1">
            <span slot="title" v-on:click="toMovie">电影信息管理</span>
        </el-menu-item>
        <el-menu-item index="2">
            <span slot="title" v-on:click="toUser">用户信息管理</span>
        </el-menu-item>
        <el-menu-item index="3">
            <span slot="title">评论管理</span>
        </el-menu-item>
        </el-menu>
    </el-aside>
</template>
<script>
export default {
    name:'theSide',
    methods:{
        toUser(){
            this.$router.push("/index/usermanage")
        },
        toMovie(){
            this.$router.push("/index/mvmanage")
        }
    }
}

</script>
