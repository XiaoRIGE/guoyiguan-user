<!-- =========================================================================================
     File Name: shop
     Description: 健康商城
     Component Name: shop
     ----------------------------------------------------------------------------------------
     Item Name:
     Author: srj
     Creation time:  2020-10-26 20:09:08
     Change time:  2020-10-26 20:09:08
========================================================================================== -->
<template>
  <div class="shop container-wrap">
    <el-tabs class="mt-20" v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="中成药" name="first"></el-tab-pane>
      <el-tab-pane label="健康食品" name="second"></el-tab-pane>
      <el-tab-pane label="健康用品" name="third"></el-tab-pane>
    </el-tabs>
    <!-- 查询条件 -->
    <div class="search-box">
      <div class="search-item mb-20">
        <div class="label mr-30">疾病：</div>
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
        <div class="label mr-30">推荐：</div>
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
    </div>
    <div class="content-box">
      <el-row v-if="true" :gutter="40">
        <el-col
          class="mb-40"
          v-for="(item, index) in 12"
          :key="index"
          :span="6"
        >
          <GoodBox></GoodBox>
        </el-col>
      </el-row>
      <Nodata v-else></Nodata>
      <Pagination
        :paginationConfig="paginationConfig"
        @pageChange="pageChange"
      ></Pagination>
    </div>
  </div>
</template>

<script>
import GoodBox from './components/GoodBox'
import Nodata from '@/components/common/Nodata'
import Pagination from '@/components/common/Pagination'
export default {
  name: 'shop',
  data () {
    return {
      activeName: 'first',
      diseaseType: [
        { name: '眼病', value: '001' },
        { name: '内科', value: '002' },
        { name: '内分泌失调', value: '003' },
        { name: '牙科', value: '004' }
      ],
      recommendType: [
        { name: '医师推荐', value: '001' },
        { name: '常用药品', value: '002' }
      ],
      currentdiseaseType: '',
      currentrecommendType: '',
      paginationConfig: {
        total: 50,
        currentPage: 1,
        pageSize: 10
      }
    }
  },
  components: { GoodBox, Pagination, Nodata },
  methods: {
    handleClick () {},
    handleChoose (type, value) {
      if (type === 1) {
        this.currentdiseaseType = value
      } else {
        this.currentrecommendType = value
      }
    },
    pageChange (index) {
      this.paginationConfig.currentPage = index
    }
  }
}
</script>

<style lang="scss" scoped >
.shop {
  background: #F5F6F7;
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
      color: #268CFF;
    }
  }
  .content-box {
    flex-wrap: wrap;
  }
}
</style>
