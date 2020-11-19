<template>
  <div class="home">
    <el-carousel class="carousel mb-60" trigger="click" :interval="5000" height="580" indicator-position="none" arrow="always">
      <!-- <el-carousel-item >
        <img src="../../assets/image/banner@2x.png" />
      </el-carousel-item> -->
      <el-carousel-item v-for="item in imgList" :key="item">
        <!-- <img :src="item" /> -->
        <img src="../../assets/image/banner@2x.png" />
      </el-carousel-item>
    </el-carousel>
    <!-- 医师活动介绍 -->
    <div class="nav container-wrap mb-60">
      <el-row class="row" :gutter="20">
        <el-col :span="7">
          <div class="left">
            <div class="top1 top-bg mb-20">
              <p class="title">
                <span class="title-name">健康咨询</span>
                <span class="title-more">查看更多</span>
              </p>
              <p
                v-for="(item, index) in 4"
                :key="index"
                class="info-item cursor"
              >
                標題內容標題內容標題內容標
              </p>
              <p class="info-item cursor">
                標題內容標題內容標題內容標標題內容標題內容標題內容標標題內容標題內容標題內容標
              </p>
            </div>
            <div class="top2 top-bg">
              <p class="title">
                <span class="title-name">最新消息</span>
                <span class="title-more cursor">查看更多</span>
              </p>
              <p
                v-for="(item, index) in 4"
                :key="index"
                class="info-item cursor"
              >
                標題內容標題內容標題內容標
              </p>
              <p class="info-item cursor">
                標題內容標題內容標題內容標標題內容標題內容標題內容標標題內容標題內容標題內容標
              </p>
            </div>
          </div>
        </el-col>
        <el-col :span="7">
          <div class="center">
            <div class="center-bg">
              <h1>自助医疗系统</h1>
              <img src="../../assets/image/bg-center.png" class="cursor"/>
            </div>
          </div>
        </el-col>
        <el-col :span="10">
          <div class="right">
            <div class="right-bg">
              <!-- 医师头像 名字 -->
              <el-carousel trigger="click" indicator-position="none" height="240px">
                <el-carousel-item v-for="item in 3" :key="item">
                  <div class="doctor-box">
                    <img
                      src="../../assets/image/bg-doctor.png"
                      class="doctor-logo"
                    />
                    <div class="right">
                      <p class="doctor-name">张三-医师</p>
                      <div class="address">
                        <p>應診地點：</p>
                        <p>沙田（週一、四、六）</p>
                      </div>
                    </div>
                  </div>
                </el-carousel-item>
              </el-carousel>
              <!-- 医师信息 -->
              <div class="doctor-info">
                <p>香港大學中醫全科學士</p>
                <p>廣州中醫药大學中西醫結合骨傷(脊柱)科學碩士</p>
                <p>香港針灸醫藥學院針灸畢業證書</p>
                <p>香港針灸醫藥學院中醫高級深造班證書</p>
                <p>中國深圳市醫學繼續教育中心整脊推拿文憑</p>
                <p>祖傳兩代中西醫學經驗，曾習西醫</p>
              </div>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
    <!-- 诊所特色 -->
    <div class="trait container-wrap">
      <span class="tab_title">诊所特色</span>
      <div class="item-box">
        <el-row class="row" :gutter="20">
          <el-col
            v-for="(item, index) in 6"
            :key="index"
            class="item"
            :span="8"
          >
            <div class="item-wrap cursor">
              <img src="../../assets/image/bg-xinfei.png" />
              <div class="right">
                <p class="item-name">内科</p>
                <span class="item-desc"
                  >包括呼吸内科，消化内科，心血管内科，神经内科，肿瘤科，内分泌科，血液内科，传染病科，小儿内科等。呼吸内科包括呼吸内科，消化内科，心血管内科，神经内科，肿瘤科，内分泌科，血液内科，传染病科，小儿内科等。呼吸内科</span
                >
              </div>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
    <!-- 患者回顾 -->
    <div class="review container-wrap">
      <div class="title mb-20">
        <span class="title-name">患者回顾</span>
        <span @click="goRouter('patientReview')" class="title-more cursor">查看更多></span>
      </div>
      <div class="content-box">
        <p v-for="(item, index) in 8" :key="index" class="item cursor mb-20">
          中風後遺症治療
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      imgList: [
        'https://th.wallhaven.cc/lg/ox/oxkjgm.jpg',
        'https://th.wallhaven.cc/lg/g8/g83m3d.jpg',
        'https://th.wallhaven.cc/small/39/39dmkd.jpg',
        'https://th.wallhaven.cc/small/5w/5w26x1.jpg'
      ]
    }
  },
  methods: {
    goRouter (name) {
      console.log(name)
      this.$router.push({ name })
    }
  }
}
</script>

<style lang="scss" scoped>
.home {
  background: #f5f6f7;
  .carousel {
    img {
      width: 100%;
      height: 580px;
    }
  }
  // 医师活动介绍
  .nav {
    // @include flex-center(flex-start);
    .row {
      width: 100%;
    }
    .left {
      .top-bg {
        box-sizing: border-box;
        padding: 20px;
        width: 100%;
        height: 248px;
        .title {
          @include flex-center(space-between);
          // padding: 20px;
          margin-bottom: 20px;
          &-name {
            font-size: 28px;
            font-weight: 600;
            color: #222222;
            line-height: 29px;
          }
          &-more {
            font-size: 14px;
            font-weight: 300;
            color: #268cff;
            line-height: 14px;
          }
        }
        .info-item {
          // padding-bottom: 10px;
          font-size: 16px;
          font-weight: 300;
          color: #222222;
          line-height: 24px;
          @include ellipsis();
        }
      }
      .top1 {
        background: linear-gradient(180deg, #e4f1ff 0%, #ffffff 100%);
      }
      .top2 {
        background: linear-gradient(180deg, #d9f3f1 0%, #ffffff 100%);
      }
    }
    .center {
      .center-bg {
        position: relative;
        width: 100%;
        height: 516px;
        background: #e9f0f8;
        h1 {
          position: absolute;
          left: 20px;
          top: 20px;
          font-size: 28px;
          font-family: STHeitiTC-Medium, STHeitiTC;
          font-weight: 500;
          color: #268cff;
          line-height: 29px;
        }
        img {
          width: 100%;
        }
      }
    }
    .right {
      .right-bg {
        width: 100%;
        height: 516px;
        background: linear-gradient(180deg, #e9f0f8 0%, #ffffff 100%);
        .doctor-box {
          padding: 40px 60px;
          @include flex-center(flex-start, flex-start);
          .doctor-logo {
            width: 120px;
            height: 160px;
          }
          .right {
            padding-left: 20px;
            .doctor-name {
              padding-top: 10px;
              padding-bottom: 65px;
              font-size: 28px;
              font-family: STHeitiTC-Medium, STHeitiTC;
              font-weight: 500;
              color: #222222;
              line-height: 29px;
            }
            .address p {
              font-size: 16px;
              font-family: STHeitiTC-Medium, STHeitiTC;
              font-weight: 500;
              color: #268cff;
              line-height: 24px;
            }
          }
        }
        .doctor-info {
          margin-top: 40px;
          p {
            padding-left: 64px;
            margin-bottom: 12px;
            font-size: 16px;
            font-family: STHeitiTC-Light, STHeitiTC;
            font-weight: 300;
            color: #222222;
            line-height: 24px;
          }
        }
      }
    }
  }
  // 患者回顾
  .review {
    box-sizing: border-box;
    padding: 20px;
    height: 140px;
    background: #ffffff;
    margin-bottom: 60px;
    .title {
      @include flex-center(space-between);
      &-name {
        font-size: 28px;
        font-weight: 600;
        color: #222222;
        line-height: 29px;
      }
      &-more {
        font-size: 16px;
        font-weight: 300;
        color: #666666;
        line-height: 16px;
      }
    }
    .content-box {
      @include flex-center(flex-start);
      flex-wrap: wrap;
      .item {
        margin-right: 40px;
        width: 273px;
        height: 16px;
        font-size: 16px;
        font-weight: 300;
        color: #268cff;
        line-height: 16px;
      }
    }
  }
  .trait {
    padding-bottom: 60px;
    .tab_title {
      display: inline-block;
      padding-bottom: 10px;
      margin-bottom: 20px;
      font-size: 28px;
      font-weight: 500;
      color: #268cff;
      line-height: 29px;
      border-bottom: 6px solid #268cff;
    }
    .item-box {
      .row {
        width: 100%;
      }
      .item {
        .item-wrap {
          @include flex-center(space-between, flex-start);
          box-sizing: border-box;
          background: #ffffff;
          padding: 20px;
          margin-bottom: 20px;
          img {
            width: 80px;
            height: 80px;
            margin-right: 20px;
          }
          .item-name {
            margin-bottom: 10px;
            font-size: 18px;
            font-weight: 500;
            color: #268cff;
            line-height: 19px;
          }
          .item-desc {
            font-size: 15px;
            font-weight: 300;
            color: #666666;
            line-height: 24px;
            @include ellipsis-num(3);
          }
        }
      }
    }
  }

  ::v-deep {
    .el-carousel__indicator--horizontal {
      margin-right: 20px;
      padding: 0;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.5);
    }
    .carousel {
      .is-active {
        background: #268cff;
      }
      .el-carousel__container {
        height: 580px;
      }
    }

    .el-carousel__button {
      display: none;
    }
  }
}
</style>
