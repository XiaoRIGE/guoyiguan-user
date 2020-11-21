<!-- =========================================================================================
     File Name: UserInfo
     Description: 个人信息
     Component Name: UserInfo
     ----------------------------------------------------------------------------------------
     Item Name:
     Author: srj
     Creation time:  2020-11-21 10:50:39
     Change time:  2020-11-21 10:50:39
========================================================================================== -->
<template>
  <div class="UserInfo">
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="頭像：">
        <div class="img-box">
          <img
            src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2328622225,2844636259&fm=26&gp=0.jpg"
            class="avator"
          />
          <span v-show="isEdit" class="color-primary cursor">修改</span>
          <!-- todo 頭像修改 -->
          <!-- <el-upload
            v-show="isEdit"
            action="https://jsonplaceholder.typicode.com/posts/"
            list-type="picture-card"
            :on-preview="handlePictureCardPreview"
            :on-remove="handleRemove"
          >
            <i class="el-icon-plus"></i>
          </el-upload> -->
        </div>
      </el-form-item>
      <el-form-item label="姓名：">
        <el-input :disabled="!isEdit" v-model="form.username"></el-input>
      </el-form-item>
      <el-form-item label="性別：">
        <el-input :disabled="!isEdit" v-model="form.sex"></el-input>
      </el-form-item>
      <el-form-item label="積分：">
        <el-input :disabled="!isEdit" v-model="form.initGreen"></el-input>
      </el-form-item>
      <el-form-item label="生日：">
        <el-date-picker
          :disabled="!isEdit"
          v-model="form.birthday"
          type="date"
          prefix-icon="idon"
          clear-icon="asd"
          placeholder="选择日期"
        >
        </el-date-picker>
      </el-form-item>
      <el-form-item label="職業：">
        <el-input :disabled="!isEdit" v-model="form.job"></el-input>
      </el-form-item>
      <el-form-item label="電話：">
        <el-input :disabled="!isEdit" v-model="form.phone"></el-input>
      </el-form-item>
      <el-form-item label="郵箱：">
        <el-input :disabled="!isEdit" v-model="form.email"></el-input>
      </el-form-item>
      <el-form-item label="地區：">
        <el-input :disabled="!isEdit" v-model="form.city"></el-input>
      </el-form-item>
      <el-form-item label="地址：">
        <el-input :disabled="!isEdit" v-model="form.address"></el-input>
      </el-form-item>
      <el-form-item label="身份證：">
        <el-input :disabled="!isEdit" v-model="form.idcard"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button v-show="!isEdit" type="primary" @click="changeType"
          >修改</el-button
        >
        <el-button v-show="isEdit" type="primary" @click="save">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'UserInfo',
  data () {
    return {
      form: {
        username: '李思琪',
        sex: '女',
        initGreen: '1000',
        birthday: '1991-05-12',
        job: '醫生',
        phone: '18722554689',
        email: '127007000@qq.com',
        city: '中國香港',
        address: '中國香港九龍XX區XX街',
        idcard: '210645199906060788'
      },
      isEdit: false,
      dialogImageUrl: '',
      dialogVisible: false
    }
  },
  created () {},
  methods: {
    changeType () {
      this.isEdit = true
    },
    save () {
      console.log('提交表單', this.foem)
      this.$notify({
        title: '成功',
        message: '保存個人信息成功',
        type: 'success'
      })
      this.isEdit = false
    },
    handleRemove (file, fileList) {
      console.log(file, fileList)
    },
    handlePictureCardPreview (file) {
      this.dialogImageUrl = file.url
      this.dialogVisible = true
    }
  }
}
</script>

<style scoped lang="scss">
.UserInfo {
  .img-box {
    @include flex-center(flex-start);
    .avator {
      margin-left: 20px;
      margin-right: 20px;
      box-sizing: border-box;
      width: 32px;
      height: 32px;
      border-radius: 50%;
      border: 1px solid #979797;
    }
  }

  ::v-deep {
    .el-input__inner {
      box-sizing: border-box;
      width: 300px;
      height: 40px;
      padding: 0 20px;
      line-height: 40px;
    }
    .el-form-item__label {
      font-size: 14px;
      font-family: STHeitiSC-Light, STHeitiSC;
      font-weight: 300;
      color: #666666;
    }
  }
}
</style>
