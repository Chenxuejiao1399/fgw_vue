import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  isLogin: false,
}
const getters = {
  // getChatMessage(state) {
  //   let chatContent = []
  //   state.myMessage.forEach(item => {
  //     if (item.sendUid == state.chatUser.id || item.sendId == state.chatUser.id) {
  //       chatContent.push(item)
  //     }
  //   })
  //   return chatContent
  // }
}

const mutations = {
  //设置登录状态未true
  SETISLOGIN(state) {
    state.isLogin = true
  }
}

const actions = {
  // setUserRole(context, payload) {
  //   context.commit('setUserRole', payload)
  // }
}

const store = new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})

export default store
