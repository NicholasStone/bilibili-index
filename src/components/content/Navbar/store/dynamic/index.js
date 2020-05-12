import indexDynamicAdapter from 'Utils/adapter'
import request from 'Network/request'
import { DYNAMICS_UPDATE } from 'Index/store/mutation-types'

export default {
  namespaced: true,
  state: {
    videos: [],
    lives: [],
    articals: []
  },
  mutations: {
    [DYNAMICS_UPDATE]: (state, payload) => {
      state.videos = indexDynamicAdapter(payload)
    }
  },
  actions: {
    getDynamic ({ commit }) {
      request({ url: '/Dynamics.json' })
        .then(data => commit(DYNAMICS_UPDATE, data))
    }
  },
  getters: {
    videos: state => state.videos
  }
}
