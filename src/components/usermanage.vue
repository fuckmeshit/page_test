<template>
<div>
    <el-row gutter="20">
        <el-col span="6">
            <el-input v-model="input1" type="text" placeholder="请输入该用户的昵称"></el-input>
        </el-col>
        <el-col span="2">
            <el-button type="primary" icon="el-icon-search" v-on:click="userSearch">搜索</el-button>
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
      <el-table-column label="操作">
      <template slot-scope="scope">
        <el-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">删除</el-button>
      </template>
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
          currentPage:1,
          input1:''
          }
        },
        methods:{
        page(currentPage){
          const _this=this
          axios.get("http://localhost:8443/api/user/"+(currentPage-1)+"/"+this.pageSize).then(function(resp){
            _this.tableData=resp.data
          })
        },
        userSearch(){
          const _this=this;
          axios.get("http://localhost:8443/api/usersearch/"+this.input1).then(function(resp){
            _this.total=1;
            _this.tableData=resp.data;
                    })
        }
      },
      created(){
        const _this=this
          axios.get("http://localhost:8443/api/user/0/"+this.pageSize).then(function(resp){
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