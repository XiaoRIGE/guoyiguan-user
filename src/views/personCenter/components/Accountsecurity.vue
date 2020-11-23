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
    <ul>
      <li>
        <span>登錄密碼</span>
        <el-button @click="edit(1)" type="primary">修改</el-button>
      </li>
      <li>
        <span
          >綁定手機號 <span>{{ phone }}</span></span
        >
        <el-button @click="edit(2)" type="primary">修改</el-button>
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
  methods: {
    edit (type) {
      this.editType = type
      if (type === 1) {
        this.$router.push({ name: 'editPwd' })
      } else if (type === 2) {
        this.$router.push({ name: 'editPhone' })
      }
    }
  }
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
