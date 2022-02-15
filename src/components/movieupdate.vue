<template>
<div>
<el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
    <el-form-item label="电影id" prop="id">
        <el-input type="text" v-model="ruleForm.id"  readonly="true"></el-input>
    </el-form-item>
    <el-form-item label="电影名称" prop="mvname">
        <el-input type="text" v-model="ruleForm.mvname"></el-input>
    </el-form-item>
    <el-form-item label="电影类型" prop="mvtype">
    <el-input type="text" v-model="ruleForm.mvtype"></el-input>
  </el-form-item>
    <el-form-item label="电影信息" prop="mvinformation">
        <el-input type="text" v-model="ruleForm.mvinformation"></el-input>
    </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="submitForm()">提交</el-button>
    <el-button @click="resetForm('ruleForm')">重置</el-button>
  </el-form-item>
</el-form>
</div>
</template>
<script>
var axios = require('axios')
export default {
    
    data() {
        var checkmvName=(rule,value,callback)=>{
            if(!value){
                return callback(new Error('请输入电影名称'))
            }else{
                callback();
            }
        };
        var checkmvInformation=(rule,value,callback)=>{
            if(!value){
                return callback(new Error('请输入电影信息'))
            }
            else{
                callback();
            }
        };
        var checkmvType=(rule,value,callback)=>{
            if(!value){
                return callback(new Error('请输入电影类型'))
            }
            else{
                callback();
            }
        };
      return {
        ruleForm: {
          mvtype: '',
          mvinformation: '',
          mvname: '',
          id:''
        },
        rules: {
            mvtype:[
                {validator:checkmvType,trigger:'blur'}
            ],
          mvname:[
              {validator:checkmvName,trigger:'blur'}
          ],
          mvinformation:[
              {validator:checkmvInformation,trigger:'blur'}
          ]
        }
      };
    },
    methods: {
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      submitForm(){
          const _this=this
          this.$axios.post('http://localhost:8443/api/updatemovie',_this.ruleForm).then(successResponse => {
          this.responseResult = JSON.stringify(successResponse.data)
          if (successResponse.data.code === 200) {
            this.$router.replace({path: '/index/mvmanage'})
          }
        }).catch(failResponse => {// eslint-disable-line no-unused-vars
        })
      }
    },
    created(){
        var query=this.$route.query;
        let lat=query.id;
        console.log(lat);
        const _this=this
          axios.get("http://localhost:8443/api/searchmvid/"+lat).then(function(resp){
            _this.ruleForm=resp.data
            console.log(resp.data)
          })
    }
  }
</script>