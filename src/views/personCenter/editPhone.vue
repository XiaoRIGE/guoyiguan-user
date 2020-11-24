<!-- =========================================================================================
     File Name: editPhone
     Description: 手机修改
     Component Name: editPhone
     ----------------------------------------------------------------------------------------
     Item Name:
     Author: srj
     Creation time:  2020-10-26 20:23:48
     Change time:  2020-10-26 20:23:48
========================================================================================== -->
<template>
  <div class="editPhone container-wrap">
    <div class="wrapper">
      <h1>手机修改</h1>
      <!-- label-width="120px" -->
      <el-form ref="ruleForm" :model="ruleForm" :rules="rules">
        <el-form-item prop="phone">
          <el-input
            v-model="ruleForm.phone"
            placeholder="请输入手机号"
          >
          <el-button slot="append" class="cursor yzm-btn">发送验证码</el-button></el-input>
        </el-form-item>
        <el-form-item prop="username">
          <el-input
            v-model="ruleForm.username"
            placeholder="请输入验证码"
          ></el-input>
        </el-form-item>

        <el-form-item prop="pwd">
          <el-input
            v-model="ruleForm.pwd"
            placeholder="请输入新手机号"
          ><el-button slot="append" class="cursor yzm-btn">发送验证码</el-button></el-input>
        </el-form-item>
        <el-form-item prop="pwd2">
          <el-input
            v-model="ruleForm.pwd2"
            placeholder="请输入验证码"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button
            type="primary"
            class="full-btn"
            @click="submitForm('ruleForm')"
            >确认</el-button
          >
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'editPhone',
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
        username: [{ required: true, message: '请输入验证码', trigger: 'blur' }],
        pwd: [{ required: true, message: '请输入手机号', trigger: 'blur' }],
        pwd2: [{ required: true, message: '请输入验证码', trigger: 'blur' }]
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

<style lang="scss" scoped >
.editPhone {
  .wrapper {
    // width: 100%;
    margin-top: 20px;
    margin-bottom: 40px;
    // height: 774px;
    padding: 40px 160px;
    background: #ffffff;
    h1 {
      font-size: 18px;
      font-weight: 600;
      color: #222222;
      margin-bottom: 40px;
    }
    .color-blue {
      color: #268cff;
    }
  }
  ::v-deep {
    .el-input {
      width: 420px;
    }
    .el-checkbox__input.is-checked + .el-checkbox__label {
      color: #4a4a4a;
    }
    .full-btn {
      width: 420px;
      height: 40px;
      background: #268cff;
      border-radius: 2px;
    }
    .yzm-btn {
       width: 100px;
      height: 40px;
      background: #268CFF;
      color: #fff;
    }
  }
}
</style>
