<template>
  <el-container id="app">
  <router-view></router-view>
</el-container>
</template>

<script>
export default {
  name: 'App',
  components: {
  }
}
</script>

<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
  }
  .el-footer{
    background-color: #f7fbfd;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  
  .el-aside {
    background-color: #545c64;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  body > .el-container {
    margin-bottom: 40px;
    height: 100%;
  }
  body,html{
		height: 100%;
    margin:0;
	}
</style>