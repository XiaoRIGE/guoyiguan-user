<!-- =========================================================================================
     File Name: MyOrder
     Description: 我的订单
     Component Name: MyOrder
     ----------------------------------------------------------------------------------------
     Item Name:
     Author: srj
     Creation time:  2020-11-21 10:53:27
     Change time:  2020-11-21 10:53:27
========================================================================================== -->
<template>
  <div class="MyOrder">
    <div class="container-wrap">
      <el-tabs class="mt-20" v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="待付款" name="toBePaid"></el-tab-pane>
        <el-tab-pane label="待收貨" name="toBeHarvested"></el-tab-pane>
        <el-tab-pane label="已完成" name="successed"></el-tab-pane>
      </el-tabs>
      <div class="btn-header">
        <el-checkbox v-show="activeName === 'toBePaid'" v-model="checked">全選</el-checkbox>
        <el-button v-show="activeName === 'toBePaid'" class="ml-40" type="primary">合并付款</el-button>
        <div class="mt-20">
          <OrderItem :orderType="activeName" v-for="(item, index) in 4" :key="index"></OrderItem>
          <Nodata v-if="false"></Nodata>
          <Pagination
            :paginationConfig="paginationConfig"
            @pageChange="pageChange"
          ></Pagination>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import OrderItem from '../order/OrderItem'
import Pagination from '@/components/common/Pagination'
import Nodata from '@/components/common/Nodata'
export default {
  name: 'MyOrder',
  components: { OrderItem, Pagination, Nodata },
  data () {
    return {
      activeName: 'toBePaid',
      checked: false,
      paginationConfig: {
        total: 4,
        currentPage: 1,
        pageSize: 10
      }
    }
  },
  created () {},
  methods: {
    handleClick () {},
    pageChange (index) {
      this.paginationConfig.currentPage = index
    }
  }
}
</script>

<style scoped lang="scss">
.MyOrder {
}
</style>
