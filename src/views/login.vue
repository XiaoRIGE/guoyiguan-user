<!-- =========================================================================================
     File Name: login
     Description: 登录页面
     Component Name: login
     ----------------------------------------------------------------------------------------
     Item Name:
     Author: srj
     Creation time:  2020-10-26 20:38:02
     Change time:  2020-10-26 20:38:02
========================================================================================== -->
<template>
  <div class="login">
    <div class="bg">
      <img src="../assets/image/bg-login.jpg" />
    </div>
    <div class="content">
      <h1>logo</h1>
      <!-- <h3 class="mt-65">诊所管理信息系统</h3> -->
      <h3 class="mt-65">診所管理信息系統</h3>
      <!-- 診所管理信息系統 -->
      <!-- label-width="100px" -->

      <el-form
        :model="loginForm"
        status-icon
        :rules="rules"
        ref="loginForm"
        size="medium"
        class="demo-ruleForm mt-36"
      >
        <el-form-item prop="username">
          <el-input
            placeholder="请输入账号"
            type="password"
            v-model="loginForm.username"
            auto-complete="off"
          ></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            type="password"
            placeholder="请输入密码"
            v-model="loginForm.password"
            auto-complete="off"
          ></el-input>
        </el-form-item>
        <el-form-item prop="verificationCode">
          <!-- <el-input
            v-model.number="loginForm.verificationCode"
            placeholder="请输入验证码"
          ></el-input> -->
          <el-col :span="16">
            <el-input
            v-model.number="loginForm.verificationCode"
            placeholder="请输入验证码"
          ></el-input>
            </el-col>
            <el-col :span="8">
                <Sidentify @click.native="getCode" :identifyCode="code" class="cursor"></Sidentify>
            </el-col>
        </el-form-item>
        <el-form-item>
          <!-- <el-button type="primary" @click="submitForm('loginForm')"
            >提交</el-button
          >
          <el-button @click="resetForm('loginForm')">重置</el-button> -->
          <el-button type="text" class="btn">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import Sidentify from '@/components/common/Sidentify'
import { getRandomNum } from '@/utils/index'
export default {
  name: 'login',
  components: { Sidentify },
  data () {
    var checkAge = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('年龄不能为空'))
      }
      setTimeout(() => {
        if (!Number.isInteger(value)) {
          callback(new Error('请输入数字值'))
        } else {
          if (value < 18) {
            callback(new Error('必须年满18岁'))
          } else {
            callback()
          }
        }
      }, 1000)
    }
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        if (this.loginForm.password !== '') {
          this.$refs.loginForm.validateField('password')
        }
        callback()
      }
    }
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'))
      } else if (value !== this.loginForm.username) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    }
    return {
      loginForm: {
        username: '',
        password: '',
        verificationCode: ''
      },
      code: '',
      rules: {
        username: [{ validator: validatePass, trigger: 'blur' }],
        password: [{ validator: validatePass2, trigger: 'blur' }],
        verificationCode: [{ validator: checkAge, trigger: 'blur' }]
      }
    }
  },
  created () {
    this.getCode()
  },
  methods: {
    getCode () {
      //   获取验证码
      this.code = getRandomNum()
    },
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>

<style lang="scss" scoped>
.login {
  position: relative;
  width: 100%;
  height: 100%;
  .bg {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
  .content {
    @include hv-center(absolute);
    box-sizing: border-box;
    padding: 50px 74px 70px;
    width: 546px;
    height: 610px;
    background: #ffffff;
    box-shadow: 0px 10px 34px 0px rgba(0, 0, 0, 0.3);
    border-radius: 17px;
    h1 {
      text-align: center;
    }
    h3 {
      text-align: center;
      font-size: 36px;
      font-family: STSongti-TC-Bold, STSongti-TC;
      font-weight: bold;
      color: #000000;
      line-height: 42px;
    }
  }
  // background: rgba(66, 127, 183, 0.8);
  //   background-image: url('../assets/image/bg-login.jpg');
  // background-position: 50%;
  // background-repeat: no-repeat;
  // background-size: 100% 100%;
  ::v-deep {
    .el-input__inner {
      height: 55px;
      line-height: 55px;
    }
    .btn {
      @include h-center();
      box-sizing: border-box;
      padding: 0;
      margin: 0;
      //   width: 400px;
      width: 100%;
      height: 55px;
      background: linear-gradient(140deg, #268cff 0%, #68b0ff 100%);
      border-radius: 3px;
      font-size: 20px;
      font-family: STSongti-TC-Bold, STSongti-TC;
      font-weight: bold;
      color: #ffffff;
      line-height: 55px;
    }
  }
}
</style>
