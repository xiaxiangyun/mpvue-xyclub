<template>
  <div class="introduction">
    <img src="/static/img/paper.jpeg" class="image">
    <div class="word-box">{{showWords}}</div>
  </div>
</template>

<script>
import globalStore from '@/stores/global'

export default {
  props: {
    current: { type: String }
  },

  data () {
    return {
      // 定时器
      intervalId: void 0,
      // 索引
      index: 1,
      // 所有文字
      allWords: '，您好：\r\n      很高兴遇见您！\r\n      我是一名有点小帅的程序员，迫于生计正漂泊于寒冷的北京，从事着前端开发的工作。' +
        '\r\n      我热爱编程，并积极拥抱前端新技术，沉醉于它们的精致与巧妙。' +
        '\r\n      近期因为个人原因准备回到南昌工作，希望您看完我的简历后能够给我一个回来的机会。😁' +
        '\r\n      祝：身体健康，工作顺利！',
      // 展示的文字
      showWords: ''
    }
  },

  computed: {
    // 弹窗标记
    beginFlag () {
      return globalStore.state.loginMsg.isLogin
    }
  },

  watch: {
    beginFlag (val, oldVal) {
      if (val === true && oldVal === false) {
        const nick = globalStore.state.loginMsg.userInfo.nickName || '朋友'
        this.allWords = nick + this.allWords
        this.intervalId = setInterval(this.getShowWords, 100)
      }
    }
  },

  methods: {
    getShowWords () {
      this.showWords = this.allWords.substring(0, this.index++)
      if (this.index === this.allWords.length + 1) clearInterval(this.intervalId)
    }
  },

  onLoad () {
    if (this.beginFlag) {
      const nick = globalStore.state.loginMsg.userInfo.nickName || '朋友'
      this.allWords = nick + this.allWords
      this.intervalId = setInterval(this.getShowWords, 100)
    }
  },

  beforeDestroy () {
    clearInterval(this.intervalId)
  }
}
</script>

<style scoped>
.introduction,
.image {
  box-sizing: border-box;
  height: 100%;
  width: 100%;
}
.introduction {
  position: relative;
}
.word-box {
  box-sizing: border-box;
  height: 100%;
  width: 100%;
  line-height: 1.5em;
  top: 0;
  padding: 100rpx;
  position: absolute;
  white-space: pre-wrap;
}
</style>
