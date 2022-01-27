<template>
<div>
    <el-row gutter="20">
        <el-col span="6">
            <el-input v-model="input" placeholder="请输入电影名"></el-input>
        </el-col>
        <el-col span="2">
            <el-button type="primary" icon="el-icon-search">搜索</el-button>
        </el-col>
    </el-row>
    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="mvid"
        label="电影id"
        width="180">
      </el-table-column>
      <el-table-column
        prop="mvname"
        label="电影名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="mvpeformer"
        label="电影演员表">
      </el-table-column>
      <el-table-column
        prop="mvtype"
        label="电影类型">
      </el-table-column>
    </el-table>
</div>

</template>

<script>
export default {
    name:"mvmanage",
    data() {
        return {
          tableData: []
        }
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