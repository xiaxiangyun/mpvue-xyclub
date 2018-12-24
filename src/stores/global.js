import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 当前页面(一级菜单)
    currentPage: 'homepage',
    // 用户登录信息
    loginMsg: {
      isLogin: false,
      userInfo: {}
    },
    // 当前tab(简历中的tab页)
    currentTab: {
      name: 'introduction',
      index: 0
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
    },
    /**
     * 简历tab切换
     */
    tabChange: (state, tab) => {
      state.currentTab = tab
    }
  }
})
