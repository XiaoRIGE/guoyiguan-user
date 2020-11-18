<!-- =========================================================================================
     File Name: clinicDetail
     Description: 诊所详情
     Component Name: clinicDetail
     ----------------------------------------------------------------------------------------
     Item Name:
     Author: srj
     Creation time:  2020-11-18 21:58:55
     Change time:  2020-11-18 21:58:55
========================================================================================== -->
<template>
  <div class="clinicDetail">
    <div class="container-wrap">
      <!-- 診所信息  mb-40-->
      <div class="clinic-info">
        <div class="left">
          <el-carousel trigger="click" class="img-box">
            <el-carousel-item v-for="item in goodImgArr" :key="item">
              <img :src="item" />
            </el-carousel-item>
          </el-carousel>
        </div>
        <div class="right">
          <div class="clinic-name mb-20 mt-20">xx診所</div>
          <p class="desc mb-60">
            诊所简介诊所简介诊所简介诊所简介诊所简介诊所简介诊所简介诊所简介诊所简介诊所简介诊所简介诊所简介诊所简介诊所简介诊所简介诊所简介诊所简介诊所简介
          </p>
          <p class="desc mb-20">诊所地址：香港XXX区XX路XX大厦</p>
          <p class="desc mb-20">联系电话：+852-9855-7588</p>
          <p class="desc mb-20">
            营业时间：星期一至周六 11:00 ~ 18:00 星期日及公众假期休息
          </p>
        </div>
      </div>
      <!-- 推薦醫師 -->
      <div class="list">
        <p class="head">推薦醫師</p>
        <el-row  :gutter="40">
            <el-col
              class="mb-40"
              v-for="(item, index) in 12"
              :key="index"
              :span="6"
            >
              <DoctorItem></DoctorItem>
            </el-col>
          </el-row>
      </div>
    </div>
  </div>
</template>

<script>
import DoctorItem from './components/DoctorItem'
export default {
  name: 'clinicDetail',
  data () {
    return {
      goodImgArr: [
        'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=4047381728,3484245239&fm=11&gp=0.jpg',
        'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1769782992,1155276211&fm=26&gp=0.jpg',
        'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1113462192,3759588613&fm=26&gp=0.jpg',
        'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1349540071,196055473&fm=26&gp=0.jpg'
      ]
    }
  },
  components: { DoctorItem },
  created () {},
  methods: {}
}
</script>

<style scoped lang="scss">
.clinicDetail {
  .container-wrap {
    background: #ffffff;
    padding: 40px 60px;
    .clinic-info {
      @include flex-center(space-between, flex-start);
      .left {
        margin-right: 40px;
        .img-box {
          width: 400px;
          height: 400px;
          img {
            width: 100%;
            @include v-center();
          }
        }
      }
      .right {
        .clinin-name {
          font-size: 18px;
          font-family: STHeitiTC-Medium, STHeitiTC;
          font-weight: 500;
          color: #222222;
          line-height: 19px;
        }
        .desc {
          font-size: 14px;
          font-family: STHeitiTC-Light, STHeitiTC;
          font-weight: 300;
          color: #666666;
          line-height: 24px;
        }
      }
    }
    .list {
      .head {
        padding-bottom: 20px;
        margin-bottom: 20px;
        font-size: 18px;
        font-family: STHeitiSC-Medium, STHeitiSC;
        font-weight: 500;
        color: #222222;
        line-height: 19px;
        border-bottom: 1px solid #F5F6F7;
      }
    }
  }
}
</style>
