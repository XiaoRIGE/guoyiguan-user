<!-- =========================================================================================
     File Name: OrderItem
     Description: 訂單列表
     Component Name: OrderItem
     ----------------------------------------------------------------------------------------
     Item Name:
     Author: srj
     Creation time:  2020-11-23 19:44:25
     Change time:  2020-11-23 19:44:25
========================================================================================== -->
<template>
  <div class="OrderItem">
    <div class="head">2020/06.06 訂單7705d0d54s0ddd</div>
    <div class="content">
      <el-row class="order-row">
        <el-col :span="1">
          <el-checkbox v-model="checked"></el-checkbox>
        </el-col>
        <el-col :span="3">
          <img
            class="goods-info"
            src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3357740675,4073866775&fm=26&gp=0.jpg"
          />
        </el-col>
        <el-col :span="8" class="column">
          <h2 class="name">阿莫西林</h2>
          <p class="tips">
            您還有
            <span class="corlor-red">
              <!-- 21小时22分21秒 -->
              <CountDown @callBack="callBack" class="CountDown" :time="time" :type="4"></CountDown>
            </span>
            可付款，超時訂單自動關閉
          </p>
        </el-col>
        <el-col :span="4">
          <span class="price">￥39.00</span>
          <span class="num">X2</span>
        </el-col>
        <el-col :span="4">
          <p class="youhui">￥39.00</p>
          <p class="youhui">(含运费10元)</p>
          <p class="youhui">积分已抵扣￥2.00</p>
        </el-col>
        <el-col :span="4" class="column-end">
          <el-button v-if="orderType === 'toBePaid'" type="primary"
            >去付款</el-button
          >
          <el-button v-if="orderType === 'toBeHarvested'" type="primary"
            >確認收穫</el-button
          >
          <el-button
            v-if="orderType === 'toBePaid'"
            class="corlor-red"
            type="text"
            >取消訂單</el-button
          >
          <el-button
            @click="goDetail"
            type="text"
            style="color: #222222"
            :class="orderType === 'successed' ? 'mt-20' : ''"
            >訂單詳情</el-button
          >
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import CountDown from '@/components/common/CountDown'
export default {
  name: 'OrderItem',
  components: { CountDown },
  data () {
    return {
      checked: false,
      time: new Date().getTime() + 86400000
    //   time: new Date().getTime() + 5000
    }
  },
  props: {
    orderType: {
      type: String
    }
  },
  created () {},
  methods: {
    callBack () {
      console.log('订单结束，刷新列表')
    },
    goDetail () {
      this.$router.push({ name: 'orderDetail' })
    }
  }
}
</script>

<style scoped lang="scss">
.OrderItem {
  .head {
    height: 45px;
    background: #f5f6f7;
    font-size: 15px;
    font-family: STHeitiSC-Light, STHeitiSC;
    font-weight: 300;
    color: #222222;
    line-height: 45px;
  }
  .content {
    padding: 20px 0;
    .order-row {
      @include flex-center(space-between);
      font-size: 15px;
      font-family: STHeitiSC-Light, STHeitiSC;
      font-weight: 300;
      color: #222222;
      line-height: 15px;
      .column {
        @include flex-center(space-between, flex-sttart);
        flex-direction: column;
        height: 80px;
      }
      .column-end {
        @include flex-center(space-between, flex-end);
        flex-direction: column;
        height: 80px;
        ::v-deep .el-button {
          padding: 0;
          line-height: 30px;

          width: 80px;
          height: 30px;
        }
      }
      .goods-info {
        width: 80px;
        height: 80px;
      }
      .name {
        font-size: 18px;
        font-family: STHeitiTC-Medium, STHeitiTC;
        font-weight: 500;
        color: #222222;
        line-height: 19px;
      }
      .price {
        display: inline-block;
        margin-right: 60px;
      }
      .CountDown {
          display: inline-block;
      }
    }
  }
}
</style>
