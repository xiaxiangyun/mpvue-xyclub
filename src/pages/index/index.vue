<template>
  <div class="container">
    <button open-type="getUserInfo" @getuserinfo="getUserInfo">登录</button>
    <i-card full title="卡片标题" extra="额外内容" thumb="http://pic28.photophoto.cn/20130818/0020033143720852_b.jpg">
      <view slot="content">内容不错</view>
      <view slot="footer">尾部内容</view>
    </i-card>
    <i-button type="primary" bind:click="handleClick">这是一个按钮</i-button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Hello!!!'
    }
  },

  // created () {
  //   this.login()
  // },
  methods: {
    // login () {
    //   console.log('触发')
    //   qcloud.setLoginUrl(config.loginUrl)
    //   const session = qcloud.Session.get()
    //   console.log(session)
    //   if (session) {
    //     // 第二次登录
    //     // 或者本地已经有登录态
    //     // 可使用本函数更新登录态
    //     qcloud.loginWithCode({
    //       success: res => {
    //         this.setData({ userInfo: res, logged: true })
    //         console.log(res)
    //       },
    //       fail: err => {
    //         console.error('222', err)
    //       }
    //     })
    //   } else {
    //     // 首次登录
    //     qcloud.login({
    //       success: res => {
    //         this.setData({ userInfo: res, logged: true })
    //       },
    //       fail: err => {
    //         console.log(err)
    //       }
    //     })
    //   }
    // },
    getUserInfo (e) {
      console.log('111', e.mp.detail.userInfo)
    }
  }

  // onLoad () {
  //   wx.setNavigationBarTitle({
  //     title: '修改后的导航'
  //   })
  // },

  // methods: {
  //   clickHandle () {
  //     this.msg = '123'
  //   }
  // }
}
</script>

<style scoped>
.message {
  color: red;
  padding: 10px;
  text-align: center;
}
</style>