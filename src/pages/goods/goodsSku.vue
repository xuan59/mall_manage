<template>
    <div>
        <el-upload
  class="upload-demo"
  action="http://127.0.0.1:8888/file/upload"
  :on-preview="handlePreview"
  :on-remove="handleRemove"
  :file-list="fileList"
  multiple="true"
  list-type="picture">
  <el-button size="small" type="primary">点击上传</el-button>
  <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
</el-upload>
    </div>
</template>
        
<script>
export default {
    data(){
        return {
            fileList: []
        }
    },
    watch:{
        
    },
    methods:{
        handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePreview(file) {
        console.log(file);
      }
    },
    created(){
        
    },
}
</script>

<style scoped>
        
</style>