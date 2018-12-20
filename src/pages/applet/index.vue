<template>
  <div class="container">
    <div class="page-box">
      <homepage v-if="current==='homepage'"/>
      <businesscard v-if="current==='businesscard'"/>
      <others v-if="current==='others'"/>
    </div>
    <i-tab-bar :current="current" @change="handleChange" class="tab-bar">
      <i-tab-bar-item key="homepage" icon="homepage" current-icon="homepage_fill" title="主页"></i-tab-bar-item>
      <i-tab-bar-item key="businesscard" icon="businesscard" current-icon="businesscard_fill" title="简历"></i-tab-bar-item>
      <i-tab-bar-item key="others" icon="emoji" current-icon="emoji_fill" title="其它"></i-tab-bar-item>
    </i-tab-bar>
  </div>
</template>

<script>
import homepage from '@/components/HomePage'
import businesscard from '@/components/BusinessCard'
import others from '@/components/Others'
import globalStore from '@/stores/global'

export default {
  components: { homepage, businesscard, others },

  computed: {
    // 当前页面
    current () {
      return globalStore.state.currentPage
    }
  },

  watch: {
    current (val, old) {
      // 改变标题
      const title = val === 'homepage' ? '主页' : (this.current === 'businesscard' ? '简历' : '其它')
      wx.setNavigationBarTitle({ title })
    }
  },

  methods: {
    /**
     * 菜单切换
     */
    handleChange (e) {
      // 跳转页面
      globalStore.commit('currentChange', e.mp.detail.key)
    }
  }
}
</script>

<style scoped>
.container {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
}
.tab-bar {
  width: 100%;
}
.page-box {
  flex: 1;
  width: 100%;
  overflow-y: auto;
}
</style>