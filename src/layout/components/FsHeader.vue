<template>
  <div class="fs-header">
    <div class="container-wrap">
      <h1 class="left">国医馆医师端logo</h1>
      <div class="right">
        {{ $t("common.home") }}
        {{ $t("message.hint1") }}
        <span @click="changeLanguage">切换语言</span>
        <div class="user-info">
          <img
            class="avator"
            src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2625008281,94811485&fm=26&gp=0.jpg"
          />
          <span>王医师</span>
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
    }
  }
}
</script>

<style lang="scss" scoped>
.fs-header {
  height: 80px;
  width: 100%;
  background: #268cff;
  .container-wrap {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .left {
  }
  .right {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .user-info {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .avator {
      width: 80px;
      height: 80px;
      border-radius: 50%;
    }
  }
}
</style>
