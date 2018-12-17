import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 当前页面
    currentPage: 'homepage',
    // 用户登录信息
    loginMsg: {
      isLogin: false,
      userInfo: {}
    }
  },

  mutations: {
    /**
     * 页面切换
     */
    currentChange: (state, page) => {
      state.currentPage = page
    },
    /**
     * 登录状态切换
     */
    loginChange: (state, userInfo) => {
      state.loginMsg = { isLogin: true, userInfo: userInfo }
    }
  }
})
