<!-- =========================================================================================
     File Name: orderDetail
     Description: 订单详情
     Component Name: orderDetail
     ----------------------------------------------------------------------------------------
     Item Name:
     Author: srj
     Creation time:  2020-11-23 21:20:14
     Change time:  2020-11-23 21:20:14
========================================================================================== -->
<template>
  <div class="orderDetail">
    <div class="container-wrap">
      <!-- 待付款 -->
      <p class="tips mb-20">
        您還有
        <span class="corlor-red">
          <!-- 21小时22分21秒 -->
          <CountDown
            @callBack="callBack"
            class="CountDown"
            :time="time"
            :type="4"
          ></CountDown>
        </span>
        可付款，超時訂單自動關閉
      </p>
      <!-- 待收货 -->
      <!-- <p class="title mb-20">待收货订单详情</p> -->
      <!-- 已完成 -->
      <!-- <p class="title mb-20">待收货订单详情</p> -->
      <div class="content">
        <el-table :data="tableData" style="width: 100%">
          <el-table-column prop="name" label="商品" min-width="400">
            <template scoped >
              <div class="cell-wrapper">
                <img
                  src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3327024262,3610326637&fm=26&gp=0.jpg"
                  class="good-logo"
                />
                <span class="good-name" style="margin-left: 10px">{{
                  scope.row.name
                }}</span>
              </div>
            </template>
          </el-table-column>
          <el-table-column prop="price" label="单价"> </el-table-column>
          <el-table-column prop="num" label="数量"> </el-table-column>
          <el-table-column prop="total" label="小计"> </el-table-column>
        </el-table>
        <!-- 支付信息 -->
        <div class="supplement">
          <p>
            合计：
            <span class="corlor-red">￥22</span>
            (含运费10元)积分已抵扣￥2.00
            <el-button type="primary" class="ml-40">付款</el-button>
            <!-- <el-button type="primary" class="ml-40">确认收货</el-button> -->
          </p>
        </div>
        <!-- 订单详情 -->
        <div class="detail-box">
          <p>下單時間：2020/06/06</p>
          <p>訂 單 號：1020441678250414001102</p>
          <p>留 言：分裝好</p>
          <p>取貨方式：自取</p>
          <p>
            收貨地址：沙田圓洲角源順圍2號冠華大廈地下A10-A11號鋪(第一城站D出口行2分鐘)（油麻地店）1234567
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CountDown from '@/components/common/CountDown'
export default {
  name: 'orderDetail',
  components: { CountDown },
  data () {
    return {
      time: new Date().getTime() + 86400000,
      tableData: [
        {
          name:
            '当标题超长时候的展示方式排版展示如当标题超长时候的展示方式排版展示如下',
          price: '￥39.00',
          num: 'x2',
          total: '￥39.00'
        }
      ]
    }
  },
  created () {},
  methods: {
    callBack () {
      console.log('==')
    }
  }
}
</script>

<style scoped  lang="scss">
.orderDetail {
  .container-wrap {
    padding: 40px;
    background: #fff;
    .tips {
      font-size: 16px;
      font-family: STHeitiSC-Medium, STHeitiSC;
      font-weight: 500;
      color: #222222;
      line-height: 16px;
      .CountDown {
        display: inline-block;
      }
    }
    .title {
      font-size: 18px;
      font-family: STHeitiTC-Medium, STHeitiTC;
      font-weight: 500;
      color: #222222;
      line-height: 19px;
    }
    .content {
      .cell-wrapper {
        @include flex-center(flex-start);
        .good-logo {
          width: 80px;
          height: 80px;
        }
        .good-name {
          font-size: 16px;
          font-family: STHeitiTC-Medium, STHeitiTC;
          font-weight: 500;
          color: #222222;
          line-height: 24px;
        }
      }
      .supplement {
        p {
          @include flex-center(flex-end);
          height: 64px;
          font-size: 14px;
          font-family: STHeitiSC-Light, STHeitiSC;
          font-weight: 300;
          color: #222222;
          line-height: 24px;
          .corlor-red {
            display: inline-block;
            margin-right: 10px;
            font-size: 24px;
            font-family: STHeitiSC-Light, STHeitiSC;
            font-weight: 600;
            color: #ff2500;
            line-height: 24px;
          }
        }
        ::v-deep {
          .el-button {
            width: 100px;
            height: 40px;
          }
        }
      }
      .detail-box {
        margin-top: 20px;
        background: #f5f6f7;
        padding: 20px;
        p {
          margin-bottom: 10px;
          font-size: 15px;
          font-family: STHeitiSC-Light, STHeitiSC;
          font-weight: 300;
          color: #222222;
          line-height: 15px;
        }
      }
    }
  }
}
::v-deep {
  thead th {
    background-color: #f5f6f7;
  }
}
</style>
