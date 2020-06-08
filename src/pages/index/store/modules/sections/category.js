import { DIGITAL, DOUGA, GAMES, INFORMATION, MOVIE, MUSIC } from 'Index/config/section'
import FocusPicture from 'Index/components/ContentSection/SideView/FocusPicture'

/**
 * {
 *    title: 分区标题
 *    name: 对应state中分区的名字
 *    icon: 标题前的图标
 *    order: 分区顺序
 *    component: 使用的组件
 *    cards: 左边的卡片分区
 *    ranks: 右边的列表分区
 * }
 */

export default [
  { title: '动画', name: DOUGA, icon: 'douga', order: 0 },
  { title: '数码', name: DIGITAL, icon: 'digital', order: 1 },
  {
    title: '电影',
    name: MOVIE,
    icon: 'movie',
    order: 2,
    // cards: {
    //   data: {
    //     api: 'video.index.section_cards',
    //     params: {
    //       ps: 12,
    //       rid: section[MOVIE]
    //     }
    //   }
    // },
    ranks: {
      options: {
        api: 'video.index.publication_ranking',
        params: {
          season_type: 2,
          day: 3
        },
        adapter: (data) => data.list.slice(0, 10)
      }
    }
  },
  { title: '游戏', name: GAMES, icon: 'games', order: 3 },
  { title: '音乐', name: MUSIC, icon: 'music', order: 4 },
  {
    title: '资讯',
    name: INFORMATION,
    icon: 'information',
    order: 5,
    ranks: {
      title: '资讯分区正式上线啦！',
      component: FocusPicture,
      props: {
        src: '/cdn/http://i0.hdslb.com/bfs/archive/0747d26dbbc3bbf087d47cff49e598a326b0030c.jpg@400w_413h_1c.webp'
      }
    }
  }
]
