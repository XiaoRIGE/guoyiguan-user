<!-- =========================================================================================
     File Name:
     Description: 患者信息组件
     Component Name:
     ----------------------------------------------------------------------------------------
     Item Name:
     Author: srj
     Creation time:  2020-10-31 14:01:53
     Change time:  2020-10-31 14:01:53
========================================================================================== -->
<template>
  <div class="PatientInfo">
    <el-card class="box-card">
      <div slot="header">
        <span>患者信息</span>
      </div>
      <div class="info">
        <p>
          <span class="desc">患者姓名：</span><span class="value">王二</span>
        </p>
        <p><span class="desc">性别：</span><span class="value">男</span></p>
        <p>
          <span class="desc">病历号：</span
          ><span class="value">15651543165</span>
        </p>
        <p><span class="desc">国籍：</span><span class="value">中国</span></p>
        <p>
          <span class="desc">籍贯：</span><span class="value">四川成都</span>
        </p>
        <p>
          <span class="desc">电话：</span><span class="value">18956457823</span>
        </p>
        <p><span class="desc">就诊次数：</span><span class="value">2</span></p>
        <p>
          <span class="desc">初诊时间：</span
          ><span class="value">2020/06/05 </span>
        </p>
        <p>
          <span class="desc">末诊时间：</span
          ><span class="value">2020/06/05</span>
        </p>
        <p><span class="desc">过敏史：</span><span class="value">无</span></p>
        <p><span class="desc">家族病史：</span><span class="value">无</span></p>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'PatientInfo',
  data () {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.PatientInfo {
  // 左侧
  .box-card {
    height: 100%;
  }
}
</style>
