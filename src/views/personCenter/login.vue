<!-- =========================================================================================
     File Name: login
     Description: 登录页面
     Component Name: login
     ----------------------------------------------------------------------------------------
     Item Name:
     Author: srj
     Creation time:  2020-10-26 20:23:48
     Change time:  2020-10-26 20:23:48
========================================================================================== -->
<template>
  <div class="login container-wrap">
    <div class="wrapper-box">
      <div class="wrapper">
        <h1>登录</h1>
        <!-- label-width="80px" -->
        <el-form ref="ruleForm" :model="ruleForm" :rules="rules">
          <!-- label="手机号" -->
          <el-form-item prop="phone">
            <el-input
              v-model="ruleForm.phone"
              placeholder="请输入手机号"
            ></el-input>
          </el-form-item>
          <!-- label="密码" -->
          <el-form-item prop="pwd">
            <el-input
              v-model="ruleForm.pwd"
              placeholder="请输入密码"
            ></el-input>
          </el-form-item>

          <el-form-item>
            <el-button
              type="primary"
              class="w-300"
              @click="submitForm('ruleForm')"
              >进入首页</el-button
            >
          </el-form-item>
          <p class="tips">
            <span>忘记密码？</span>
            <span>注册</span>
          </p>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      ruleForm: {
        phone: '',
        username: '',
        email: '',
        pwd: '',
        pwd2: '',
        agreement: []
      },
      rules: {
        phone: [{ required: true, message: '请输入手机号', trigger: 'blur' }],
        pwd: [{ required: true, message: '请输入密码', trigger: 'blur' }]
      }
    }
  },
  methods: {
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
  .wrapper-box {
    height: calc(100vh - 390px);
    background: #ffffff;
  }
  .wrapper {
    margin: 0 auto;
    width: 300px;
    margin-top: 20px;
    margin-bottom: 40px;
    padding: 40px 160px;
    background: #ffffff;
    h1 {
      text-align: center;
      font-size: 18px;
      font-weight: 600;
      color: #222222;
      margin-bottom: 40px;
    }
    .color-blue {
      color: #268cff;
    }
    .w-300 {
      width: 300px;
    }
    .tips {
      @include flex-center(space-between);
      margin-top: 20px;
      span {
        font-size: 14px;
        font-weight: 300;
        color: #222222;
      }
    }
  }
  ::v-deep {
    .el-input {
      width: 300px;
    }
    .el-checkbox__input.is-checked + .el-checkbox__label {
      color: #4a4a4a;
    }
  }
}
</style>
