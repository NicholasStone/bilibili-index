import { SET_LANG, SET_USER_ID } from './mutation-types'

export default {
  [SET_LANG]: (state, payload) => { state.lang = payload },
  [SET_USER_ID]: (state, payload) => { state.user_id = payload }
}
