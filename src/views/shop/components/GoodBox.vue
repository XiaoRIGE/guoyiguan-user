<!-- =========================================================================================
     File Name: GoodBox
     Description: 商品列表盒子
     Component Name: GoodBox
     ----------------------------------------------------------------------------------------
     Item Name:
     Author: srj
     Creation time:  2020-11-14 15:10:09
     Change time:  2020-11-14 15:10:09
========================================================================================== -->
<template>
  <div class="GoodBox cursor">
    <img
      src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3857984119,1275231702&fm=26&gp=0.jpg"
      class="logo"
    />
    <div class="good-info">
      <p class="price mt-20">￥100/盒</p>
      <p class="name mt-10">阿莫西林</p>
      <p class="desc mt-10">商品简介商品简介商品简介商品简介商商品简介商品简介商商品简介商品简介商</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GoodBox',
  data () {
    return {}
  },
  created () {},
  methods: {}
}
</script>

<style scoped lang="scss">
.GoodBox {
  .logo {
    width: 310px;
    height: 310px;
  }
  .good-info {
    .price {
      font-size: 24px;
      font-family: STHeitiTC-Medium, STHeitiTC;
      font-weight: 500;
      color: #FF2500;
      line-height: 25px;
    }
    .name {
      font-size: 18px;
      font-family: STHeitiTC-Medium, STHeitiTC;
      font-weight: 500;
      color: #222222;
      line-height: 19px;
    }
    .desc {
      font-size: 14px;
      font-family: STHeitiTC-Light, STHeitiTC;
      font-weight: 300;
      color: #AAAAAA;
      line-height: 20px;
      @include ellipsis();
    }
  }
}
</style>
