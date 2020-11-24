<!-- =========================================================================================
     File Name: MyFeedback
     Description: 意见反馈
     Component Name: MyFeedback
     ----------------------------------------------------------------------------------------
     Item Name:
     Author: srj
     Creation time:  2020-11-21 10:53:27
     Change time:  2020-11-21 10:53:27
========================================================================================== -->
<template>
  <div class="MyFeedback">
    <div class="container-wrap">
      <h1 class="mb-20">意见反馈</h1>
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="反饋内容：">
          <el-input type="textarea" v-model="form.desc"></el-input>
        </el-form-item>
        <el-form-item label="反饋圖片：">
          <el-upload
            class="avatar-uploader"
            action="https://jsonplaceholder.typicode.com/posts/"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload"
          >
            <img v-if="imageUrl" :src="imageUrl" class="avatar" />
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
        </el-form-item>
        <el-form-item>
          <el-button type="primary">提交</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MyFeedback',
  data () {
    return {
      form: {
        desc: ''
      },
      imageUrl: ''
    }
  },
  created () {},
  methods: {
    handleAvatarSuccess (res, file) {
      this.imageUrl = URL.createObjectURL(file.raw)
    },
    beforeAvatarUpload (file) {
      const isJPG = file.type === 'image/jpeg'
      const isLt2M = file.size / 1024 / 1024 < 2

      if (!isJPG) {
        this.$message.error('上传头像图片只能是 JPG 格式!')
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!')
      }
      return isJPG && isLt2M
    }
  }
}
</script>

<style scoped  lang="scss">
.MyFeedback {
  .container-wrap {
    h1 {
      font-size: 18px;
      font-family: STHeitiSC-Medium, STHeitiSC;
      font-weight: 500;
      color: #222222;
      line-height: 19px;
    }
    ::v-deep .el-textarea__inner {
      width: 600px;
    }
    .el-button {
      width: 100px;
      height: 40px;
      line-height: 40px;
      padding: 0;
      text-align: center;
    }
    // 圖片上傳
    ::v-deep {
      .avatar-uploader .el-upload {
        border: 1px dashed #d9d9d9;
        border-radius: 6px;
        cursor: pointer;
        position: relative;
        overflow: hidden;
      }
      .avatar-uploader .el-upload:hover {
        border-color: #409eff;
      }
      .avatar-uploader-icon {
        font-size: 28px;
        color: #8c939d;
        width: 100px;
        height: 100px;
        line-height: 100px;
        text-align: center;
      }
      .avatar {
        width: 100px;
        height: 100px;
        display: block;
      }
    }
  }
}
</style>
