import Vue from 'vue'
import Vuex from 'vuex'
import { task } from '@/store/task'

Vue.use(Vuex)

export const store = new Vuex.Store({
  modules: {
    task,
  }
})
