<!-- =========================================================================================
     File Name: forget
     Description: 密码找回
     Component Name: forget
     ----------------------------------------------------------------------------------------
     Item Name:
     Author: srj
     Creation time:  2020-10-26 20:23:48
     Change time:  2020-10-26 20:23:48
========================================================================================== -->
<template>
  <div class="forget container-wrap">
    <div class="wrapper">
      <h1>密码找回</h1>
      <el-form
        ref="ruleForm"
        :model="ruleForm"
        :rules="rules"
        label-width="120px"
      >
        <el-form-item label="邮箱/手机号" prop="phone">
          <el-input v-model="ruleForm.phone" placeholder="请输入"></el-input>
        </el-form-item>
        <el-form-item label="验证码" prop="username">
          <el-input v-model="ruleForm.username" placeholder="请输入"></el-input>
        </el-form-item>

        <el-form-item label="密码" prop="pwd">
          <el-input v-model="ruleForm.pwd" placeholder="请输入"></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="pwd2">
          <el-input v-model="ruleForm.pwd2" placeholder="请输入"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')"
            >确认</el-button
          >
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'forget',
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
        phone: [{ required: true, message: '邮箱/手机号', trigger: 'blur' }],
        username: [{ required: true, message: '请输入姓名', trigger: 'blur' }],
        pwd: [{ required: true, message: '请输入密码', trigger: 'blur' }],
        pwd2: [{ required: true, message: '请输入密码', trigger: 'blur' }]
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
.forget {
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
      width: 300px;
    }
    .el-checkbox__input.is-checked + .el-checkbox__label {
      color: #4a4a4a;
    }
  }
}
</style>
