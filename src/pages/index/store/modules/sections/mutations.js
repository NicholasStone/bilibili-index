import { SECTION_UPDATE } from 'Index/store/mutation-types'

export default {
  [SECTION_UPDATE] (state, payload) {
    if (!payload.section || state.sections.indexOf(payload.section) === -1) return
    state[payload.section] = payload.data.archives
  }
}
