export default {
  namespaced: true,
  state: {
    channels: [{
      link: 'https://www.bilibili.com/v/douga/',
      title: '动画',
      newUploaded: Math.floor(Math.random() * 10000),
      popover: 'van-popover-1048',
      subChannels: {
        width: '162',
        channels: [{
          link: '//www.bilibili.com/v/douga/mad/',
          title: 'MAD·AMV'
        },
        {
          link: '//www.bilibili.com/v/douga/mmd/',
          title: 'MMD·3D'
        },
        {
          link: '//www.bilibili.com/v/douga/voice/',
          title: '短片·手书·配音'
        },
        {
          link: '//www.bilibili.com/v/douga/tokusatsu/',
          title: '特摄'
        },
        {
          link: '//www.bilibili.com/v/douga/other/',
          title: '综合'
        }]
      }
    },
    {
      link: 'https://www.bilibili.com/anime/',
      title: '番剧',
      newUploaded: 142,
      popover: 'van-popover-1125',
      subChannels: {
        width: '172',
        channels: [{
          link: '//www.bilibili.com/v/anime/serial/',
          title: '连载动画'
        },
        {
          link: '//www.bilibili.com/v/anime/finish/',
          title: '完结动画'
        },
        {
          link: '//www.bilibili.com/v/anime/information/',
          title: '资讯'
        },
        {
          link: '//www.bilibili.com/v/anime/offical/',
          title: '官方延伸'
        },
        {
          link: '//www.bilibili.com/anime/timeline/',
          title: '新番时间表'
        },
        {
          link: '//www.bilibili.com/anime/index/',
          title: '番剧索引'
        }]
      }
    },
    {
      link: 'https://www.bilibili.com/v/music/',
      title: '音乐',
      newUploaded: Math.floor(Math.random() * 10000),
      popover: 'van-popover-4458',
      subChannels: {
        width: '268',
        channels: [{
          link: '//www.bilibili.com/v/music/original/',
          title: '原创音乐'
        },
        {
          link: '//www.bilibili.com/v/music/cover/',
          title: '翻唱'
        },
        {
          link: '//www.bilibili.com/v/music/vocaloid/',
          title: 'VOCALOID·UTAU'
        },
        {
          link: '//www.bilibili.com/v/music/electronic/',
          title: '电音'
        },
        {
          link: '//www.bilibili.com/v/music/perform/',
          title: '演奏'
        },
        {
          link: '//www.bilibili.com/v/music/mv/',
          title: 'MV'
        },
        {
          link: '//www.bilibili.com/v/music/live/',
          title: '音乐现场'
        },
        {
          link: '//www.bilibili.com/v/music/other/',
          title: '音乐综合'
        },
        {
          link: '//www.bilibili.com/audio/home?musicType=music',
          title: '音频'
        }]
      }
    },
    {
      link: 'https://www.bilibili.com/guochuang/',
      title: '国创',
      newUploaded: 438,
      popover: 'van-popover-9515',
      subChannels: {
        width: '214',
        channels: [{
          link: '//www.bilibili.com/v/guochuang/chinese/',
          title: '国产动画'
        },
        {
          link: '//www.bilibili.com/v/guochuang/original/',
          title: '国产原创相关'
        },
        {
          link: '//www.bilibili.com/v/guochuang/puppetry/',
          title: '布袋戏'
        },
        {
          link: '//www.bilibili.com/v/guochuang/motioncomic/',
          title: '动态漫·广播剧'
        },
        {
          link: '//www.bilibili.com/v/guochuang/information/',
          title: '资讯'
        },
        {
          link: '//www.bilibili.com/guochuang/timeline/',
          title: '新番时间表'
        },
        {
          link: '//www.bilibili.com/guochuang/index/',
          title: '国产动画索引'
        }]
      }
    },
    {
      link: 'https://www.bilibili.com/v/dance/',
      title: '舞蹈',
      newUploaded: Math.floor(Math.random() * 10000),
      popover: 'van-popover-1617',
      subChannels: {
        width: '172',
        channels: [{
          link: '//www.bilibili.com/v/dance/otaku/',
          title: '宅舞'
        },
        {
          link: '//www.bilibili.com/v/dance/hiphop/',
          title: '街舞'
        },
        {
          link: '//www.bilibili.com/v/dance/star/',
          title: '明星舞蹈'
        },
        {
          link: '//www.bilibili.com/v/dance/china/',
          title: '中国舞'
        },
        {
          link: '//www.bilibili.com/v/dance/three_d/',
          title: '舞蹈综合'
        },
        {
          link: '//www.bilibili.com/v/dance/demo/',
          title: '舞蹈教程'
        }]
      }
    },
    {
      link: 'https://www.bilibili.com/v/game/',
      title: '游戏',
      newUploaded: Math.floor(Math.random() * 10000),
      popover: 'van-popover-6487',
      subChannels: {
        width: '240',
        channels: [{
          link: '//www.bilibili.com/v/game/stand_alone/',
          title: '单机游戏'
        },
        {
          link: '//www.bilibili.com/v/game/esports/',
          title: '电子竞技'
        },
        {
          link: '//www.bilibili.com/v/game/mobile/',
          title: '手机游戏'
        },
        {
          link: '//www.bilibili.com/v/game/online/',
          title: '网络游戏'
        },
        {
          link: '//www.bilibili.com/v/game/board/',
          title: '桌游棋牌'
        },
        {
          link: '//www.bilibili.com/v/game/gmv/',
          title: 'GMV'
        },
        {
          link: '//www.bilibili.com/v/game/music/',
          title: '音游'
        },
        {
          link: '//www.bilibili.com/v/game/mugen/',
          title: 'Mugen'
        },
        {
          link: '//www.bilibili.com/v/game/match/',
          title: '游戏赛事'
        }]
      }
    },
    {
      link: 'https://www.bilibili.com/v/technology/',
      title: '科技',
      newUploaded: Math.floor(Math.random() * 10000),
      popover: 'van-popover-394',
      subChannels: {
        width: '172',
        channels: [{
          link: '//www.bilibili.com/v/technology/science/',
          title: '科学科普'
        },
        {
          link: '//www.bilibili.com/v/technology/fun/',
          title: '社科人文'
        },
        {
          link: '//www.bilibili.com/v/technology/wild/',
          title: '野生技术协会'
        },
        {
          link: '//www.bilibili.com/v/technology/speech_course/',
          title: '演讲·公开课'
        },
        {
          link: '//www.bilibili.com/v/technology/military/',
          title: '星海'
        },
        {
          link: '//www.bilibili.com/v/technology/mechanical/',
          title: '机械'
        },
        {
          link: '//www.bilibili.com/v/technology/automobile/',
          title: '汽车'
        }]
      }
    },
    {
      link: 'https://www.bilibili.com/v/digital/',
      title: '数码',
      newUploaded: Math.floor(Math.random() * 10000),
      popover: 'van-popover-1558',
      subChannels: {
        width: '80',
        channels: [{
          link: '//www.bilibili.com/v/digital/mobile/',
          title: '手机平板'
        },
        {
          link: '//www.bilibili.com/v/digital/pc/',
          title: '电脑装机'
        },
        {
          link: '//www.bilibili.com/v/digital/photography/',
          title: '摄影摄像'
        },
        {
          link: '//www.bilibili.com/v/digital/intelligence_av/',
          title: '影音智能'
        }]
      }
    },
    {
      link: 'https://www.bilibili.com/v/life/',
      title: '生活',
      newUploaded: Math.floor(Math.random() * 10000),
      popover: 'van-popover-9871',
      subChannels: {
        width: '124',
        channels: [{
          link: '//www.bilibili.com/v/life/funny/',
          title: '搞笑'
        },
        {
          link: '//www.bilibili.com/v/life/daily/',
          title: '日常'
        },
        {
          link: '//www.bilibili.com/v/life/food/',
          title: '美食圈'
        },
        {
          link: '//www.bilibili.com/v/life/animal/',
          title: '动物圈'
        },
        {
          link: '//www.bilibili.com/v/life/handmake/',
          title: '手工'
        },
        {
          link: '//www.bilibili.com/v/life/painting/',
          title: '绘画'
        },
        {
          link: '//www.bilibili.com/v/life/sports/',
          title: '运动'
        },
        {
          link: '//www.bilibili.com/v/life/other/',
          title: '其他'
        }]
      }
    },
    {
      link: 'https://www.bilibili.com/v/kichiku/',
      title: '鬼畜',
      newUploaded: 219,
      popover: 'van-popover-2148',
      subChannels: {
        width: '118',
        channels: [{
          link: '//www.bilibili.com/v/kichiku/guide/',
          title: '鬼畜调教'
        },
        {
          link: '//www.bilibili.com/v/kichiku/mad/',
          title: '音MAD'
        },
        {
          link: '//www.bilibili.com/v/kichiku/manual_vocaloid/',
          title: '人力VOCALOID'
        },
        {
          link: '//www.bilibili.com/v/kichiku/course/',
          title: '教程演示'
        }]
      }
    },
    {
      link: 'https://www.bilibili.com/v/fashion/',
      title: '时尚',
      newUploaded: Math.floor(Math.random() * 10000),
      popover: 'van-popover-9866',
      subChannels: {
        width: '124',
        channels: [{
          link: '//www.bilibili.com/v/fashion/makeup/',
          title: '美妆'
        },
        {
          link: '//www.bilibili.com/v/fashion/clothing/',
          title: '服饰'
        },
        {
          link: '//www.bilibili.com/v/fashion/aerobics/',
          title: '健身'
        },
        {
          link: '//www.bilibili.com/v/fashion/catwalk/',
          title: 'T台'
        },
        {
          link: '//www.bilibili.com/v/fashion/trends/',
          title: '风尚标'
        }]
      }
    },
    {
      link: 'https://www.bilibili.com/v/information/',
      title: '资讯',
      newUploaded: 90,
      popover: 'van-popover-7340',
      subChannels: {
        width: '60',
        channels: [{
          link: '//www.bilibili.com/v/information/hotspot/',
          title: '热点'
        },
        {
          link: '//www.bilibili.com/v/information/global/',
          title: '环球'
        },
        {
          link: '//www.bilibili.com/v/information/social/',
          title: '社会'
        },
        {
          link: '//www.bilibili.com/v/information/multiple/',
          title: '综合'
        }]
      }
    },
    {
      link: 'https://www.bilibili.com/v/ent/',
      title: '娱乐',
      newUploaded: Math.floor(Math.random() * 10000),
      popover: 'van-popover-8818',
      subChannels: {
        width: '90',
        channels: [{
          link: '//www.bilibili.com/v/ent/variety/',
          title: '综艺'
        },
        {
          link: '//www.bilibili.com/v/ent/star/',
          title: '明星'
        },
        {
          link: '//www.bilibili.com/v/ent/korea/',
          title: 'Korea相关'
        }]
      }
    },
    {
      link: 'https://www.bilibili.com/v/cinephile/',
      title: '影视',
      newUploaded: Math.floor(Math.random() * 10000),
      popover: 'van-popover-9938',
      subChannels: {
        width: '84',
        channels: [{
          link: '//www.bilibili.com/v/cinephile/cinecism/',
          title: '影视杂谈'
        },
        {
          link: '//www.bilibili.com/v/cinephile/montage/',
          title: '影视剪辑'
        },
        {
          link: '//www.bilibili.com/v/cinephile/shortfilm/',
          title: '短片'
        },
        {
          link: '//www.bilibili.com/v/cinephile/trailer_info/',
          title: '预告·资讯'
        }]
      }
    },
    {
      link: 'https://www.bilibili.com/cinema/',
      title: '放映厅',
      newUploaded: 297,
      popover: 'van-popover-3821',
      subChannels: {
        width: '68',
        channels: [{
          link: '//www.bilibili.com/documentary/',
          title: '纪录片'
        },
        {
          link: '//www.bilibili.com/movie/',
          title: '电影'
        },
        {
          link: '//www.bilibili.com/tv/',
          title: '电视剧'
        }]
      }
    },
    {
      link: 'https://www.bilibili.com/v/life/funny',
      title: '搞笑',
      newUploaded: Math.floor(Math.random() * 10000),
      popover: 'van-popover-4028',
      subChannels: {
        width: '0',
        channels: []
      }
    },
    {
      link: 'https://www.bilibili.com/v/life/animal',
      title: '动物圈',
      newUploaded: Math.floor(Math.random() * 10000),
      popover: 'van-popover-1803',
      subChannels: {
        width: '0',
        channels: []
      }
    },
    {
      link: 'https://www.bilibili.com/v/life/food',
      title: '美食圈',
      newUploaded: Math.floor(Math.random() * 10000),
      popover: 'van-popover-4870',
      subChannels: {
        width: '0',
        channels: []
      }
    },
    {
      link: 'https://www.bilibili.com/v/game/stand_alone',
      title: '单机游戏',
      newUploaded: Math.floor(Math.random() * 10000),
      popover: 'van-popover-4959',
      subChannels: {
        width: '0',
        channels: []
      }
    },
    {
      link: 'https://www.bilibili.com/v/life/daily/#/530003',
      title: 'VLOG',
      newUploaded: '',
      popover: 'van-popover-3620',
      subChannels: {
        width: '0',
        channels: []
      }
    }],
    shrinkChannels: null
  },
  getters: {
    channels: s => (shrink) => {
      if (shrink && s.shrinkChannels) return s.shrinkChannels
      if (!shrink) return s.channels
      // 去掉最后5个
      s.shrinkChannels = s.channels.filter((_, index, arr) => arr.length - index > 5)
      return s.shrinkChannels
    }
  }
}
