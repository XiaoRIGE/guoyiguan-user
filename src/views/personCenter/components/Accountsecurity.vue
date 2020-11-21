<!-- =========================================================================================
     File Name: Accountsecurity
     Description: 账号安全
     Component Name: Accountsecurity
     ----------------------------------------------------------------------------------------
     Item Name:
     Author: srj
     Creation time:  2020-11-21 10:52:06
     Change time:  2020-11-21 10:52:06
========================================================================================== -->
<template>
  <div class="Accountsecurity">
    <h1>账号安全</h1>
    <ul>
      <li>
        <span>登錄密碼</span>
        <el-button type="primary">修改</el-button>
      </li>
      <li>
        <span>綁定手機號 <span>{{phone}}</span></span>
        <el-button type="primary">修改</el-button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Accountsecurity',
  data () {
    return {
      phone: '187****4545'
    }
  },
  created () {},
  methods: {}
}
</script>

<style scoped lang="scss">
.Accountsecurity {
  ul {
    li {
      padding: 30px 0;
      @include flex-center(space-between);
      border-bottom: 1px solid #f5f6f7;
      font-size: 18px;
      font-family: STHeitiSC-Medium, STHeitiSC;
      font-weight: 500;
      color: #222222;
      line-height: 19px;
    }
  }
  ::v-deep {
    .el-button {
      width: 100px;
      height: 40px;
      padding: 0;
      line-height: 40px;
    }
  }
}
</style>
