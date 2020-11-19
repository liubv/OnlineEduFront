<template>
  <div class="app-container">
    <el-form label-width="120px">
      <el-form-item label="信息描述">
        <el-tag type="info">excel模版说明</el-tag>
        <el-tag>
          <i class="el-icon-download"/>
          <a :href="'/static/test.xlsx'">点击下载模版</a>
        </el-tag>

      </el-form-item>

      <el-form-item label="选择Excel">
        <el-upload
          ref="upload"
          :auto-upload="false"
          :on-success="fileUploadSuccess"
          :on-error="fileUploadError"
          :disabled="importBtnDisabled"
          :limit="1"
          :action="BASE_API+'/eduservice/subject/addSubject'"
          name="file"
          accept="application/vnd.ms-excel">
          <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
          <el-button
            :loading="loading"
            style="margin-left: 10px;"
            size="small"
            type="success"
            @click="submitUpload">{{ fileUploadBtnText }}</el-button>
        </el-upload>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
    data(){
        return {
            BASE_API: process.env.BASE_API, // 接口API地址
            // OSS_PATH: process.env.OSS_PATH, // 阿里云OSS地址
            fileUploadBtnText: '上传到服务器', // 按钮文字
            importBtnDisabled: false, // 按钮是否禁用,
            loading: false
        }
    },
    created() {

    },
    methods: {
        submitUpload() {
            this.importBtnDisabled = true
            this.loading = true
            this.$refs.upload.submit()
        },
        fileUploadSuccess() {
            this.loading = false
            this.$message({
                type: 'success',
                message: '添加课程分类成功'
            })
            //路由跳转到课程列表
        },
        fileUploadError() {
            this.loading = false
            this.$message({
                type: 'failed',
                message: '添加课程分类失败'
            })
        }
        
    }
}
</script>