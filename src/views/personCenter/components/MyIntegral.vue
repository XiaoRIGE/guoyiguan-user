<!-- =========================================================================================
     File Name: MyIntegral
     Description: 我的积分
     Component Name: MyIntegral
     ----------------------------------------------------------------------------------------
     Item Name:
     Author: srj
     Creation time:  2020-11-21 10:57:17
     Change time:  2020-11-21 10:57:17
========================================================================================== -->
<template>
  <div class="MyIntegral">
    <div class="container-wrap">
      <el-form class="search-box" ref="form" :model="form">
        <el-row :gutter="20">
          <el-col :span="8">
            <el-form-item>
              <el-date-picker
                v-model="value1"
                type="daterange"
                range-separator="至"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
              >
              </el-date-picker>
            </el-form-item>
          </el-col>
          <el-col :span="4">
            <el-button type="primary">查询</el-button>
          </el-col>
          <el-col :span="6">
            <p class="grade">当前积分：1000</p>
          </el-col>
        </el-row>
      </el-form>
      <div class="list">
        <ul>
          <li v-for="(item, index) in 5" :key="index">
            <div class="left">
              <p class="type">綫上就診</p>
              <p class="date">2020/06/06 12：32</p>
            </div>
            <div class="right">
              <span class="add">+50</span>
              <!-- <span class="reduce">-230</span> -->
            </div>
          </li>
          <Pagination
            :paginationConfig="paginationConfig"
            @pageChange="pageChange"
          ></Pagination>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Pagination from '@/components/common/Pagination'
export default {
  name: 'MyIntegral',
  components: { Pagination },
  data () {
    return {
      value1: '',
      form: {},
      paginationConfig: {
        total: 4,
        currentPage: 1,
        pageSize: 10
      }
    }
  },
  created () {},
  methods: {
    pageChange (index) {
      this.paginationConfig.currentPage = index
    }
  }
}
</script>

<style scoped  lang="scss">
.MyIntegral {
  .search-box {
    .grade {
      height: 40px;
      line-height: 40px;
      font-size: 16px;
      font-family: STHeitiSC-Medium, STHeitiSC;
      font-weight: 500;
      color: #222222;
    }
    .el-button {
      width: 100px;
      height: 40px;
      line-height: 40px;
      padding: 0;
      text-align: center;
    }
  }
  .list {
    li {
      @include flex-center(space-between);
      box-sizing: border-box;
      padding: 20px;
      height: 80px;
      .left {
        .type {
          font-size: 15px;
          font-family: STHeitiSC-Light, STHeitiSC;
          font-weight: 300;
          color: #222222;
          line-height: 15px;
          margin-bottom: 10px;
        }
        .date {
          font-size: 14px;
          font-family: STHeitiSC-Light, STHeitiSC;
          font-weight: 300;
          color: #666666;
          line-height: 14px;
        }
      }
      .right {
        span {
          font-size: 18px;
          font-family: STHeitiSC-Medium, STHeitiSC;
          font-weight: 500;
          line-height: 19px;
        }
        .add {
          color: #268cff;
        }
        .reduce {
          color: #666666;
        }
      }
      // background: #F5F6F7;
    }
    li:nth-child(2n) {
      background: #ffffff;
    }
    li:nth-child(2n-1) {
      background: #f5f6f7;
    }
  }
}
</style>
