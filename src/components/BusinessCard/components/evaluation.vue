<template>
  <div class="evaluation">
    <div class="star-box">
      <div>星级评价：</div>
      <i-rate @change="onChange" :value="starNum" size="32">
        {{starNum}}星
      </i-rate>
    </div>
    <div>
      <textarea class="my-textarea" v-model="textareaVal" cols="30" rows="10" placeholder="请告诉我你的感受😄"></textarea>
      <i-button @click="handleClick" type="info">提交</i-button>
    </div>
    <i-toast id="toast"/>
  </div>
</template>

<script>
const { $Toast } = require('static/iview/base/index')

export default {
  data () {
    return {
      // 星星个数
      starNum: 0,
      // 用户输入框中的文字
      textareaVal: ''
    }
  },

  methods: {
    onChange (e) {
      const num = e.mp.detail.index
      this.starNum = num
    },

    handleClick () {
      if (this.starNum === 5) {
        $Toast({ content: '感谢评价！😁', type: 'success' })
      } else if (this.starNum === 0) {
        $Toast({ content: '还没有打分呢！', type: 'error' })
      } else {
        $Toast({ content: '仅接受5星好评！', type: 'warning' })
      }
    }
  }
}
</script>

<style scoped>
.evaluation {
  height: 100%;
  width: 100%;
  background: #fffef9;
}
.my-textarea {
  border: 1px solid #ccc;
  margin: 10px;
  padding: 5px;
  width: calc(100% - 32px);
  overflow: auto;
  word-break: break-all;
}
.star-box {
  display: flex;
  align-items: center;
  margin: 10px;
}
</style>
