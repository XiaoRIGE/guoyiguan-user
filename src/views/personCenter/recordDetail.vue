<!-- =========================================================================================
     File Name: recordDetail
     Description: 就诊记录详情
     Component Name: recordDetail
     ----------------------------------------------------------------------------------------
     Item Name:
     Author: srj
     Creation time:  2020-11-24 20:23:22
     Change time:  2020-11-24 20:23:22
========================================================================================== -->
<template>
  <div class="recordDetail">
    <div class="container-wrap p-40">
      <h1 class="mb-20">就診详情</h1>
      <!-- 就診詳情 -->
      <div class="detail-box p-20">
        <el-row class="mb-20">
          <el-col :span="5">
            <p>診 所：XX診所</p>
          </el-col>
          <el-col :span="5">
            <p>醫 師：XＸ醫師</p>
          </el-col>
          <el-col :span="5">
            <p>醫 師：XＸ醫師</p>
          </el-col>
          <el-col :span="5">
            <p>醫 師：XＸ醫師</p>
          </el-col>
          <el-col :span="4">
            <p class="corlor-red">已就診</p>
          </el-col>
        </el-row>
        <p>主 诉：XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX</p>
        <p>诊 断：XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX</p>
        <p>辩 证：XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX</p>
        <p>醫 囑：XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX</p>
        <p>
          處 方：桑白皮濃縮粉(1.0钱),石菖蒲濃縮粉( 1.0g)。丹參濃縮粉(
          1.0g),共1剂。用法：xxxx
        </p>
      </div>
      <!-- 費用 -->
      <h2 class="mt-20 mb-10">費用</h2>
      <el-table
        :data="tableData"
        show-summary
        border
        style="width: 50%"
        class="mb-20"
      >
        <el-table-column prop="date" label="費用類別" width="180">
        </el-table-column>
        <el-table-column prop="name" label="費用名稱" width="180">
        </el-table-column>
        <el-table-column prop="address" label="數量"> </el-table-column>
        <el-table-column prop="total" label="合計(元)"> </el-table-column>
      </el-table>
      <!-- 取貨方式 -->
      <!-- 自取 -->
      <!-- <p class="type1">
        自取
        沙田分店（沙田圓洲角源順圍2號冠華大廈地下A10-A11號鋪(第一城站D出口行2分鐘)（油麻地店）1234567）
      </p> -->
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
        <p v-if="form.resource === '快遞'" class="address-box">
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
        <div v-if="form.resource === '快遞'" class="has-address">
          <div class="address-item cursor current">
            <p class="name">
              <span>王二（收）</span>
              <span>19956457823</span>
            </p>
            <p class="address-name">香港湾仔区港湾道23号鹰君中心地下G05-06铺</p>
            <img src="../../assets/image/checked@2x.png" class="checked-icon" />
            <p class="default-address">默認地址</p>
          </div>
          <div class="address-item cursor">
            <p class="name">
              <span>張三（收）</span>
              <span>19956457823</span>
            </p>
            <p class="address-name">香港湾仔区港湾道23号鹰君中心地下G05-06铺</p>
          </div>
        </div>
      </el-form>
      <el-button type="primary">去支付</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'recordDetail',
  data () {
    return {
      tableData: [
        {
          date: '產品',
          name: '阿司匹林',
          address: '1',
          total: '39.00'
        },
        {
          date: '代加工費',
          name: '煎藥',
          address: '1',
          total: '39.00'
        },
        {
          date: '針灸',
          name: '針灸',
          address: '2',
          total: '39.00'
        },
        {
          date: '治療費',
          name: '治療',
          address: '3',
          total: '39.00'
        }
      ],
      form: { resource: '' }
    }
  },
  created () {},
  methods: {}
}
</script>

<style scoped  lang="scss">
.recordDetail {
  .container-wrap {
    background: #ffffff;
    h1 {
      font-size: 16px;
      font-family: STHeitiSC-Medium, STHeitiSC;
      font-weight: 500;
      color: #222222;
      line-height: 16px;
    }
    .detail-box {
      background: rgba(38, 140, 255, 0.1);
      font-size: 15px;
      font-family: STHeitiSC-Light, STHeitiSC;
      font-weight: 300;
      line-height: 15px;
      p {
        color: #222222;
      }
      p:not(:last-child) {
        margin-bottom: 20px;
      }
    }
    h2 {
      font-size: 15px;
      font-family: STHeitiSC-Light, STHeitiSC;
      font-weight: 300;
      color: #666666;
      line-height: 15px;
    }
    .type1 {
      font-size: 15px;
      font-family: STHeitiSC-Light, STHeitiSC;
      font-weight: 300;
      color: #666666;
      line-height: 15px;
    }
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
            border-bottom: 1px solid #dddddd;
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
          .default-address {
            position: absolute;
            right: 0;
            top: 0;
            width: 60px;
            height: 26px;
            background: rgba(0, 0, 0, 0.3);
            font-size: 12px;
            font-family: STHeitiSC-Light, STHeitiSC;
            font-weight: 300;
            color: #ffffff;
            line-height: 26px;
            text-align: center;
          }
        }
        .current {
          background: url("../../assets/image/current-address.png");
          background-size: 290px 90px;
          background-repeat: no-repeat;
        }
      }
    }
    .el-button {
      width: 100px;
      height: 40px;
      line-height: 40px;
      padding: 0;
    }
  }
}
</style>
