<!-- =========================================================================================
     File Name: about
     Description: 关于我们
     Component Name: about
     ----------------------------------------------------------------------------------------
     Item Name:
     Author: srj
     Creation time:  2020-10-26 20:09:08
     Change time:  2020-10-26 20:09:08
========================================================================================== -->
<template>
  <div class="about">
    <div class="container-wrap">
      <h1>关于我们</h1>
      <img src="../assets/image/bg-about.png" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'about',
  data () {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.about {
  .container-wrap {
    h1 {
      margin-top: 60px;
      margin-bottom: 20px;
      font-size: 28px;
      font-family: STHeitiTC-Medium, STHeitiTC;
      font-weight: 500;
      color: #222222;
      line-height: 29px;
      text-align: center;
    }
    img {
      width: 100%;
      margin-bottom: 40px;
    }
  }
}
</style>
