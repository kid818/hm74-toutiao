<template>
  <el-select :value="value" @change="fn">
    <el-option v-for="item in channelOptions" :key="item.id" :label="item.name" :value="item.id"></el-option>
  </el-select>
</template>

<script>
export default {
  name: 'my-channel',
  props: ['value'],
  data () {
    return {
      channelOptions: []
    }
  },
  created () {
    // 获取频道数据
    this.getChannelOptions()
  },
  methods: {
    fn (value) {
      // value 选中的值
      this.$emit('input', value)
    },
    // 获取频道数据
    async getChannelOptions () {
      // res ===> {data:响应内容}  ===> {data:{channels:[{id,name}]}}
      const {
        data: { data }
      } = await this.$http.get('channels')
      this.channelOptions = data.channels
    }
  }
}
</script>

<style>
</style>
