<!-- =========================================================================================
     File Name: service
     Description: 健康服务
     Component Name: service
     ----------------------------------------------------------------------------------------
     Item Name:
     Author: srj
     Creation time:  2020-10-26 20:09:08
     Change time:  2020-10-26 20:09:08
========================================================================================== -->
<template>
  <div class="service">
    <div class="container-wrap">
      <div class="head-box mt-20 mb-20">
        <div @click="goRouter" class="head-name cursor">服務範圍</div>
        <el-input
          placeholder="请输入内容"
          v-model="searchVal"
          class="input-with-select"
        >
          <el-button slot="append" icon="el-icon-search" type="primary"
            >搜索</el-button
          >
        </el-input>
      </div>
      <!-- 查询条件 -->
      <div class="search-box mb-20">
        <div class="search-item mb-20">
          <div class="label mr-30">區域：</div>
          <div
            @click="handleChoose(1, '')"
            class="value-item mr-30 cursor"
            :class="currentdiseaseType === '' ? 'current' : ''"
          >
            全部
          </div>
          <div
            @click="handleChoose(1, item.value)"
            v-for="(item, index) in diseaseType"
            :key="index"
            class="value-item mr-30 cursor"
            :class="currentdiseaseType === item.value ? 'current' : ''"
          >
            {{ item.name }}
          </div>
          <div
            @click="handleChoose(1, 'more')"
            class="value-item cursor"
            :class="currentdiseaseType === 'more' ? 'current' : ''"
          >
            更多
          </div>
        </div>
        <div class="search-item mb-20">
          <div class="label mr-30">科目：</div>
          <div
            @click="handleChoose(2, '')"
            class="value-item mr-30 cursor"
            :class="currentrecommendType === '' ? 'current' : ''"
          >
            全部
          </div>
          <div
            @click="handleChoose(2, item.value)"
            v-for="(item, index) in recommendType"
            :key="index"
            class="value-item mr-30 cursor"
            :class="currentrecommendType === item.value ? 'current' : ''"
          >
            {{ item.name }}
          </div>
        </div>
        <div class="border-bottom">
          <el-radio-group v-model="tabPosition" >
            <el-radio-button label="top">找診所</el-radio-button>
            <el-radio-button label="right">找醫師</el-radio-button>
          </el-radio-group>
        </div>

      </div>
       <div class="content-list">
          <el-row v-if="true && tabPosition === 'top'" :gutter="40">
            <el-col
              class="mb-40"
              v-for="(item, index) in 12"
              :key="index"
              :span="6"
            >
              <ClinicItem></ClinicItem>
            </el-col>
          </el-row>
          <el-row v-if="true && tabPosition === 'right'" :gutter="40">
            <el-col
              class="mb-40"
              v-for="(item, index) in 12"
              :key="index"
              :span="6"
            >
              <DoctorItem></DoctorItem>
            </el-col>
          </el-row>
          <!-- <Nodata v-else></Nodata> -->

        </div>
      <Pagination
        :paginationConfig="paginationConfig"
        @pageChange="pageChange"
      ></Pagination>
    </div>
  </div>
</template>

<script>
import Pagination from '@/components/common/Pagination'
import ClinicItem from './components/ClinicItem'
import DoctorItem from './components/DoctorItem'
export default {
  name: 'service',
  data () {
    return {
      searchVal: '',
      diseaseType: [
        { name: '眼病', value: '001' },
        { name: '香港', value: '002' },
        { name: '内地', value: '003' },
        { name: '更多', value: '004' }
      ],
      recommendType: [
        { name: '眼科', value: '001' },
        { name: '皮膚科', value: '002' },
        { name: '婦科', value: '003' },
        { name: '更多', value: '004' }
      ],
      currentdiseaseType: '',
      currentrecommendType: '',
      tabPosition: 'top',
      paginationConfig: {
        total: 50,
        currentPage: 1,
        pageSize: 10
      }
    }
  },
  components: { Pagination, ClinicItem, DoctorItem },
  created () {},
  methods: {
    handleChoose (type, value) {
      if (type === 1) {
        this.currentdiseaseType = value
      } else {
        this.currentrecommendType = value
      }
    },
    pageChange (index) {
      this.paginationConfig.currentPage = index
    },
    goRouter () {
      this.$router.push({ name: 'serviceScope' })
    }
  }
}
</script>

<style lang="scss" scoped>
.service {
  .container-wrap {
    .head-box {
      @include flex-center(space-between);
      .head-name {
        width: 80px;
        height: 40px;
        background: #268cff;
        font-size: 15px;
        font-family: STHeitiTC-Light, STHeitiTC;
        font-weight: 300;
        color: #ffffff;
        text-align: center;
        line-height: 40px;
      }
      .input-with-select {
        width: 300px;
      }
    }
    .search-box {
      .search-item {
        @include flex-center(flex-start);
        font-size: 14px;
        font-family: STHeitiTC-Light, STHeitiTC;
        font-weight: 300;
        color: #666666;
        line-height: 14px;
      }
      .current {
        color: #268cff;
      }
      ::v-deep {
        .el-radio-button__inner {
          width: 80px;
          height: 30px;
          padding: 0;
          line-height: 30px;
        }
      }
      .border-bottom {
        border-bottom: 2px solid #268CFF;
      }
    }
  }
}
</style>
