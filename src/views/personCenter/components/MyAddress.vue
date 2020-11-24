<!-- =========================================================================================
     File Name: MyAddress
     Description: 我的地址
     Component Name: MyAddress
     ----------------------------------------------------------------------------------------
     Item Name:
     Author: srj
     Creation time:  2020-11-21 10:57:51
     Change time:  2020-11-21 10:57:51
========================================================================================== -->
<template>
  <div class="MyAddress">
    <div class="container-wrap">
      <el-button type="primary" class="mb-20">添加地址</el-button>
      <!-- <p>暫無地址</p> -->
      <!-- height="250"  -->
      <el-table :data="tableData" border style="width: 100%">
        <el-table-column prop="username" label="收貨人"> </el-table-column>
        <el-table-column prop="addresss" label="所在地區"> </el-table-column>
        <el-table-column prop="address" label="詳細地址"> </el-table-column>
        <el-table-column prop="phone" label="電話"> </el-table-column>
        <el-table-column prop="name" label="操所">
          <template scope="scope">
            <el-button @click="handleClick(scope.row)" type="text"
              >修改</el-button
            >
            <el-button @click="handleClick(scope.row)" type="text" class="corlor-red"
              >刪除</el-button
            >

          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MyAddress',
  data () {
    return {
      tableData: [
        {
          username: '小王',
          addresss: '香港銅鑼灣',
          address: '金沙江路 1518 弄',
          phone: '18745567845'

        },
        {
          username: '小王',
          addresss: '香港銅鑼灣',
          address: '金沙江路 1518 弄',
          phone: '18745567845'

        },
        {
          username: '小王',
          addresss: '香港銅鑼灣',
          address: '金沙江路 1518 弄',
          phone: '18745567845'

        },
        {
          username: '小王',
          addresss: '香港銅鑼灣',
          address: '金沙江路 1518 弄',
          phone: '18745567845'

        },
        {
          username: '小王',
          addresss: '香港銅鑼灣',
          address: '金沙江路 1518 弄',
          phone: '18745567845'

        },
        {
          username: '小王',
          addresss: '香港銅鑼灣',
          address: '金沙江路 1518 弄',
          phone: '18745567845'

        },
        {
          username: '小王',
          addresss: '香港銅鑼灣',
          address: '金沙江路 1518 弄',
          phone: '18745567845'

        }
      ]
    }
  },
  created () {},
  methods: {
    handleClick (row) {
      console.log(row)
    }
  }
}
</script>

<style scoped  lang="scss">
.MyAddress {
  .container-wrap {
    background: #fff;
    .el-button {
      width: 100px;
      height: 40px;
      line-height: 40px;
      padding: 0;
      text-align: center;
    }
  }
}
</style>
