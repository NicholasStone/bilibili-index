// TODO: 继续接驳
import { HISTORY_UPDATE } from 'Index/store/mutation-types'
import indexDynamicAdapter from 'Utils/adapter'
import request from 'Network/request'

export default {
  namespaced: true,
  state: {
    videos: [],
    articals: []
  },
  mutations: {
    [HISTORY_UPDATE]: (state, payload) => {
      state.videos = indexDynamicAdapter(payload)
    }
  },
  actions: {
    getDynamic ({ commit }) {
      request({ url: '/History.json' })
        .then(data => commit(HISTORY_UPDATE, data))
    }
  },
  getters: {
    videos: state => state.videos
  }
}
