/*
* @Description: nodata组件
* @Author: srj
* @Date: 2020-04-06 11:40:46
* @LastEditors  : srj
* @LastEditTime : 2020-04-06 11:40:46
*/
<template>
  <div class="nodata-box">
    <img src="../../assets/image/noData.png" alt :style="{height:height,width:width}">
    <p class="nodata-title">{{title}}</p>
  </div>
</template>
<script>
export default {
  props: {
    // 无数据时展示文字
    title: {
      type: String,
      default: '暂无数据'
    },
    height: {
      type: String,
      default: '100%'
    },
    width: {
      type: String,
      default: '700px'
    }
  }
}
</script>
<style lang="scss" scoped>
.nodata-box {
  text-align: center;
  padding: 30px;
  .nodata-title {
    font-size: $font-20;
    color: rgba(207, 207, 207, 1);
    line-height: 28px;
  }
}
</style>
