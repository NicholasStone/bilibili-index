import getters from './getters'
import movies from './movies'
import digital from './digital'
import mutations from './mutations'
import actions from './actions'
import {
  ENTERTAINMENT,
  MOVIE,
  NEWS,
  FASHION,
  KICHIKU,
  LIFE,
  DIGITAL,
  TECHNOLOGY,
  DANCE,
  MUSIC,
  GAMES,
  DOMESTIC_RELATED,
  BANGUMI_DYNAMIC,
  DOUGA,
  SOAP_OPERA,
  TV_SHOW,
  DOCUMENTARY
} from 'Index/config/section'

export default {
  namespaced: true,
  state: {
    sections: [
      DIGITAL, MOVIE
    ],
    category: [
      /**
       * name: 分区标题
       * section: 对应state中分区的名字
       * icon: 标题前的图标
       * order: 分区顺序
       */
      { title: '数码', name: DIGITAL, icon: '', order: 1 },
      { title: '电影', name: MOVIE, icon: 'movie', order: 2 }
    ],
    // [DIGITAL]: digital,
    // [MOVIE]: movies
    [MOVIE]: []
  },
  getters,
  actions,
  mutations
}
