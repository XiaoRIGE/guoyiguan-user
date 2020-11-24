<!-- =========================================================================================
     File Name: ClinicItem
     Description: 診所列表盒子
     Component Name: ClinicItem
     ----------------------------------------------------------------------------------------
     Item Name:
     Author: srj
     Creation time:  2020-11-14 15:10:09
     Change time:  2020-11-14 15:10:09
========================================================================================== -->
<template>
  <div @click="goDetail" class="ClinicItem cursor">
    <img
      src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1323937680,3520682971&fm=26&gp=0.jpg"
      class="logo"
    />
    <div class="clinic-info">
      <p class="name mt-20">XX診所</p>
      <p class="desc mt-10">诊所地址：香港湾仔区弯道23号英俊中心泰昌路仁安街</p>
      <p class="desc mt-10">营业时间：周一至周五 9：00-18：00</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ClinicItem',
  data () {
    return {}
  },
  created () {},
  methods: {
    goDetail () {
      this.$router.push({ name: 'clinicDetail', query: { id: 23 } })
    }
  }
}
</script>

<style scoped  lang="scss">
.ClinicItem {
  .logo {
    width: 310px;
    height: 310px;
  }
  .clinic-info {
    .name {
      font-size: 24px;
      font-family: STHeitiTC-Medium, STHeitiTC;
      font-weight: 500;
      color: #222222;
      line-height: 25px;
    }
    .desc {
      font-size: 14px;
      font-family: STHeitiTC-Light, STHeitiTC;
      font-weight: 300;
      color: #aaaaaa;
      line-height: 20px;
      @include ellipsis();
    }
  }
}
</style>
