<!-- =========================================================================================
     File Name: goodDetail
     Description: 商品详情
     Component Name: goodDetail
     ----------------------------------------------------------------------------------------
     Item Name:
     Author: srj
     Creation time:  2020-11-14 14:11:53
     Change time:  2020-11-14 14:11:53
========================================================================================== -->
<template>
  <div class="goodDetail">
    <div class="container-wrap">
      <!-- 商品信息 -->
      <div class="good-info">
        <div class="left">
          <el-carousel trigger="click" class="img-box">
            <el-carousel-item v-for="item in goodImgArr" :key="item">
              <img :src="item" />
            </el-carousel-item>
          </el-carousel>
        </div>
        <div class="right">
          <div class="name mb-20">阿莫西林</div>
          <div class="desc mb-10">
            商品简介商品简介商品简介商品简介商品…商品简介商品简介商品简介商品简介商品…商品简介商品简介商品简介商品简介商品…商品简介商品简介商品简介商品简介商品…
          </div>
          <div class="price mb-20">￥100/盒</div>
          <div class="tips mb-20">
            配送：香港至四川（運費三十元）
            <el-popover
            placement="right"
            width="480"
            trigger="click">
            <ChooseCity></ChooseCity>
            <span slot="reference" class="other cursor">其他</span>
          </el-popover>

          </div>
          <div class="number">
            <span class="label">數量：</span>
            <el-input-number
              v-model="num"
              @change="handleChange"
              :min="1"
              :max="10"
              label="描述文字"
            ></el-input-number>
          </div>
          <div class="btns mt-20">
            <span class="btn-blue cursor mr-20">加入購物車</span>
            <span @click="goShopCart" class="btn-red cursor">立即購買</span>
          </div>
        </div>
      </div>
      <!-- 商品詳情 -->
      <div class="details-info">
        <div class="title">商品詳情</div>
        <p>品       牌：江中牌</p>
        <p>重        量：0.092kg</p>
        <p>批准文号：国食健字G20150433</p>
        <p>
          温馨提示：部分商品包装更换频繁，如货品与图片
          不完全一致，请以收到的商品实物为准
        </p>
        <p>主要成分：xxxxxxxxxxxx</p>
        <p>主        治：胃痛胃胀不消化</p>
        <p>用法用量：xxxxxxxxxxxx</p>
        <p>
          注意事项：部分商品包装更换频繁，如货品与图片
          不完全一致，请以收到的商品实物为准
        </p>
        <p>规        格：0.092kg</p>
        <p>
          生产厂家：金纽曼思（上海）食品有限公司委托浙江艾得兰生物科技有限公司
        </p>
        <img
          src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=97769683,988293209&fm=26&gp=0.jpg"
          alt=""
        />
        <img
          src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2100927564,1966870237&fm=26&gp=0.jpg"
          alt=""
        />
        <img
          src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=904528777,1161378722&fm=26&gp=0.jpg"
          alt=""
        />
      </div>
    </div>
  </div>
</template>

<script>
import ChooseCity from './components/ChooseCity'
export default {
  name: 'goodDetail',
  data () {
    return {
      goodImgArr: [
        'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3338254340,2108942472&fm=26&gp=0.jpg',
        'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2491881537,3321640053&fm=26&gp=0.jpg'
      ],
      num: ''
    }
  },
  components: { ChooseCity },
  created () {},
  methods: {
    handleChange () {

    },
    goShopCart () {
      this.$router.push('shopCart')
    }
  }
}
</script>

<style scoped lang="scss">
.goodDetail {
  .container-wrap {
    background: #FFFFFF;
    padding: 40px 60px;
    .good-info {
      @include flex-center(space-between);
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
        .name {
          font-size: 18px;
          font-family: STHeitiTC-Medium, STHeitiTC;
          font-weight: 500;
          color: #222222;
          line-height: 19px;
        }
        .desc {
          @include ellipsis-num(3);
          font-size: 14px;
          font-family: STHeitiTC-Light, STHeitiTC;
          font-weight: 300;
          color: #666666;
          line-height: 24px;
        }
        .price {
          font-size: 18px;
          font-family: STHeitiTC-Medium, STHeitiTC;
          font-weight: 500;
          color: #FF2500;
          line-height: 19px;
        }
        .tips {
          font-size: 14px;
          font-family: STHeitiTC-Light, STHeitiTC;
          font-weight: 300;
          color: #666666;
          line-height: 24px;
          .other {
            color: #268CFF;
            display: inline-block;
            margin-left: 20px;
          }
        }
        .number {
          .label {
            display: inline-block;
            margin-right: 20px;
          }
        }
        .btns {
          font-size: 14px;
          font-family: STHeitiSC-Medium, STHeitiSC;
          font-weight: 500;
          color: #FFFFFF;
          line-height: 14px;
          & > span {
            display: inline-block;
            height: 40px;
            border-radius: 2px;
            line-height: 40px;
            text-align: center;
          }
          .btn-blue {
            width: 200px;

            background: #268CFF;
          }
          .btn-red {
            width: 100px;
            background: #FF2500;
          }
        }
      }
    }
    .details-info {
      .title {
        padding: 20px 0;
        margin-bottom: 20px;
        font-size: 18px;
        font-family: STHeitiSC-Medium, STHeitiSC;
        font-weight: 500;
        color: #222222;
        line-height: 19px;
        border-bottom: 1px solid #F5F6F7;
      }
      p {
        font-size: 15px;
        font-family: STHeitiSC-Light, STHeitiSC;
        font-weight: 300;
        color: #222222;
        line-height: 15px;
        margin-bottom: 10px;
      }
      img {
        width: 100%;
        margin-top: 20px;
      }
    }
  }
}
</style>
