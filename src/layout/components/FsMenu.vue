<template>
  <div class="fs-menu">
    <div class="container-wrap">
      <el-menu
        :default-active="activeName"
        mode="horizontal"
        :router="false"
        :unique-opened="true"
        @open="handleOpen"
        @close="handleClose"
        @select="handleSelect"
      >
        <el-menu-item index="home">
          <span slot="title">首页</span>
        </el-menu-item>
        <el-menu-item index="about">
          <span slot="title">关于我们</span>
        </el-menu-item>
        <el-menu-item index="shop">
          <span slot="title">健康商城</span>
        </el-menu-item>
        <el-menu-item index="service">
          <span slot="title">健康服务</span>
        </el-menu-item>
        <el-menu-item index="consult">
          <span slot="title">咨询中心</span>
        </el-menu-item>
        <el-menu-item index="personCenter">
          <span slot="title">个人中心</span>
        </el-menu-item>
        <el-menu-item index="chat">
          <span slot="title">聊天室</span>
        </el-menu-item>
      </el-menu>
    </div>
  </div>
</template>

<script>
export default {
  name: 'fs-menu',
  data () {
    return {
      // activeNames: ['1']
    }
  },
  computed: {
    activeName: function () {
      // return this.$route.name
      const currentMenu = this.$route.path.split('/')
      return currentMenu[1]
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
      this.$router.push({ name: key })
    }
  }
}
</script>

<style lang="scss" scoped>
.fs-menu {
  height: 60px;
  background: #FEFFFF;
}
</style>
