<template>
    <!-- 倒计时 -->
    <div class="countdown" >
        <!-- <span v-if="!end"> {{ `${day}天 ${hr}小时 ${min}分钟 ${sec}秒` }}</span> -->
        <!-- <span v-if="!end"> {{ ` ${hr}: ${min}: ${sec}` }}</span> -->
        <span v-if="!end&&showtype==1">{{ `${min}:${sec}` }}</span>
        <!-- <span v-if="!end&&showtype==2">{{ `${day}天 ${hr}小时 ${min}分钟 ${sec}秒` }}</span> -->
        <span v-if="!end&&showtype==2">
            <span class="red">{{day}}</span>天<span class="red">{{hr}}</span>时<span class="red">{{min}}</span>分
        </span>
        <span v-if="!end&&showtype==3">{{ `${hr}:${min}:${sec}` }}</span>
        <span v-if="!end&&showtype==4">
            <span class="red">{{hr}}</span>小时<span class="red">{{min}}</span>分钟<span class="red">{{sec}}秒</span>
        </span>
       <span v-if="end">已结束</span>
    </div>
</template>

<script>
export default {
  /*
    参数说明
        time:接受倒计时结束时间戳
        type:展示类型
            1：  29：45  只展示分钟数和秒数  只适用于倒计时小于30Min
            2:   0天1时36分     展示汉字 数字红色标记
            3:   03:15:45   展示时分秒
        callBack:结束后页面的回调
        CountDownCallBack(){
            console.log(899999)
            this.Switchingtype('payStatus',1);
            this.Switchingtype('payStatus',0);
        },
        <Countdown :time='value.timestamp' :callBack="CountDownCallBack"/>
    接受时间 */
  props: ['time', 'type', 'callBack'],
  data: function () {
    return {
      day: 0,
      hr: 0,
      min: 0,
      sec: 0,
      end: false, // 活动结束
      showtype: 1// 展示内容
    }
  },
  created () {

  },
  mounted: function () {
    console.log('组件接受值', this.time)
    this.countdown()
  },
  methods: {
    countdown: function () {
      const end = Date.parse(new Date(this.time * 1))
      // const end = 1559634227*1000;
      const now = Date.parse(new Date())
      const msec = end - now
      const day = parseInt(msec / 1000 / 60 / 60 / 24, 10)
      const hr = parseInt(msec / 1000 / 60 / 60 % 24, 10)
      const min = parseInt(msec / 1000 / 60 % 60, 10)
      const sec = parseInt(msec / 1000 % 60, 10)
      // this.day = day;
      this.day = day > 9 ? day : '0' + day
      this.hr = hr > 9 ? hr : '0' + hr
      this.min = min > 9 ? min : '0' + min
      this.sec = sec > 9 ? sec : '0' + sec
      const that = this
      if (msec === 0) {
        this.$emit('callBack')
        if (this.callBack) {
          this.callBack()
        }
        this.end = true
        return
      } else if (msec > 0) {
        setTimeout(function () {
          that.countdown()
        }, 1000)
      }
      // 返回 0天1时36分
      if (this.type === 2) {
        this.showtype = 2
      } else if (this.type === 3) {
        this.showtype = 3
      } else if (this.type === 4) {
        this.showtype = 4
      } else {
      // 返回 29：00  默认(此情况只适用于倒计时小于30分钟)
        this.showtype = 1
      }
    }
  }
}
</script>

<style lang="scss" scoped >
.red {
    color: #F35C59;
    padding: 0 5px;
}
</style>
