<template>
  <div class="fs-header">
    <div class="container-wrap">
      <div class="left">
        <img @click="goRouter('home')" src="../../assets/image/logo@2x.png" class="cursor"/>
      </div>
      <div class="right">
        <!-- 简繁切换demo -->
        <!-- {{ $t("common.home") }}
        {{ $t("message.hint1") }}
        <span @click="changeLanguage">切换语言</span> -->
        <div class="user-info">
          <el-button @click="goRouter('shopCart')" class="mr-20" type="text">购物车</el-button>
          <el-button class="mr-20" type="text">立即预约</el-button>
          <el-popover placement="bottom" trigger="click">
            <el-button>退出登录</el-button>
            <img
              slot="reference"
              class="avator mr-20 cursor"
              src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2625008281,94811485&fm=26&gp=0.jpg"
            />
          </el-popover>

          <img
            src="../../assets/image/Facebook@2x.png"
            class="facebook cursor"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'fs-header',
  data () {
    return {}
  },
  methods: {
    changeLanguage () {
      const lang = this.$i18n.locale === 'zh' ? 'tw' : 'zh'
      this.$i18n.locale = lang
    },
    goRouter (name) {
      this.$router.push({ name })
    }
  }
}
</script>

<style lang="scss" scoped>
.fs-header {
  height: 80px;
  width: 100%;
  background: #268cff;
  @include flex-center();
  .container-wrap {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .left {
    img {
      width: 170px;
    }
  }
  .right {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .user-info {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .el-button {
        box-sizing: border-box;
        padding: 0;
        width: 110px;
        height: 36px;
        line-height: 36px;
        border-radius: 2px;
        border: 1px solid #FFFFFF;
        font-size: 16px;
        font-family: STHeitiTC-Medium, STHeitiTC;
        font-weight: 500;
        color: #FFFFFF;
        opacity: 0.5;
      }
      .facebook {
        width: 40px;
        height: 40px;
      }
    }
    .avator {
      width: 40px;
      height: 40px;
      border-radius: 50%;
    }
  }
}
</style>
