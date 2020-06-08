import getters from './getters'
import mutations from './mutations'
import {
  // ENTERTAINMENT,
  MOVIE,
  // NEWS,
  // FASHION,
  // KICHIKU,
  // LIFE,
  DIGITAL
  // TECHNOLOGY,
  // DANCE,
  // MUSIC,
  // GAMES,
  // DOMESTIC_RELATED,
  // BANGUMI_DYNAMIC,
  // DOUGA,
  // SOAP_OPERA,
  // TV_SHOW,
  // DOCUMENTARY
} from 'Index/config/section'
import category from 'Index/store/modules/sections/category'

export default {
  namespaced: true,
  state: {
    sections: [
      DIGITAL, MOVIE
    ],
    category
  },
  getters,
  mutations
}
