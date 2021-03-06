import indexDynamicAdapter from 'Utils/adapter'
import { requestLocal } from 'Network/request'
import { DYNAMICS_UPDATE } from 'Index/store/mutation-types'

export default {
  namespaced: true,
  state: {
    videos: [],
    lives: [],
    articles: []
  },
  mutations: {
    [DYNAMICS_UPDATE]: (state, payload) => {
      state.videos = indexDynamicAdapter(payload)
    }
  },
  actions: {
    getDynamic ({ commit }) {
      requestLocal('/Dynamics.json')
        .then(data => commit(DYNAMICS_UPDATE, data))
    }
  },
  getters: {
    videos: state => state.videos
  }
}
