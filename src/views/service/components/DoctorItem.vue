<!-- =========================================================================================
     File Name: DoctorItem
     Description: 醫師列表盒子
     Component Name: DoctorItem
     ----------------------------------------------------------------------------------------
     Item Name:
     Author: srj
     Creation time:  2020-11-14 15:10:09
     Change time:  2020-11-14 15:10:09
========================================================================================== -->
<template>
  <div @click="goDetail" class="DoctorItem cursor">
      <!-- src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=22951233,2174308053&fm=26&gp=0.jpg" -->
    <img
      src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1734608297,1782255014&fm=26&gp=0.jpg"
      class="logo"
    />
    <div class="clinic-info">
      <p class="name mt-20">XXX醫師</p>
      <p class="desc mt-10">擅長領域：骨科、推拿、外科</p>
      <p class="desc mt-10">預約次數：100次</p>
      <p class="desc mt-10">預約價格：￥48.00</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DoctorItem',
  data () {
    return {}
  },
  created () {},
  methods: {
    goDetail () {
      this.$router.push({ name: 'doctorDetail', query: { id: 23 } })
    }
  }
}
</script>

<style scoped  lang="scss">
.DoctorItem {
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
