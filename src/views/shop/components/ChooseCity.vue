<!-- =========================================================================================
     File Name: ChooseCity
     Description: 城市选择
     Component Name: ChooseCity
     ----------------------------------------------------------------------------------------
     Item Name:
     Author: srj
     Creation time:  2020-11-17 21:20:39
     Change time:  2020-11-17 21:20:39
========================================================================================== -->
<template>
  <div class="ChooseCity">
    <div class="city-box">
      <div
        @click="handleClick(item)"
        v-for="(item, index) in cityList"
        :key="index"
        class="city-item"
        :class="current === item.name ? 'current' : ''"
      >
        {{ item.name }}
      </div>
      <div class="btn-box">
          <el-button type="primary" class="mr-80">確認</el-button>
          <el-button>取消</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ChooseCity',
  data () {
    return {
      cityList: [
        { name: '山东省', price: '三十' },
        { name: '内蒙古自治區', price: '四十' },
        { name: '安徽省', price: '三十' },
        { name: '黑龍江省', price: '四十' },
        { name: '河南省', price: '三十' },
        { name: '雲南省', price: '三十' },
        { name: '四川省', price: '三十' },
        { name: '湖南省', price: '三十' },
        { name: '江蘇省', price: '三十' },
        { name: '海南省', price: '三十' },
        { name: '雲南省', price: '三十' },
        { name: '湖北省', price: '三十' },
        { name: '湖北省', price: '三十' },
        { name: '山东省', price: '三十' },
        { name: '廣東省', price: '三十' },
        { name: '廣西省', price: '三十' }
      ],
      current: '四川省'
    }
  },
  created () {},
  methods: {
    handleClick (item) {
      this.current = item.name
    }
  }
}
</script>

<style scoped lang="scss">
.ChooseCity {
  .city-box {
    .city-item {
      display: inline-block;
      margin-right: 20px;
      width: 100px;
      height: 34px;
      background: #ffffff;
      border-radius: 2px;
      text-align: center;
      font-size: 14px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #222222;
      line-height: 34px;
    }
    .current {
      background: #D4E8FF;
      color: #268cff;
    }
    .btn-box {
        margin-top: 20px;
        @include flex-center();
        .el-button {
            width: 80px;
            height: 30px;
            line-height: 30px;
            padding: 0;
        }
    }
  }
}
</style>
