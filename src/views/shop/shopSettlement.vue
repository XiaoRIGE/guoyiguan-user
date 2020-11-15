<!-- =========================================================================================
     File Name: shopSettlement
     Description: 购物车结算
     Component Name: shopSettlement
     ----------------------------------------------------------------------------------------
     Item Name:
     Author: srj
     Creation time:  2020-11-14 14:20:14
     Change time:  2020-11-14 14:20:14
========================================================================================== -->
<template>
  <div class="shopSettlement">
    <div class="container-wrap">
      <el-form class="myform" ref="form" :model="form">
        <el-form-item label="取貨方式：">
          <el-radio-group v-model="form.resource">
            <el-radio label="自取"></el-radio>
            <el-radio label="快遞"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item v-if="form.resource === '自取'" label="選擇診所：">
          <el-select v-model="form.region" placeholder="请选择活动区域">
            <el-option label="xx診所1" value="shanghai"></el-option>
            <el-option label="xx診所2" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <div v-if="form.resource === '自取'" class="tips">
          <p>沙田分店</p>
          <p>3791 2793, 5499 3539</p>
          <p>
            沙田圓洲角源順圍2號冠華大廈地下A10-A11號鋪(第一城站D出口行2分鐘)
          </p>
        </div>
        <p class="address-box">
          <span>收貨地址：</span>
          <span class="cursor color-primary">管理收貨地址</span>
        </p>
        <!-- 選擇快遞并且當前賬號沒有地址 -->
        <!-- <el-input
          v-if="form.resource === '快遞'"
          type="textarea"
          v-model="form.address"
          maxlength="200"
        ></el-input> -->
        <!-- 選擇快遞并且有地址 -->
        <div class="has-address">
          <div class="address-item current">
            <p class="name">
              <span>王二（收）</span>
              <span>19956457823</span>
            </p>
            <p class="address-name">香港湾仔区港湾道23号鹰君中心地下G05-06铺</p>
            <img src="../../assets/image/checked@2x.png" class="checked-icon">
          </div>
          <div class="address-item ">
            <p class="name">
              <span>張三（收）</span>
              <span>19956457823</span>
            </p>
            <p class="address-name">香港湾仔区港湾道23号鹰君中心地下G05-06铺</p>

          </div>
        </div>
      </el-form>
      <div class="content">
        <p class="title">確認訂單信息</p>
        <el-table :data="tableData" ref="mytable" style="width: 100%">
          <el-table-column prop="info" label="商品信息" min-width="180">
            <template slot-scope="scope">
              <div class="info-box">
                <img class="good-logo" :src="scope.row.logo" alt="" />
                <span>{{ scope.row.info }}</span>
              </div>
            </template>
          </el-table-column>
          <el-table-column prop="name" label="單價" width="180">
          </el-table-column>
          <el-table-column prop="number" label="數量">
            <template slot-scope="scope">
              <el-input-number
                v-model="scope.row.number"
                @change="handleChange(scope)"
                :min="1"
                :max="10"
                label="描述文字"
              ></el-input-number>
            </template>
          </el-table-column>
          <el-table-column prop="price" label="金額"> </el-table-column>
          <el-table-column prop="yunfei" label="小計"> </el-table-column>
        </el-table>
        <div class="bottom">
          <el-form>
            <el-form-item label="給賣家留言：">
              <el-input
                type="textarea"
                v-model="form.desc"
                maxlength="200"
                show-word-limit
              ></el-input>
            </el-form-item>
          </el-form>
        </div>
        <div class="tips-box">
          <div class="flex-end mb-24">
            <span>合計（不含運費）：</span>
            <span class="price">￥25.00</span>
          </div>
          <div class="flex-end">
            <span class="inline-block mr-20"
              >您有積分100分，可使用積分抵扣￥10.00</span
            >
            <el-checkbox v-model="checked"></el-checkbox>
          </div>
          <div class="flex-end mt-40">
            <div class="address-info">
              <p>
                <span class="value">實付款：</span>
                <span class="total-price">￥48.00</span>
              </p>
              <p>
                <span class="label">寄送至：</span>
                <span class="label">香港灣仔區彎道23號英俊中心地G05-06</span>
              </p>
              <p>
                <span class="label">收件人：</span>
                <span class="label mr-20">王二</span>
                <span class="label">18100140040</span>
              </p>
            </div>
          </div>
          <div class="flex-end">
            <div class="submit-btn">提交訂單</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'shopSettlement',
  data () {
    return {
      form: {
        resource: '',
        region: '',
        desc: '',
        address: ''
      },
      checked: false,
      tableData: [
        {
          info: '阿莫西林',
          logo:
            'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1374216862,4073765949&fm=26&gp=0.jpg',
          name: '￥39.00',
          number: '1',
          price: '￥39.00',
          yunfei: '￥10.00'
        },
        {
          info: '阿莫西林',
          logo:
            'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1374216862,4073765949&fm=26&gp=0.jpg',
          name: '￥39.00',
          number: '1',
          price: '￥39.00',
          yunfei: '￥10.00'
        },
        {
          info: '阿莫西林',
          logo:
            'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1374216862,4073765949&fm=26&gp=0.jpg',
          name: '￥39.00',
          number: '1',
          price: '￥39.00',
          yunfei: '￥10.00'
        },
        {
          info: '阿莫西林',
          logo:
            'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1374216862,4073765949&fm=26&gp=0.jpg',
          name: '￥39.00',
          number: '1',
          price: '￥39.00',
          yunfei: '￥10.00'
        }
      ]
    }
  },
  created () {},
  methods: {}
}
</script>

<style scoped lang="scss">
.shopSettlement {
  .container-wrap {
    background: #FFFFFF;
    padding: 40px;
    .myform {
      margin-bottom: 40px;
      .tips {
        p {
          padding-left: 100px;
          width: 457px;
          font-size: 14px;
          font-family: STHeitiSC-Light, STHeitiSC;
          font-weight: 300;
          color: #666666;
          line-height: 24px;
        }
      }
      .address-box {
        @include flex-center(space-between);
        padding: 10px 0;
      }
      .has-address {
        @include flex-center(flex-start);
        flex-wrap: wrap;
        .address-item {
          position: relative;
          background: url("../../assets/image/bg-address.png");
          margin-right: 20px;
          background-size: 290px 90px;
          background-repeat: no-repeat;
          box-sizing: border-box;
          padding: 10px;
          width: 290px;
          height: 90px;
          .name {
            padding-bottom: 10px;
            margin-bottom: 10px;
            font-size: 16px;
            font-family: STHeitiSC-Medium, STHeitiSC;
            font-weight: 500;
            color: #222222;
            line-height: 16px;
            border-bottom: 1px solid #DDDDDD;
          }
          .address-name {
            font-size: 14px;
            font-family: STHeitiSC-Light, STHeitiSC;
            font-weight: 300;
            color: #222222;
            line-height: 14px;
          }
          .checked-icon {
            position: absolute;
            bottom: 0;
            right: 0;
            width: 32px;
          }
        }
        .current {
          background: url('../../assets/image/current-address.png');
          background-size: 290px 90px;
          background-repeat: no-repeat;
        }
      }
    }
    .content {
      .title {
        padding-bottom: 20px;
        font-size: 18px;
        font-family: STHeitiSC-Medium, STHeitiSC;
        font-weight: 500;
        color: #222222;
        line-height: 19px;
        border-bottom: 2px solid #268CFF;
      }
      .info-box {
        @include flex-center(flex-start);
      }
      .good-logo {
        width: 80px;
        height: 80px;
      }
      .bottom {
        @include flex-center(flex-end);
        background: #F5F6F7;
        padding: 20px 10px;
      }
      .tips-box {
        margin-top: 40px;
        // @include flex-center(flex-end);
        font-size: 15px;
        font-family: STHeitiSC-Light, STHeitiSC;
        font-weight: 300;
        color: #222222;
        line-height: 15px;
        .address-info {
          box-sizing: border-box;
          padding: 20px 40px;
          width: 505px;
          height: 206px;
          background: #FFFFFF;
          border: 2px solid rgba(255, 37, 0, 0.2);
          p {
            text-align: right;
            padding-bottom: 20px;
          }
          .value {
            font-size: 15px;
            font-family: STHeitiSC-Light, STHeitiSC;
            font-weight: 300;
            color: #222222;
            line-height: 15px;
          }
          .total-price {
            font-size: 46px;
            font-family: STHeitiSC-Medium, STHeitiSC;
            font-weight: 500;
            color: #FF2500;
            line-height: 47px;
          }
        }
        .submit-btn {
          width: 200px;
          height: 60px;
          background: #FF2500;
          font-size: 18px;
          font-family: STHeitiSC-Medium, STHeitiSC;
          font-weight: 500;
          color: #FFFFFF;
          text-align: center;
          line-height: 60px;
        }
        .flex-end {
          @include flex-center(flex-end);
        }
        .price {
          font-size: 18px;
          font-family: STHeitiSC-Medium, STHeitiSC;
          font-weight: 500;
          color: #FF2500;
          line-height: 19px;
        }
      }
    }
  }
}
::v-deep {
  // .el-form-item {
  //   @include flex-center();
  //   margin-bottom: 0;
  // }
  .el-textarea {
    width: 780px;
  }
}
</style>
