<template>
  <div class="home">
    <el-carousel class="carousel mb-60" :interval="5000" arrow="always">
      <el-carousel-item v-for="item in imgList" :key="item">
        <img :src="item" />
      </el-carousel-item>
    </el-carousel>
    <!-- 医师活动介绍 -->
    <div class="nav container-wrap mb-60">
      <el-row :gutter="20">
        <el-col :span="7">
          <div class="left">
            <div class="top1 top-bg mb-20">
              <p class="title">
                <span class="title-name">健康咨询</span>
                <span class="title-more">查看更多</span>
              </p>
              <p v-for="(item, index) in 5" :key="index" class="info-item">
                標題內容標題內容標題內容標
              </p>
            </div>
            <div class="top2 top-bg">
              <p class="title">
                <span class="title-name">最新消息</span>
                <span class="title-more">查看更多</span>
              </p>
              <p v-for="(item, index) in 5" :key="index" class="info-item">
                標題內容標題內容標題內容標
              </p>
            </div>
          </div>
        </el-col>
        <el-col :span="7">
          <div class="center">
            <div class="center-bg">
              <h1>自助医疗系统</h1>
            </div>
          </div>
        </el-col>
        <el-col :span="10">
          <div class="right">
            <div class="right-bg">
              <h3>张三-医师</h3>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
    <!-- 患者回顾 -->
    <div class="review container-wrap">
      <div class="title mb-20">
        <span class="title-name">患者回顾</span>
        <span class="title-more">查看更多></span>
      </div>
      <div class="content-box">
        <p v-for="(item, index) in 8" :key="index" class="item mb-20">
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
          font-size: 16px;
          font-weight: 300;
          color: #222222;
          line-height: 24px;
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
        width: 100%;
        height: 516px;
        background: #e9f0f8;
      }
    }
    .right {
      .right-bg {
        width: 100%;
        height: 516px;
        background: linear-gradient(180deg, #e9f0f8 0%, #ffffff 100%);
      }
    }
  }
  // 患者回顾
  .review {
    box-sizing: border-box;
    padding: 20px;
    height: 140px;
    background: #ffffff;
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
        width: 273px;
        height: 16px;
        font-size: 16px;
        font-weight: 300;
        color: #268cff;
        line-height: 16px;
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
    .is-active {
      background: #268cff;
    }
    .el-carousel__button {
      display: none;
    }
  }
}
</style>
