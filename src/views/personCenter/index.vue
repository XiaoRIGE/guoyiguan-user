<!-- =========================================================================================
     File Name: personCenter
     Description: 个人中心
     Component Name: personCenter
     ----------------------------------------------------------------------------------------
     Item Name:
     Author: srj
     Creation time:  2020-10-26 20:09:08
     Change time:  2020-10-26 20:09:08
========================================================================================== -->
<template>
  <div class="personCenter">
    <div class="container-wrap">
      <div class="message-type">
        <ul>
          <li @click="current = 1" :class="current === 1 ? 'current' : ''">
            個人信息
          </li>
          <li @click="current = 2" :class="current === 2 ? 'current' : ''">
            賬號安全
          </li>
          <li @click="current = 3" :class="current === 3 ? 'current' : ''">
            我的訂單
          </li>
          <li @click="current = 4" :class="current === 4 ? 'current' : ''">
            就診記錄
          </li>
          <li @click="current = 5" :class="current === 5 ? 'current' : ''">
            預約記錄
          </li>
          <li @click="current = 6" :class="current === 6 ? 'current' : ''">
            我的積分
          </li>
          <li @click="current = 7" :class="current === 7 ? 'current' : ''">
            我的地址
          </li>
          <li @click="current = 8" :class="current === 8 ? 'current' : ''">
            意見反饋
          </li>
          <li @click="current = 9" :class="current === 9 ? 'current' : ''">
            顯示設置
          </li>
        </ul>
      </div>
      <div class="content"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'personCenter',
  data () {
    return {
      current: 1
    }
  }
}
</script>

<style lang="scss" scoped>
.personCenter {
  .container-wrap {
    @include flex-center(flex-start, flex-start);
    margin-top: 40px;
    .message-type {
      margin-right: 40px;
      li {
        cursor: pointer;
        width: 100px;
        height: 40px;
        border-radius: 2px;
        font-size: 14px;
        font-family: STHeitiSC-Medium, STHeitiSC;
        font-weight: 500;
        color: #222222;
        line-height: 40px;
        text-align: center;
      }
      .current {
        background: #268cff;
        color: #ffffff;
      }
    }
    .content {
      box-sizing: border-box;
      background: #fff;
      flex: 1;
      padding: 40px 60px;
      height: 670px;
    }
  }
}
</style>
