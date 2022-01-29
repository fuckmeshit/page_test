<template>
<div>
    <el-row gutter="20">
        <el-col span="6">
            <el-input v-model="input" placeholder="请输入该用户的昵称"></el-input>
        </el-col>
        <el-col span="2">
            <el-button type="primary" icon="el-icon-search">搜索</el-button>
        </el-col>
    </el-row>
    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="id"
        label="用户id"
        width="180">
      </el-table-column>
      <el-table-column
        prop="username"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="password"
        label="密码">
      </el-table-column>
      <el-table-column
        prop="email"
        label="邮件地址">
      </el-table-column>
      <div class="block">
</div>
  
    </el-table>
    <div class="block">
  <el-pagination
    layout="prev, pager, next"
    :page-size="pageSize"
    :total="total"
    :current-page.sync="currentPage"
    @current-change="page">
  </el-pagination>
</div>
</div>

</template>

<script>
var axios = require('axios')
export default {
    name:"usermanage",
    data() {
        return {
          tableData: '',
          pageSize:10,
          total:100,
          currentPage:1
          }
        },
        methods:{
        page(currentPage){
          console.log(currentPage)
          const _this=this
          axios.get("http://localhost:8443/api/user/"+currentPage+"/"+this.pageSize).then(function(resp){
            _this.tableData=resp.data
          })
        }
      },
      created(){
        const _this=this
          axios.get("http://localhost:8443/api/user/1/"+this.pageSize).then(function(resp){
            _this.tableData=resp.data
          })
        }
}
</script>
<style>
.el-main{
    line-height: 60px;
}
.el-input{
    float: left;
}
</style>