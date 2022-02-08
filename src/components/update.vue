<template>
<div>
<el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
    <el-form-item label="用户id" prop="id">
        <el-input type="text" v-model="ruleForm.id"  readonly="true"></el-input>
    </el-form-item>
    <el-form-item label="用户昵称" prop="username">
        <el-input type="text" v-model="ruleForm.username"></el-input>
    </el-form-item>
    <el-form-item label="用户邮箱" prop="email">
        <el-input type="text" v-model="ruleForm.email"></el-input>
    </el-form-item>
  <el-form-item label="密码" prop="password">
    <el-input type="password" v-model="ruleForm.password" autocomplete="off" show-password="true"></el-input>
  </el-form-item>
  <el-form-item label="确认密码" prop="checkPass">
    <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off" show-password="true"></el-input>
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
        var checkName=(rule,value,callback)=>{
            if(!value){
                return callback(new Error('请输入用户名'))
            }else{
                callback();
            }
        };
        var checkEmail=(rule,value,callback)=>{
            if(!value){
                return callback(new Error('请输入email'))
            }
            else{
                callback();
            }
        };
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.ruleForm.checkPass !== '') {
            this.$refs.ruleForm.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm.password) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        ruleForm: {
          password: '',
          checkPass: '',
          username: '',
          id:'',
          email:'',
        },
        rules: {
          passwrod: [
            { validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' }
          ],
          username:[
              {validator:checkName,trigger:'blur'}
          ],
          email:[
              {validator:checkEmail,trigger:'blur'}
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
          this.$axios.post('/updateuser',_this.ruleForm).then(successResponse => {
          this.responseResult = JSON.stringify(successResponse.data)
          if (successResponse.data.code === 200) {
            this.$router.replace({path: '/index/usermanage'})
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
          axios.get("http://localhost:8443/api/searchuser/"+lat).then(function(resp){
            _this.ruleForm=resp.data
            console.log(resp.data)
          })
    }
  }
</script>