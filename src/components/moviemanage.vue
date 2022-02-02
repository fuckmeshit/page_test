<template>
<div>
    <el-row gutter="20">
        <el-col span="6">
            <el-input v-model="input" placeholder="请输入电影名"></el-input>
        </el-col>
        <el-col span="2">
            <el-button type="primary" icon="el-icon-search" v-on:click="search">搜索</el-button>
        </el-col>
    </el-row>
    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="mv_id"
        label="电影id"
        width="180">
      </el-table-column>
      <el-table-column
        prop="mv_name"
        label="电影名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="mv_information"
        label="电影演员表">
      </el-table-column>
      <el-table-column
        prop="mv_type"
        label="电影类型">
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
          pageSize:5,
          total:20,
          currentPage:1
        }
      },
      methods:{
        search(){
          /**
          电影查找，不知道需不需要配置模糊查找，具体看后续可以进行调整 */
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