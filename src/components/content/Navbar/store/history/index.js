// TODO: 继续接驳
import { HISTORY_UPDATE } from 'Index/store/mutation-types'
import indexDynamicAdapter from 'Utils/adapter'
import request, { requestLocal } from 'Network/request'

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
      requestLocal('/History.json')
        .then(data => commit(HISTORY_UPDATE, data))
    }
  },
  getters: {
    videos: state => state.videos
  }
}
