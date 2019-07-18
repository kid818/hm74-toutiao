<template>
  <div class="container">
    <el-card>
      <div slot="header">
        <my-bread>发布文章</my-bread>
      </div>
      <el-form :v-model="articleForm" label-width="100px">
        <el-form-item label="标题: ">
          <el-input v-model="articleForm.title" style="width:400px"></el-input>
        </el-form-item>
        <el-form-item label="内容: " style="height:300px">
          <quill-editor v-model="articleForm.content" :options="editorOption"></quill-editor>
        </el-form-item>
        <el-form-item label="封面: ">
          <el-radio-group v-model="articleForm.cover.type">
            <el-radio :label="1">单图</el-radio>
            <el-radio :label="3">三图</el-radio>
            <el-radio :label="0">无图</el-radio>
            <el-radio :label="-1">自动</el-radio>
          </el-radio-group>
          <!-- 测试 -->
          <el-upload
            action="http://ttapi.research.itcast.cn/mp/v1_0/user/images"
            :headers="headers"
            list-type="picture-card"
            :on-preview="handlePictureCardPreview"
            :on-remove="handleRemove"
            name='image'
          >
            <i class="el-icon-plus"></i>
          </el-upload>
        </el-form-item>
        <el-form-item label="频道: ">
          <my-channel v-model="articleForm.channel_id"></my-channel>
        </el-form-item>
        <el-form-item>
          <el-button type="primary">发表</el-button>
          <el-button>存入草稿</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
// 注册富文本组件
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
import { quillEditor } from 'vue-quill-editor'
export default {
  components: { quillEditor },
  data () {
    return {
      articleForm: {
        title: '',
        content: '',
        cover: {
          type: 1,
          imges: ''
        },
        channel_id: null
      },
      // 配置富文本选项
      editorOption: {
        modules: {
          toolbar: [
            ['bold', 'italic', 'underline', 'strike'],
            ['blockquote', 'code-block'],
            [{ header: 1 }, { header: 2 }],
            [{ list: 'ordered' }, { list: 'bullet' }],
            [{ indent: '-1' }, { indent: '+1' }]
          ]
        }
      },
      dialogImageUrl: '',
      dialogVisible: false,
      headers: {
        Authorization:
          'Bearer ' +
          JSON.parse(window.sessionStorage.getItem('hm74-toutiao')).token
      }
    }
  },
  methods: {
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

<style scoped lang='less'>
.img-btn {
  width: 150px;
  height: 150px;
  border: 1px dashed #ddd;
  img {
    width: 100%;
    height: 100%;
    display: block;
  }
}
.quill-editor {
  height: 240px;
}
</style>
