<template>
  <div>
    <div>名片</div>
    <!-- 此处修改了iview modal组件：1.修改click事件为btnClick 2.增加openType传参 3.增加传递getuserinfo方法 -->
    <i-modal :visible="modalFlag" @btnClick="handleClick" :actions="buttons" @getuserinfo="getuserinfo" >
      登陆后可体验更多功能
    </i-modal>
    <i-message id="message" />
  </div>
</template>

<script>
const { $Message } = require('../../static/iview/base/index')
export default {
  data () {
    return {
      // 弹窗标记
      modalFlag: true,
      // 自定义按钮
      buttons: [ { name: '返回首页' }, { name: '微信登陆', color: '#19be6b', openType: 'getUserInfo' } ]
    }
  },
  // onLoad () {
  //   // 查看是否授权
  // },
  methods: {
    /**
     * 按钮点击事件
     */
    handleClick (e) {
      const index = e.mp.detail.index
      if (index === 0) this.$emit('currentChange', 'homepage')
    },

    getuserinfo (e) {
      const userInfo = e.mp.detail.userInfo
      if (userInfo) {
        this.modalFlag = false
        $Message({ content: '欢迎你，' + userInfo.nickName + '！', type: 'success' })
      }
    }
  }
}
</script>

<style>

</style>
