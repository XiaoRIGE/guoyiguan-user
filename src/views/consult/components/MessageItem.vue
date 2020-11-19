<!-- =========================================================================================
     File Name: MessageItem
     Description: 資訊組件
     Component Name: MessageItem
     ----------------------------------------------------------------------------------------
     Item Name:
     Author: srj
     Creation time:  2020-11-19 20:42:26
     Change time:  2020-11-19 20:42:26
========================================================================================== -->
<template>
  <div class="MessageItem">
    <div class="item-box">
      <img v-if="itemInfo.imgUrl" :src="itemInfo.imgUrl" class="logo" />
      <div class="info" :class="itemInfo.imgUrl?'heaght-135' :''">
        <p @click="goRouter" class="title cursor">{{ itemInfo.title }}</p>
        <p class="desc">
          <span class="date mr-20">{{ itemInfo.date }}</span>
          <span >閲讀量：{{ itemInfo.readNum }}</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MessageItem',
  data () {
    return {}
  },
  props: {
    itemInfo: {
      type: Object,
      required: true
    }
  },
  created () {},
  methods: {
    goRouter (item) {
      this.$router.push({ name: 'consultDetail', query: { item: item.imgUrl } })
    }
  }
}
</script>

<style scoped lang="scss">
.MessageItem {
  .item-box {
    @include flex-center(flex-start,flex-start);
    padding-bottom: 20px;
    border-bottom: 1px solid #DDDDDD;
    .logo {
      margin-right: 20px;
      width: 240px;
      height: 135px;
    }
    .info {
        @include flex-center(space-between,flex-start);
        flex-direction: column;
        min-height: 80px;
      .title {
          @include ellipsis-num(2);
        font-size: 24px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #222222;
        line-height: 36px;
      }
      .desc {
        font-size: 14px;
        font-family: STHeitiTC-Light, STHeitiTC;
        font-weight: 300;
        color: #666666;
        line-height: 20px;
        .date {
            display: inline-block;
        }
      }
    }
    .heaght-135 {
        height: 135px;
    }
  }
}
</style>
