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
      allWords: '，你好：\r\n      很高兴遇见你！',
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
.introduction, .image {
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
  top: 0;
  padding: 100rpx;
  position: absolute;
  white-space: pre-wrap;
}
</style>
