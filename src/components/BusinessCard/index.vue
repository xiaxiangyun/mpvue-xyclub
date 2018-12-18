<template>
  <div class="card-box">
    <div class="tabs-box">
      <i-tabs :current="currentTab" scroll @change="tabChange">
        <i-tab v-for="tab in tabs" :key="tab.key" :title="tab.title"></i-tab>
      </i-tabs>
      <div class="tabs-container">
        <introduction v-if="currentTab==='introduction'"/>
        <information v-if="currentTab==='information'"/>
        <experience v-if="currentTab==='experience'"/>
        <skill v-if="currentTab==='skill'"/>
        <project v-if="currentTab==='project'"/>
        <hobbies v-if="currentTab==='hobbies'"/>
        <evaluation v-if="currentTab==='evaluation'"/>
      </div>
    </div>
    <logincheck tips="登录后方可查看"/>
  </div>
</template>

<script>
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
      // 当前页
      currentTab: 'introduction',
      // tabs
      tabs: [
        { key: 'introduction', title: '自我介绍' },
        { key: 'information', title: '基本信息' },
        { key: 'experience', title: '职业经历' },
        { key: 'skill', title: '职业技能' },
        { key: 'project', title: '项目经历' },
        { key: 'hobbies', title: '兴趣爱好' },
        { key: 'evaluation', title: '评价一下' }
      ]
    }
  },

  methods: {
    tabChange (e) {
      this.currentTab = e.mp.detail.key
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
