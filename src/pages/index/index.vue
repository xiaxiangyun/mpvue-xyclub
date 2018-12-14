<template>
  <div class="container">
    <div class="page-box">
      <homepage v-if="current==='homepage'"/>
      <businesscard v-if="current==='businesscard'"/>
      <emoji v-if="current==='emoji'"/>
    </div>
    <i-tab-bar :current="current" @change="handleChange" class="tab-bar">
      <i-tab-bar-item key="homepage" icon="homepage" current-icon="homepage_fill" title="主页"></i-tab-bar-item>
      <i-tab-bar-item key="businesscard" icon="businesscard" current-icon="businesscard_fill" title="名片"></i-tab-bar-item>
      <i-tab-bar-item key="emoji" icon="emoji" current-icon="emoji_fill" title="其它"></i-tab-bar-item>
    </i-tab-bar>
  </div>
</template>

<script>
import homepage from '@/components/homepage'
import businesscard from '@/components/businesscard'
import emoji from '@/components/emoji'

export default {
  components: { homepage, businesscard, emoji },

  data () {
    return {
      current: 'homepage'
    }
  },

  methods: {
    /**
     * 菜单切换
     */
    handleChange (e) {
      // 跳转页面
      this.current = e.mp.detail.key
      // 改变标题
      const title = this.current === 'homepage' ? '主页' : (this.current === 'businesscard' ? '名片' : '其它')
      wx.setNavigationBarTitle({ title })
    },

    getUserInfo (e) {
      console.log('获取信息', e.mp.detail.userInfo)
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
}
.tab-bar {
  height: 50px;
  width: 100%;
}
.page-box {
  flex: 1;
  width: 100%;
  overflow-y: auto;
}
</style>