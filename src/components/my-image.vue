<template>
  <div class="image-container">
    <!-- 图片按钮 -->
    <div class="img-btn" @click="openDialog">
      <img :src="value||dafaultImage" alt />
    </div>
    <!-- 对话框 -->
    <el-dialog :visible.sync="dialogVisible" width="700px">
      <!-- label='用户管理'  选项卡标签的文字-->
      <el-tabs v-model="activeName" type="card">
        <el-tab-pane label="素材库" name="image">
          <!-- 单选框 -->
          <div style="margin:10px">
            <el-radio-group size="small" @change="search" v-model="reqParams.collect">
              <el-radio-button :label="false">全部</el-radio-button>
              <el-radio-button :label="true">收藏</el-radio-button>
            </el-radio-group>
          </div>
          <!-- 图片列表 -->
          <div
            class="image-item"
            :class="{selected:selectedImageUrl===item.url}"
            @click="selectedImage(item.url)"
            v-for="item in images"
            :key="item.id"
          >
            <img :src="item.url" alt />
          </div>
          <!-- 分页 -->
          <el-pagination
            v-if="total>reqParams.per_page"
            background
            layout="prev, pager,next"
            :total="total"
            :page-size="reqParams.per_page"
            :current-page="reqParams.page"
            @current-change="pager"
          ></el-pagination>
        </el-tab-pane>
        <el-tab-pane label="上传图片" name="upload">
          <el-upload
            class="avatar-uploader"
            action="http://ttapi.research.itcast.cn/mp/v1_0/user/images"
            :headers="headers"
            :show-file-list="false"
            :on-success="handleSuccess"
            name="image"
          >
            <img v-if="uploadimageUrl" :src="uploadimageUrl" class="avatar" />
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
        </el-tab-pane>
      </el-tabs>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="confirmImage()">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import dafaultImage from '../assets/images/default.png'
export default {
  name: 'my-image',
  data () {
    return {
      // 控制对话框显示隐藏
      dialogVisible: false,
      // 控制选中的选项卡
      activeName: 'image',
      // 获取列表素材时传参
      reqParams: {
        collect: false,
        page: 1,
        per_page: 8
      },
      // 素材列表
      images: [],
      // 加载数据
      loading: false,
      // 总条数
      total: 0,
      // 你选中的素材地址
      selectedImageUrl: null,
      // 你选中的图片
      // 注意：webpack不会去打包在数据中定义的地址对应的资源，打包标签上的src或url的资源
      // 注意：本地的资源是不会去打包的，如果是网路资源不用打包
      // 自给主动导入 你需要的图片资源
      dafaultImage,
      // 上传图片后预览的地址
      uploadimageUrl: null,
      // 头部数据
      headers: {
        Authorization:
          'Bearer ' +
          JSON.parse(window.sessionStorage.getItem('hm74-toutiao')).token
      }
    }
  },
  props: ['value'],
  methods: {
    // 确认图片
    confirmImage () {
      if (this.activeName === 'image') {
        // 如果是素材 使用selectedImageUrl 作为封面
        if (!this.selectedImageUrl) return this.$message.warning('请选择素材')
        // this.value = this.selectedImageUrl
        this.$emit('input', this.selectedImageUrl)
      } else {
        // 如果是上传图片 使用uploadImageUrl 作为封面
        if (!this.uploadimageUrl) return this.$message.warning('请上传图片')
        // this.value = this.uploadimageUrl
        this.$emit('input', this.uploadimageUrl)
      }
      this.dialogVisible = false
    },
    // 选中图片
    selectedImage (url) {
      // 思路 :class={selected:条件}
      // 条件 记录上去点击图片的唯一标识然后去比对每次遍历的图片的唯一标识
      // 如果一致 选中 不一致 不选中
      // 此时图片地址做为唯一值 将来提交的数据是地址不是id
      this.selectedImageUrl = url
    },
    openDialog () {
      this.dialogVisible = true
      // 清除上一次的数据
      this.selectedImageUrl = null
      this.uploadimageUrl = null
      // 做其他事情  渲染素材列表
      this.getImages()
    },
    // 分页
    pager (newPage) {
      this.reqParams.page = newPage
      this.getImages()
    },
    search () {
      this.reqParams.page = 1
      this.getImages()
    },
    async getImages () {
      this.loading = true
      const {
        data: { data }
      } = await this.$http.get('user/images', { params: this.reqParams })
      // 获取数据成功
      this.images = data.results
      // 设置中调试
      this.total = data.total_count
      this.loading = false
    },
    // 上传成功的函数
    handleSuccess (res) {
      // 预览
      this.uploadimageUrl = res.data.url
    }
  }
}
</script>

<style scoped lang="less">
.image-container{
  display: inline-block;
  margin-right: 20px;
}
.image-item {
  width: 150px;
  height: 120px;
  border: 1px dashed #ddd;
  display: inline-block;
  margin-right: 10px;
  position: relative;
  &.selected {
    &::before {
      // .image-item.selected::before
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0, 0.2) url(../assets/images/selected.png)
        no-repeat center/ 50px 50px;
    }
  }
  img {
    width: 100%;
    height: 100%;
    display: block;
    // 属性作用：图片填充的规则，等比例缩放，完整显示在容器
    object-fit: contain;
    display: inline-block;
  }
}
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
.avatar-uploader {
  text-align: center;
}
</style>
