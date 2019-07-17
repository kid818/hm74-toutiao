<template>
  <div class="container" v-loading="loading">
    <el-card>
      <div slot="header">
        <my-bread>素材管理</my-bread>
      </div>
      <div>
        <!-- 按钮式的单选框 -->
        <el-radio-group size="small" @change="search" v-model="reqParams.collect">
          <el-radio-button :label="false">全部</el-radio-button>
          <el-radio-button :label="true">收藏</el-radio-button>
        </el-radio-group>
        <!-- 绿色按钮 -->
        <el-button @click="dialogVisible = true " size="small" style="float:right" type="success">添加素材</el-button>
      </div>
      <!-- 图片列表 -->
      <ul class="img-list">
        <li v-for="item in images" :key="item.id">
          <img :src="item.url" alt />
          <div class="fot" v-if="!reqParams.collect">
            <span class="el-icon-star-off" :class="{red:item.is_collected}"></span>
            <span class="el-icon-delete"></span>
          </div>
        </li>
      </ul>
      <el-pagination
        v-if="total>reqParams.per_page"
        background
        layout="prev, pager,next"
        :total="total"
        :page-size="reqParams.per_page"
        :current-page="reqParams.page"
        @current-change="pager"
      ></el-pagination>
    </el-card>
    <el-dialog title="提示" :visible.sync="dialogVisible" width="300px" >
      <span>这是一段信息</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">关 闭</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data () {
    return {
      // 参数对象
      reqParams: {
        collect: false,
        page: 1,
        per_page: 10
      },
      // 素材列表
      images: [],
      // 加载数据
      loading: false,
      // 总条数
      total: 0,
      // 默认隐藏对话框
      dialogVisible: false
    }
  },
  created () {
    // 获取素材列表数据
    this.getImages()
  },
  methods: {
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
    }
  }
}
</script>

<style scope lang="less">
.img-list {
  list-style: none;
  padding: 0;
  overflow: hidden;
  li {
    width: 160px;
    height: 160px;
    border: 1px dashed #ddd;
    float: left;
    margin-right: 30px;
    margin-bottom: 20px;
    position: relative;
  }
  img {
    width: 100%;
    height: 100%;
    display: block;
  }
  .fot {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 30px;
    line-height: 30px;
    text-align: center;
    background: rgba(0, 0, 0, 0.5);
    color: #fff;
    span {
      margin: 0 20px;
    }
  }
}
</style>
