import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isCreated:true
  },
  mutations: {
    show(state){
      state.isCreated=true;
      console.log(state.isCreated)
    },
    hide(state){
      state.isCreated=false
      console.log(state.isCreated)
    }
  },
  actions: {
  },
  modules: {
  }
})
