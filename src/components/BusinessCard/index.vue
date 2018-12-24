<template>
  <div class="card-box">
    <div class="tabs-box">
      <i-tabs :current="currentName" scroll @change="tabChange">
        <i-tab v-for="tab in tabs" :key="tab.key" :title="tab.title"></i-tab>
      </i-tabs>
      <div class="tabs-container" @touchstart="touchstart" @touchend="touchend">
        <introduction v-if="currentName==='introduction'" :current="currentName"/>
        <information v-if="currentName==='information'"/>
        <experience v-if="currentName==='experience'"/>
        <skill v-if="currentName==='skill'"/>
        <project v-if="currentName==='project'"/>
        <hobbies v-if="currentName==='hobbies'"/>
        <evaluation v-if="currentName==='evaluation'"/>
      </div>
    </div>
    <logincheck tips="登录后可查看"/>
  </div>
</template>

<script>
import globalStore from '@/stores/global'
import logincheck from '../LoginCheck'
import introduction from './components/introduction'
import information from './components/information'
import experience from './components/experience'
import skill from './components/skill'
import project from './components/project'
import hobbies from './components/hobbies'
import evaluation from './components/evaluation'

export default {
  components: { logincheck, introduction, information, experience, skill, project, hobbies, evaluation },

  data () {
    return {
      // tabs
      tabs: [
        { key: 'introduction', title: '自我介绍' },
        { key: 'information', title: '基本信息' },
        { key: 'experience', title: '职业经历' },
        { key: 'skill', title: '职业技能' },
        { key: 'project', title: '项目经历' },
        { key: 'hobbies', title: '兴趣爱好' },
        { key: 'evaluation', title: '评价一下' }
      ],
      // 滑动开始的坐标
      startX: void 0
    }
  },

  computed: {
    // 当前页
    currentName () {
      return globalStore.state.currentTab.name
    },
    // 当前页索引
    currentIndex () {
      return globalStore.state.currentTab.index
    }
  },

  methods: {
    /**
     * tab切换
     */
    tabChange (e) {
      const name = e.mp.detail.key
      let index
      this.tabs.forEach((item, num) => {
        if (item.key === name) index = num
      })
      const tab = { name, index }
      globalStore.commit('tabChange', tab)
    },

    /**
     * 滑动开始
     */
    touchstart (e) {
      console.log(e.mp.changedTouches, 'e.mp.changedTouches')
      this.startX = e.mp.changedTouches[0].clientX
    },

    /**
     * 找tab页名字
     */
    findName (index) {
      return this.tabs[index].key
    },

    /**
     * 滑动结束
     */
    touchend (e) {
      const endX = e.mp.changedTouches[0].clientX
      if (endX - this.startX > 100) {
        // 上一页
        const index = (this.currentIndex - 1) >= 0 ? (this.currentIndex - 1) : this.currentIndex
        const name = this.findName(index)
        const tab = { name, index }
        globalStore.commit('tabChange', tab)
      } else if (endX - this.startX < -100) {
        // 下一页
        const index = (this.currentIndex + 1) <= 6 ? (this.currentIndex + 1) : this.currentIndex
        const name = this.findName(index)
        const tab = { name, index }
        globalStore.commit('tabChange', tab)
      } else {
        console.log('滑动距离太短')
      }
    }
  }
}
</script>

<style scoped>
.card-box {
  height: 100%;
  width: 100%;
}
.tabs-box {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
}
._i-tab {
  padding: 0 20rpx;
}
.tabs-container {
  flex: 1;
  width: 100%;
  overflow-y: auto;
}
</style>
