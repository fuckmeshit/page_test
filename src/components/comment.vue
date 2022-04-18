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
        prop="uname"
        label="用户名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="mname"
        label="电影名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="comment"
        label="评价内容">
      </el-table-column>
      <el-table-column
        prop="ischecked"
        label="是否已审核">
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
    name:"commentmanage",
    data() {
        return {
          tableData: '',
          pageSize:10,
          total:20,
          currentPage:1,
          input1:''
        }
      },
      methods:{
        handleDelete(index,rows){
          const _this=this;
          
          axios.get("http://localhost:8443/api/moviedelete/"+rows.id).then(successResponse => {
          this.responseResult = JSON.stringify(successResponse.data)
          if (successResponse.data.code === 200) {
           axios.get("http://localhost:8443/api/movie/"+(this.currentPage-1)+"/"+this.pageSize).then(function(resp){
            _this.tableData=resp.data
          })
          }
        }).catch(failResponse => {// eslint-disable-line no-unused-vars
        })
        },
        handleEdit(indexs,rows){
          /**
          设置跳转到update页面
          目前问题是设置跳转后没有页面显示出来
           */
           this.$router.push("updatemovie?id="+rows.id);
        },
        search(){
          /**
          电影查找，不知道需不需要配置模糊查找，具体看后续可以进行调整 */
          const _this=this;
          axios.get("http://localhost:8443/api/comment/"+this.input1).then(function(resp){
            _this.total=1;
            _this.tableData=resp.data;
                    })
          console.log(this.input1)
        },
        page(currentPage){
          const _this=this
          axios.get("http://localhost:8443/api/commentmanage/"+(currentPage-1)+"/"+this.pageSize).then(function(resp){
            _this.tableData=resp.data
          })
        }
      },
      created(){
        const _this=this
          axios.get("http://localhost:8443/api/commentmanage/0/"+this.pageSize).then(function(resp){
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