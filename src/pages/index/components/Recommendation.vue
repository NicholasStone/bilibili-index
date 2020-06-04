<template>
  <div class="recommendation">
    <div class="recommendation__slider">
      <carousel-screen></carousel-screen>
    </div>
    <div class="recommendation__box">
      <recommend-video class="recommendation__video" v-for="v in videoList" :key="v.bvid" :video="v"/>
      <button class="recommendation__button recommendation__button--prev" @click="currentList--">
        <i class="bilifont bili-icon_caozuo_xiangzuo"></i>
      </button>
      <button class="recommendation__button recommendation__button--next" @click="currentList++">
        <i class="bilifont bili-icon_caozuo_xiangyou"></i>
      </button>
    </div>
  </div>
</template>
<script>
import CarouselScreen from 'Index/components/Recommendation/CarouselScreen'
import RecommendVideo from 'Index/components/Recommendation/RecommendVideo'

export default {
  name: 'Recommendation',
  components: { RecommendVideo, CarouselScreen },
  data () {
    return {
      recommendVideos: [{ link: '//www.bilibili.com/video/BV1rD4y1D7Kb', bvid: 'BV1rD4y1D7Kb', src: '/cdn/http://i2.hdslb.com/bfs/archive/fe0c90fb7e709b6e37937e803563c95d32761ff4.jpg@412w_232h_1c_100q.jpg', title: '六月的雨 用沙画的方式打开《仙剑奇侠传1》', author: '方浪浪', view: '25.3万播放' }, { link: '//www.bilibili.com/video/BV1tV411C7Wx', bvid: 'BV1tV411C7Wx', src: '/cdn/http://i2.hdslb.com/bfs/archive/4741c230613dd4c3d81db47b85b3c88c987a5a84.jpg@412w_232h_1c_100q.jpg', title: '【定格动画】百度网盘切碎被专业人士抬走【太空沙解压】', author: 'sand_magic', view: '16.3万播放' }, { link: '//www.bilibili.com/video/BV1ef4y127pz', bvid: 'BV1ef4y127pz', src: '/cdn/http://i0.hdslb.com/bfs/archive/69c06f903c106e92a1b7a3bde7242a9e9651d835.jpg@412w_232h_1c_100q.jpg', title: '【明日方舟\n      黄铁行动】无需专三！可能是目前全网最低配的危机合约18打法，首日速通助你快速拿镀层！', author: '隔壁老王窗对面的老王', view: '15.2万播放' }, { link: '//www.bilibili.com/video/BV1Mk4y1z7ey', bvid: 'BV1Mk4y1z7ey', src: '/cdn/http://i2.hdslb.com/bfs/archive/aa8077ee9369ce2cca59066f51b9be4662d71fe3.jpg@412w_232h_1c_100q.jpg', title: '【川普】浮夸，是一个卧底最好的掩饰', author: '超音速君', view: '112.1万播放' }, { link: '//www.bilibili.com/video/BV1Ht4y1y7vN', bvid: 'BV1Ht4y1y7vN', src: '/cdn/http://i1.hdslb.com/bfs/archive/b9e5bfa00d692d9f82e5578d091b04fcc0d15be2.jpg@412w_232h_1c_100q.jpg', title: '【明日方舟危机合约】黄铁行动18级 高配低练 无需专三', author: '紫琉汐樱', view: '8.8万播放' }, { link: '//www.bilibili.com/video/BV1zg4y1i7s4', bvid: 'BV1zg4y1i7s4', src: '/cdn/http://i0.hdslb.com/bfs/archive/9ddd05f3c4bc6f97b9120333df4f9c3d9385771b.jpg@412w_232h_1c_100q.jpg', title: '龙崎【魂学研习者】28：狂人的知识（上）', author: '龙崎棒棒糖', view: '10.0万播放' }, { link: '//www.bilibili.com/video/BV1EK411p7TC', bvid: 'BV1EK411p7TC', src: '/cdn/http://i2.hdslb.com/bfs/archive/c3034fb15823dfcad55013b1a7f9557dab42d0d9.jpg@412w_232h_1c_100q.jpg', title: '\n      OPPO联名EVA没内味！死忠粉掏出11年前考古机，告诉你什么叫联名！', author: '鹅板凳', view: '10.0万播放' }, { link: '//www.bilibili.com/video/BV1dg4y1i7af', bvid: 'BV1dg4y1i7af', src: '/cdn/http://i1.hdslb.com/bfs/archive/c8b8275cdd4da8c43e8c1b1cb5ab86c20bfef1be.jpg@412w_232h_1c_100q.jpg', title: '【战双帕弥什】新章节「九龙环城」PV公开 | 九龙鏖战，鸦羽驾临', author: '战双帕弥什', view: '23.2万播放' }, { link: '//www.bilibili.com/video/BV1hg4y1i768', bvid: 'BV1hg4y1i768', src: '/cdn/http://i2.hdslb.com/bfs/archive/cfd37eb2c4ce154a7f91dff4b800c0a77f4aeec4.jpg@412w_232h_1c_100q.jpg', title: '魔 性 舞 者', author: '小太', view: '51.3万播放' }, { link: '//www.bilibili.com/video/BV1gf4y1273G', bvid: 'BV1gf4y1273G', src: '/cdn/http://i0.hdslb.com/bfs/archive/870c3690f0dcf080c842d3f0695df7a47b4ce101.jpg@515w_290h_1c_100q.webp', title: '守望先锋四周年庆典MTV：ʟᴏsᴇ ᴄᴏɴᴛʀᴏʟ 酣歌恒舞', author: 'aka鹿鳴喬納森', view: '23.1万播放' }, { link: '//www.bilibili.com/video/BV1kV411r7HE', bvid: 'BV1kV411r7HE', src: '/cdn/http://i1.hdslb.com/bfs/archive/bdd1901aaba0de83586a779072628ce9eefef0c5.jpg@515w_290h_1c_100q.webp', title: '【半佛】资本是如何玩弄创业者的。', author: '硬核的半佛仙人', view: '82.9万播放' }, { link: '//www.bilibili.com/video/BV1CT4y1E7Ru', bvid: 'BV1CT4y1E7Ru', src: '/cdn/http://i2.hdslb.com/bfs/archive/b8e7548125511c502fc80c6b88a09d7bf6704461.jpg@515w_290h_1c_100q.webp', title: '\n      【公主连结】6月8日第二次活动小小甜心大冒险全面介绍+注意事项+体力建议+屯装备参考图', author: '卡特亚', view: '12.3万播放' }, { link: '//www.bilibili.com/video/BV1np4y1D7Hw', bvid: 'BV1np4y1D7Hw', src: '/cdn/http://i0.hdslb.com/bfs/archive/d1e827ccadb5c7f0afe2ec332369d77913e16c8f.jpg@515w_290h_1c_100q.webp', title: '你住别墅我住石林，住树屋。正式服无违建2000平7级家园建设~', author: '圆满是两条狗', view: '1.1万播放' }, { link: '//www.bilibili.com/video/BV1hz411i71G', bvid: 'BV1hz411i71G', src: '/cdn/http://i2.hdslb.com/bfs/archive/2280402ee786ad2a053a33f89be958c67fb0c5be.jpg@515w_290h_1c_100q.webp', title: '前面的桥呢？？？？ #2/2', author: '超果果mc', view: '26.6万播放' }, { link: '//www.bilibili.com/video/BV1nA411q7VG', bvid: 'BV1nA411q7VG', src: '/cdn/http://i1.hdslb.com/bfs/archive/7f2380b28e8a5655fc18370627daae36c29bb839.jpg@515w_290h_1c_100q.webp', title: '【鬼谷说】龙兽争霸（其五）：让恐龙再次伟大', author: '芳斯塔芙', view: '67.7万播放' }, { link: '//www.bilibili.com/video/BV1754y1Q7Qk', bvid: 'BV1754y1Q7Qk', src: '/cdn/http://i1.hdslb.com/bfs/archive/97768e10083198c67c5abcb1fe09a756f13278ad.jpg@515w_290h_1c_100q.webp', title: '【睡前消息123】徐州三院卖光国有股份，三甲医院彻底私有化？', author: '观视频工作室', view: '36.0万播放' }, { link: '//www.bilibili.com/video/BV1Da4y1e7Q8', bvid: 'BV1Da4y1e7Q8', src: '/cdn/http://i1.hdslb.com/bfs/archive/bf23ce6668c006844b0db17afed21855e5b45105.png@515w_290h_1c_100q.webp', title: '泰戈尔《飞鸟集》英文版326首全集(英音+美音),\n      适合朗读和练听力', author: '英语兔', view: '2.2万播放' }, { link: '//www.bilibili.com/video/BV1dk4y1B7ja', bvid: 'BV1dk4y1B7ja', src: '/cdn/http://i2.hdslb.com/bfs/archive/263ef8323db58316206b7a1edf72dbdd40f8562e.jpg@515w_290h_1c_100q.webp', title: '【明日方舟】黄铁行动精二50级单嫖专3 18级合约 作业超进化', author: 'fux2', view: '3.6万播放' }, { link: '//www.bilibili.com/video/BV1ba4y1v7gj', bvid: 'BV1ba4y1v7gj', src: '/cdn/http://i1.hdslb.com/bfs/archive/d14e56dc02cf4e8ba3981fe5dca3edf6b69ca0cc.png@515w_290h_1c_100q.webp', title: '【范志毅】传说中的B站，我来了！', author: '我是范志毅', view: '14.4万播放' }, { link: '//www.bilibili.com/video/BV1Pa4y1v7ei', bvid: 'BV1Pa4y1v7ei', src: '/cdn/http://i0.hdslb.com/bfs/archive/62a8051cc2b10b3b1d6e0ff04e7138ea9313be79.jpg@515w_290h_1c_100q.webp', title: '【怪物猎人世界】观赏向 #2', author: 'mcstarbro', view: '4.6万播放' }, { link: '//www.bilibili.com/video/BV1xp4y1D7Ku', bvid: 'BV1xp4y1D7Ku', src: '/cdn/http://i1.hdslb.com/bfs/archive/6914d0b53755dc58af1955d08af925274f7d6e83.jpg@515w_290h_1c_100q.webp', title: '【全民18级】精二20+专3真银斩', author: '巅峰计划', view: '2.4万播放' }, { link: '//www.bilibili.com/video/BV1YV411C7fS', bvid: 'BV1YV411C7fS', src: '/cdn/http://i1.hdslb.com/bfs/archive/8027c90a2772f9ca830cc7728a1cc8821fe060c9.jpg@515w_290h_1c_100q.webp', title: '\n      【说童年】一首歌唱完87部童年国产动画，送给你的六一礼物（高燃原创曲）', author: '荟小荟', view: '9.1万播放' }, { link: '//www.bilibili.com/video/BV1Jv41167vn', bvid: 'BV1Jv41167vn', src: '/cdn/http://i0.hdslb.com/bfs/archive/3c10b225897ba272d9c3a082199825990f8d1d92.jpg@515w_290h_1c_100q.webp', title: '【施工中】公主连结国服 二期团队战作业 金牛座公会战/工会战', author: '叫我棉被', view: '12.2万播放' }, { link: '//www.bilibili.com/video/BV1cz411i7Ht', bvid: 'BV1cz411i7Ht', src: '/cdn/http://i1.hdslb.com/bfs/archive/43603a8bc7673f97a3eb2e8f180106fc89c4b3f4.jpg@515w_290h_1c_100q.webp', title: '【电竞星快报】抗 韩 惨\n      案！那天，年糕人终于回想起被LPL支配的恐惧...（第二季18期）', author: '银河电竞', view: '13.0万播放' }, { link: '//www.bilibili.com/video/BV1ja4y1v7LW', bvid: 'BV1ja4y1v7LW', src: '/cdn/http://i2.hdslb.com/bfs/archive/37dba232c621522f8ce80add991987a4ca958784.jpg@515w_290h_1c_100q.webp', title: '\n      【自得琴社】《虞姬》民乐+戏腔+剑舞绝美登场|食物语·霸王别姬印象曲 民国装束', author: '古琴诊所', view: '7.0万播放' }, { link: '//www.bilibili.com/video/BV1Tv41167qf', bvid: 'BV1Tv41167qf', src: '/cdn/http://i2.hdslb.com/bfs/archive/3671d40f9d4ca9734a53b5a13492adf80247432e.jpg@515w_290h_1c_100q.webp', title: '【宝可梦35】超古代精灵苏醒，世界面临崩溃！', author: '艾尔十六', view: '7.8万播放' }, { link: '//www.bilibili.com/video/BV1gi4y1x7Vf', bvid: 'BV1gi4y1x7Vf', src: '/cdn/http://i2.hdslb.com/bfs/archive/a81d33dd82c8b369178108fe15a93688d53bfed1.jpg@515w_290h_1c_100q.webp', title: '【懂点儿啥】“美国之春”：自由民主又成最大赢家？', author: '观察者网', view: '80.8万播放' }, { link: '//www.bilibili.com/video/BV1pa4y1v7ZG', bvid: 'BV1pa4y1v7ZG', src: '/cdn/http://i0.hdslb.com/bfs/archive/f8c0534d71f7d2c5fce5f609a3ee156cdc7e2746.jpg@515w_290h_1c_100q.webp', title: '\n      你们要的火力全开终极版！大剧院几千万的音响全开听黑人抬棺是什么感受？！', author: '翻滚着的肉团儿', view: '3.4万播放' }, { link: '//www.bilibili.com/video/BV1eA411q7MW', bvid: 'BV1eA411q7MW', src: '/cdn/http://i2.hdslb.com/bfs/archive/7394eb526d27b36d0bce6ac44089b00e7362a284.jpg@515w_290h_1c_100q.webp', title: '【鬼畜战争大片】拯救带兵鲲鲲：终极之战（完整版）', author: '蜡烛君瑞泽', view: '13.9万播放' }, { link: '//www.bilibili.com/video/BV1Yp4y1D7uj', bvid: 'BV1Yp4y1D7uj', src: '/cdn/http://i2.hdslb.com/bfs/archive/af42e8fa6d3834b1c9c297ab8efa3be841a1b069.jpg@515w_290h_1c_100q.webp', title: '这才是mc萌新该住的房间', author: '草莓味の喵喵酱', view: '9658播放' }],
      current: 0
    }
  },
  computed: {
    currentList: {
      get () {
        return this.current
      },
      set (val) {
        const totalList = 3
        const tmp = val % totalList
        this.current = tmp >= 0 ? tmp : tmp + totalList
      }
    },
    videoList () {
      const itemPreList = 10
      const start = this.currentList * itemPreList
      const end = start + itemPreList
      return this.recommendVideos.slice(start, end)
    }
  }
}
</script>
<style lang="less" scoped>
  .recommendation {
    display: flex;
    justify-content: space-between;
    height: 242px;
    @media screen and (max-width: @screen-size-micro) {
      height: 202px;
    }

    &__slider {
      .blocking(550px, 100%);
    }

    &__box {
      display: flex;
      height: 100%;
      position: relative;
      @media screen {
        @media (max-width: @screen-size-wide) {
          width: 854px;
        }

        @media (max-width: @screen-size-middle) {
          width: 638px;
        }

        @media (max-width: @screen-size-micro) {
          width: 530px;
        }
      }
      .flexing(wrap, space-between, space-between);
    }

    &__video {
      @media screen and (max-width: @screen-size-middle) {
        &:nth-child(n+7) {
          display: none;
        }
      }
    }

    &__button {
      .blocking(32px, 70px);
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      background-color: rgba(0,0,0,.6);
      line-height: 70px;
      text-align: center;
      color: @color-white;
      opacity: 0;
      transition: opacity .2s;
      &--prev {
        left: 0;
        border-radius: 0 2px 2px 0;
      }

      &--next {
        right: 0;
        border-radius: 2px 0 0 2px;
      }
    }

    &__box:hover &__button {
      opacity: 1;
    }
  }
</style>
