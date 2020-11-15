<!-- =========================================================================================
     File Name: shopCart
     Description: 我的购物车
     Component Name: shopCart
     ----------------------------------------------------------------------------------------
     Item Name:
     Author: srj
     Creation time:  2020-11-14 14:18:29
     Change time:  2020-11-14 14:18:29
========================================================================================== -->
<template>
  <div class="shopCart">
    <div class="container-wrap">
      <el-table
        :data="tableData"
        ref="mytable"
        @selection-change="handleSelectionChange"
        style="width: 100%"
      >
        <el-table-column type="selection" width="55"> </el-table-column>
        <el-table-column prop="info" label="商品信息" width="180">
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
        <el-table-column prop="yunfei" label="運費"> </el-table-column>
        <el-table-column prop="number" label="操作">
          <template slot-scope="scope">
            <el-button class="del-btn" @click="handleDelete(scope.row)"
              >刪除</el-button
            >
          </template>
        </el-table-column>
      </el-table>
      <div class="total">
        <div class="left">
          <el-checkbox v-model="checked" @change="test">全選</el-checkbox>
          <el-button class="ml-40 corlor-red" type="text">刪除</el-button>
        </div>
        <div class="right">
          <span class="selected">已選商品{{multipleSelection.length}}件</span>
          <span>合計（不含運費）：</span>
          <span class="price">￥25.00</span>
          <el-button @click="handleSubmit" class="my-btn" type="text">結算</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'shopCart',
  data () {
    return {
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
      ],
      multipleSelection: []
    }
  },
  created () {},
  methods: {
    handleSelectionChange (val) {
      this.multipleSelection = val
    },
    handleChange (row) {
      console.log(row)
    },
    handleDelete (row) {
      console.log(row)
    },
    test () {
      this.$refs.mytable.toggleAllSelection()
    },
    handleSubmit () {
      this.$router.push('shopSettlement')
    }
  }
}
</script>

<style scoped lang="scss">
.shopCart {
  .container-wrap {
    padding: 40px 30px;
    background: #fff;
    .info-box {
      @include flex-center(flex-start);
    }
    .good-logo {
      width: 80px;
      height: 80px;
    }
    .del-btn {
      box-sizing: border-box;
      padding: 0;
      width: 60px;
      height: 30px;
      line-height: 30px;
      background: #FF2500;
      font-size: 15px;
      font-family: STHeitiSC-Light, STHeitiSC;
      font-weight: 300;
      color: #FFFFFF;
      line-height: 15px;
    }
    .total {
      @include flex-center(space-between);
      padding-left: 60px;
      height: 60px;
      background: #F2F2F2;
      .left {
      }
      .right {
        .selected {
          display: inline-block;
          margin-right: 40px;
        }
        .price {
          display: inline-block;
          padding-right: 40px;
          font-size: 18px;
          font-family: STHeitiSC-Medium, STHeitiSC;
          font-weight: 500;
          color: #FF2500;
          line-height: 19px;
        }
        .my-btn {
          width: 140px;
          height: 60px;
          background: #DDDDDD;
          font-size: 15px;
          font-family: STHeitiSC-Light, STHeitiSC;
          font-weight: 300;
          color: #222222;
        }
      }
    }
  }
}
</style>
