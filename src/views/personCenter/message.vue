<!-- =========================================================================================
     File Name: message
     Description: 登录页面
     Component Name: message
     ----------------------------------------------------------------------------------------
     Item Name:
     Author: srj
     Creation time:  2020-10-26 20:23:48
     Change time:  2020-10-26 20:23:48
========================================================================================== -->
<template>
  <div class="message container-wrap">
    <div class="wrapper-box">
      <div class="wrapper">
        <p>恭喜你注册成功</p>
        <!-- <p>恭喜你密码找回成功</p> -->
        <el-button type="primary" class="w-300" @click="submitForm()"
          >进入首页</el-button
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'message',
  data () {
    return {}
  },
  methods: {
    submitForm () {
      this.$router.push({ name: 'home' })
    }
  }
}
</script>

<style lang="scss" scoped >
.message {
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
    p {
      margin-top: 150px;
      margin-bottom: 40px;
      text-align: center;
      font-size: 18px;
      font-weight: 500;
      color: #222222;
      line-height: 19px;
    }
    .w-300 {
      width: 300px;
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
