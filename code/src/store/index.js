import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import * as getters from './getters'
import * as mutations from './mutations'
import * as actions from './actions'

Vue.use(Vuex)

const store = () => {
  return new Vuex.Store({ // eslint-disable-line
    state,
    mutations,
    actions,
    getters
  })
}
export default store
