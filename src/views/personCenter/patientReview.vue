<!-- =========================================================================================
     File Name: patientReview
     Description: 患者回顧
     Component Name: patientReview
     ----------------------------------------------------------------------------------------
     Item Name:
     Author: srj
     Creation time:  2020-11-17 21:53:15
     Change time:  2020-11-17 21:53:15
========================================================================================== -->
<template>
  <div class="patientReview">
    <div class="container-wrap">
      <div class="left">
        <div class="head">患者回顧</div>
        <ul>
          <li
            @click="current = index"
            v-for="(item, index) in 10"
            :key="index"
            class="cursor"
            :class="current === index ? 'current' : ''"
          >
            消化内科
          </li>
        </ul>
      </div>
      <div class="right">
        <div
          v-for="(item, index) in articleData"
          :key="index"
          class="article-item"
        >
          <img v-if="item.hasLogo" src="../../assets/image/person (1).png" />
          <div class="info-box">
            <p class="pb-10">
              <span class="label">姓名：</span>
              <span class="value">張文琪</span>
            </p>
            <p class="pb-20">
              <span class="label">性別：</span>
              <span class="value mr-40">女</span>
              <span class="label">年齡：</span>
              <span class="value">32</span>
            </p>
            <p class="pb-10">
              <span class="label">診斷：</span>
              <span class="value">浅表性胃炎</span>
            </p>
            <p class="pb-24">
              <span class="label">病症描述：</span>
              <span class="value"
                >主要症状为进食后上腹部不适、隐痛、嗳气、恶心、反酸，偶有呕吐</span
              >
            </p>
            <div class="desc">
              <span class="date">2020/06/04 12：22 閱讀量1000</span>
              <span class="blue cursor">查看詳情</span>
            </div>
          </div>
        </div>
        <Pagination
        :paginationConfig="paginationConfig"
        @pageChange="pageChange"
      ></Pagination>
      </div>
    </div>
  </div>
</template>

<script>
import Pagination from '@/components/common/Pagination'
export default {
  name: 'patientReview',
  data () {
    return {
      current: 0,
      articleData: [
        {
          hasLogo: true
        },
        {
          hasLogo: true
        },
        {
          hasLogo: false
        },
        {
          hasLogo: true
        },
        {
          hasLogo: false
        }
      ],
      paginationConfig: {
        total: 50,
        currentPage: 1,
        pageSize: 10
      }
    }
  },
  components: { Pagination },
  created () {},
  methods: {
    pageChange (index) {
      this.paginationConfig.currentPage = index
    }
  }
}
</script>

<style scoped lang="scss">
.patientReview {
  margin-top: 40px;
  .container-wrap {
    @include flex-center(space-between,flex-start);
    .left {
      width: 240px;
      .head {
        box-sizing: border-box;
        padding-left: 24px;
        width: 240px;
        height: 52px;
        background: #268cff;
        border-radius: 4px 4px 0px 0px;
        font-size: 24px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #ffffff;
        line-height: 52px;
      }
      li {
        padding: 20px;
        box-sizing: border-box;
        padding-left: 24px;
        border-bottom: 1px solid #dddddd;
        font-size: 14px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #666666;
        line-height: 14px;
      }
      .current {
        color: #268cff;
      }
    }
    .right {
      width: 1000px;
      .article-item {
        margin-bottom: 10px;
        @include flex-center(flex-start, flex-start);
        box-sizing: border-box;
        padding: 20px;
        height: 180px;
        background: #ffffff;
        img {
          width: 140px;
          height: 140px;
          margin-right: 20px;
        }
        .info-box {
          flex: 1;
          font-size: 14px;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          line-height: 14px;
          .label {
            color: #666666;
          }
          .value {
            color: #222222;
            display: inline-block;
          }
          .desc {
            color: #aaaaaa;
            @include flex-center(space-between);
            .blue {
              color: #268cff;
            }
          }
        }
      }
    }
  }
}
</style>
