<!-- =========================================================================================
     File Name: doctorDetail
     Description: 医师详情
     Component Name: doctorDetail
     ----------------------------------------------------------------------------------------
     Item Name:
     Author: srj
     Creation time:  2020-11-18 21:58:55
     Change time:  2020-11-18 21:58:55
========================================================================================== -->
<template>
  <div class="doctorDetail">
    <div class="container-wrap">
      <!-- 醫師信息  mb-40-->
      <div class="clinic-info">
        <div class="left">
          <el-carousel trigger="click" class="img-box">
            <el-carousel-item v-for="item in goodImgArr" :key="item">
              <img :src="item" />
            </el-carousel-item>
          </el-carousel>
        </div>
        <div class="right">
          <div class="clinic-name mb-20 mt-20">xx医师</div>
          <p class="desc mb-60">
            醫師簡介：XXX醫生擁有11年經驗，曾獲得XXXXXXXX醫生擁有11年經驗，曾獲得XXXXXXXX醫生擁有11年經驗，曾獲得XXXXXXXX醫生擁有11年經驗，曾獲得XXXXX
          </p>
          <p class="desc mb-20">所在診所：XXX診所</p>
          <p class="desc mb-20">擅長領域：骨科、推拿、外科</p>
          <p class="desc mb-20">預約次數：100次</p>
          <p class="desc mb-20">預約價格：￥48.00</p>
        </div>
      </div>
      <div class="info-box">
        <p class="head mb-40">預約信息</p>
        <p class="info mb-10">姓名：張三</p>
        <p class="info mb-40">電話：18244047770</p>
        <div class="date-choode">
          <el-date-picker
            class="mr-40"
            v-model="value1"
            type="date"
            placeholder="选择日期"
          >
          </el-date-picker>

          <el-time-select
            v-model="value"
            :picker-options="{
              start: '08:30',
              step: '00:15',
              end: '18:30',
            }"
            placeholder="选择时间"
          >
          </el-time-select>
        </div>
        <div class="btn-box mt-40">
          <div class="btn1 cursor mr-40">遠程問診</div>
          <div class="btn2 cursor">綫下就診</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'doctorDetail',
  data () {
    return {
      value1: '',
      value: '',
      goodImgArr: [
        'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3508411861,1575592825&fm=26&gp=0.jpg',
        'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2518274025,1332946203&fm=26&gp=0.jpg'
      ]
    }
  },
  created () {},
  methods: {}
}
</script>

<style scoped  lang="scss">
.doctorDetail {
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
    .info-box {
      .head {
        padding-bottom: 20px;
        margin-bottom: 40px;
        border-bottom: 2px solid #268cff;
        font-size: 18px;
        font-family: STHeitiSC-Medium, STHeitiSC;
        font-weight: 500;
        color: #222222;
        line-height: 19px;
      }
      .info {
        font-size: 18px;
        font-family: STHeitiSC-Medium, STHeitiSC;
        font-weight: 500;
        color: #222222;
        line-height: 19px;
      }
      .btn-box {
        @include flex-center(flex-start);
        .btn1 {
          width: 200px;
          height: 40px;
          background: #268cff;
          border-radius: 2px;

          font-size: 14px;
          font-family: STHeitiSC-Medium, STHeitiSC;
          font-weight: 500;
          text-align: center;
          color: #ffffff;
          line-height: 40px;
        }
        .btn2 {
          box-sizing: border-box;
          width: 200px;
          height: 40px;
          border-radius: 2px;
          border: 1px solid #268cff;
          text-align: center;
          font-size: 14px;
          font-family: STHeitiSC-Medium, STHeitiSC;
          font-weight: 500;
          color: #268cff;
          line-height: 40px;
        }
      }
    }
  }
}
</style>
