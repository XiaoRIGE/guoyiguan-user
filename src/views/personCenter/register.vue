<!-- =========================================================================================
     File Name: register
     Description: 注册页面
     Component Name: register
     ----------------------------------------------------------------------------------------
     Item Name:
     Author: srj
     Creation time:  2020-10-26 20:23:48
     Change time:  2020-10-26 20:23:48
========================================================================================== -->
<template>
  <div class="register container-wrap">
    <div class="wrapper">
      <h1>新用户注册</h1>
      <el-form
        ref="ruleForm"
        :model="ruleForm"
        :rules="rules"
        label-width="80px"
      >
        <el-form-item label="手机号" prop="phone">
          <el-input v-model="ruleForm.phone" placeholder="请输入"></el-input>
        </el-form-item>
        <el-form-item label="姓名" prop="username">
          <el-input v-model="ruleForm.username" placeholder="请输入"></el-input>
        </el-form-item>
        <el-form-item label="邮箱" prop="email">
          <el-input v-model="ruleForm.email" placeholder="请输入"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="pwd">
          <el-input v-model="ruleForm.pwd" placeholder="请输入"></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="pwd2">
          <el-input v-model="ruleForm.pwd2" placeholder="请输入"></el-input>
        </el-form-item>
        <el-form-item label="来源" prop="from">
          <el-select v-model="ruleForm.from" placeholder="请选择">
            <el-option label="来源一" value="shanghai"></el-option>
            <el-option label="来源二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item prop="agreement">
          <el-checkbox-group v-model="ruleForm.agreement">
            <el-checkbox name="agreement">
              <span
                >阅读并同意《 <span @click="goRouter('aggrement','user')" class="color-blue">用户协议</span>》《
                <span @click="goRouter('aggrement','privacy')" class="color-blue">隐私协议</span>》
              </span>
            </el-checkbox>
          </el-checkbox-group>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')"
            >注册</el-button
          >
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'register',
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
        username: [{ required: true, message: '请输入姓名', trigger: 'blur' }],
        email: [{ required: true, message: '请输入邮箱', trigger: 'blur' }],
        pwd: [{ required: true, message: '请输入密码', trigger: 'blur' }],
        pwd2: [{ required: true, message: '请输入密码', trigger: 'blur' }],
        agreement: [{ required: true, message: '请勾选协议', trigger: 'blur' }]
      }
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!')
          this.$router.push({ name: 'message' })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    },
    goRouter (name, type) {
      this.$router.push({ name, query: { type } })
    }
  }
}
</script>

<style lang="scss" scoped>
.register {
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
