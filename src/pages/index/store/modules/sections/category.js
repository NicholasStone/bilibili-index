import {
  ANIME,
  DIGITAL,
  DOUGA,
  GAMES,
  GUOCHUANG,
  INFORMATION, MANGA,
  MOVIE,
  MUSIC
} from 'Index/config/section'
import FocusPicture from 'Index/components/ContentSection/SideView/FocusPicture'
import Anime from 'Index/components/ContentSection/Anime'
import GuoChuang from 'Index/components/ContentSection/GuoChuang'
import Manga from 'Index/components/ContentSection/Manga'
/**
 * {
 *    title: 分区标题
 *    name: 对应state中分区的名字
 *    icon: 标题前的图标
 *    order: 分区顺序
 *    offsetY: 分区距离页面顶部的高度，用于导航定位，在渲染时动态生成
 *    component: 使用的组件
 *    cards: 左边的卡片分区
 *    side: 右边的列表分区
 * }
 */
// TODO: 从server提取设置
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
    side: {
      options: {
        api: 'video.index.publication_ranking',
        params: {
          season_type: 2,
          day: 3
        }
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
    side: {
      title: '资讯分区正式上线啦！',
      component: FocusPicture,
      props: {
        src: '/cdn/http://i0.hdslb.com/bfs/archive/0747d26dbbc3bbf087d47cff49e598a326b0030c.jpg@400w_413h_1c.webp'
      }
    }
  },
  { title: '动漫', name: ANIME, icon: 'anime', order: 6, component: Anime },
  { title: '国创', name: GUOCHUANG, icon: 'guochuang', order: 7, component: GuoChuang },
  { title: '漫画', name: MANGA, order: 8, component: Manga }
]
