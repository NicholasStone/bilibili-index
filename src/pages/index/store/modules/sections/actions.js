import request from 'Network/request'
import section from 'Index/config/section'
import { SECTION_UPDATE } from 'Index/store/mutation-types'

export default {
  async fetchSection ({ commit }, { region }) {
    const rid = section[region]
    if (!rid) return
    const result = await request('video.recommend.index_section', { params: { rid, ps: 12 } })
    commit(SECTION_UPDATE, {
      section: region,
      data: result.data
    })
  }
}
