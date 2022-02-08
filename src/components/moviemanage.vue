<template>
<div>
    <el-row gutter="20">
        <el-col span="6">
            <el-input v-model="input1" placeholder="请输入电影名"></el-input>
        </el-col>
        <el-col span="2">
            <el-button type="primary" icon="el-icon-search" v-on:click="search">搜索</el-button>
        </el-col>
    </el-row>
    <el-table
    border="true"
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="id"
        label="电影id"
        width="180">
      </el-table-column>
      <el-table-column
        prop="mvname"
        label="电影名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="mvinformation"
        label="电影信息">
      </el-table-column>
      <el-table-column
        prop="mvtype"
        label="电影类型">
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
    name:"mvmanage",
    data() {
        return {
          tableData: '',
          pageSize:10,
          total:3583,
          currentPage:1,
          input1:''
        }
      },
      methods:{
        search(){
          /**
          电影查找，不知道需不需要配置模糊查找，具体看后续可以进行调整 */
          const _this=this;
          axios.get("http://localhost:8443/api/moviesearch/"+this.input1).then(function(resp){
            _this.total=1;
            _this.tableData=resp.data;
                    })
          console.log(this.input1)
        },
        page(currentPage){
          const _this=this
          axios.get("http://localhost:8443/api/movie/"+(currentPage-1)+"/"+this.pageSize).then(function(resp){
            _this.tableData=resp.data
          })
        }
      },
      created(){
        const _this=this
          axios.get("http://localhost:8443/api/movie/0/"+this.pageSize).then(function(resp){
            _this.tableData=resp.data
            console.log(resp.data)
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