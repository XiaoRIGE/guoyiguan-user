<!-- =========================================================================================
     File Name: fotter
     Description: 页脚
     Component Name: fotter
     ----------------------------------------------------------------------------------------
     Item Name:
     Author: srj
     Creation time:  2020-10-26 20:38:02
     Change time:  2020-10-26 20:38:02
========================================================================================== -->
<template>
  <div class="fotter">
    <div class="container-wrap">
      <div class="item-box">
        <span class="item mb-20" v-for="(item, index) in 8" :key="index">{{
          `第${item}家分店`
        }}</span>
      </div>
      <div class="copy-right mt-40">
        <span>© 2020 香港國醫館 版權所有 不得轉載</span>
        <span class="phone ml-20">客服电话：028-8144937</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'fotter',
  data () {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.fotter {
  box-sizing: border-box;
  padding: 40px 0;
  width: 100%;
  height: 190px;
  background: #268cff;
  .item-box {
    display: flex;
    flex-wrap: wrap;
    .item {
      display: inline-block;

      width: 325px;
      height: 18px;
      font-size: 18px;
      font-family: STHeitiTC-Medium, STHeitiTC;
      font-weight: 500;
      color: #ffffff;
      line-height: 19px;
    }
  }
  .copy-right {
    width: 100%;
height: 14px;
font-size: 14px;
font-family: STHeitiTC-Medium, STHeitiTC;
font-weight: 500;
color: #DDDDDD;
line-height: 14px;
text-align: center;
.phone {
  display: inline-block;
}
  }
}
</style>
