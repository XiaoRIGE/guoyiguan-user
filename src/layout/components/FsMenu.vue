<template>
  <div class="fs-menu container-wrap">
    <!-- default-active="2"  class="el-menu-vertical-demo"-->
    <!-- #268CFF  #F9FBFF-->
    <el-menu
      :default-active="activeName"
      mode="horizontal"
      :router="true"
      :unique-opened="true"

      @open="handleOpen"
      @close="handleClose"
      @select="handleSelect"
    >
      <el-submenu index="1">
        <template slot="title">

          <span>医师</span>
        </template>
        <el-menu-item index="home">医师工作台</el-menu-item>
        <el-menu-item index="subscribe">门诊预约</el-menu-item>
        <el-menu-item index="review">门诊回顾</el-menu-item>
      </el-submenu>
      <el-menu-item index="patientCenter">

        <span slot="title">患者中心</span>
      </el-menu-item>
      <el-submenu index="3">
        <template slot="title">

          <span>门诊协作</span>
        </template>
        <el-menu-item index="consultation">会诊</el-menu-item>
        <el-menu-item index="referral">转诊</el-menu-item>
      </el-submenu>
      <el-submenu index="4" >
        <template slot="title">

          <span>资源管理</span>
        </template>
        <el-menu-item index="prescription">中草药方剂管理</el-menu-item>
        <el-menu-item index="acupuncture">针灸管理</el-menu-item>
        <el-menu-item index="product">成品管理</el-menu-item>
      </el-submenu>
      <el-menu-item index="setting">

        <span slot="title">个人设置</span>
      </el-menu-item>
      <el-menu-item index="chat">

        <span slot="title">聊天室</span>
      </el-menu-item>
    </el-menu>

  </div>
</template>

<script>
export default {
  name: 'fs-menu',
  data () {
    return {
      activeNames: ['1']
    }
  },
  computed: {
    activeName: function () {
      return this.$route.name
    }
  },

  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      // eslint-disable-next-line no-console
      console.log(key, keyPath)
    },
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style lang="scss" scoped>
// .fs-menu {
//   padding-left: 10px;
//   // width: 200px;
//   // height: 100vh;
//   width: 302px;
//   height: 2250px;
//   background: linear-gradient(140deg, #0E7FFE 0%, #0D74E5 100%);
// }

</style>
