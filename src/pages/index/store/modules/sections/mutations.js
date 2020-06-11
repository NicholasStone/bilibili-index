import { UPDATE_CATEGORIES, UPDATE_SECTION_OFFSET } from 'Index/store/mutation-types'

export default {
  [UPDATE_CATEGORIES] (state, payload) {
    if (!Array.isArray(payload)) return
    state.category = payload.map((current, index) => {
      current.order = index
      return current
    })
  },
  [UPDATE_SECTION_OFFSET] (state, { name, offset, height }) {
    const item = state.category.find(item => item.name === name)
    item.offsetY = offset
    item.height = height
  }
}
