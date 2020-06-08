import { UPDATE_CATEGORIES } from 'Index/store/mutation-types'

export default {
  [UPDATE_CATEGORIES] (state, payload) {
    if (!payload.section || state.sections.indexOf(payload.section) === -1) return
    state[payload.section] = payload.data.archives
  }
}
