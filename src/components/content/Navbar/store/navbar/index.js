export default {
  namespaced: true,
  state: {
    message: {
      replys: 100,
      ats: 5,
      loves: 6,
      system: 10,
      whispers: 100
    },
    vip: [],
    live: {
      rooms: [
        {
          link: 'https://live.bilibili.com/21870601',
          avatar: '/cdn/bfs/face/c3b920d17f57a1ec12a5b24224107cc85af262f0.jpg@100w_100h.webp',
          name: '叶茂在线'
        },
        {
          link: 'https://live.bilibili.com/21548396',
          avatar: '/cdn/bfs/face/d5f4003b198542002aa2de8b549e2b8e85cda3bc.jpg@100w_100h.webp',
          name: '阿光爱画画'
        },
        {
          link: 'https://live.bilibili.com/11775380',
          avatar: '/cdn/bfs/face/2b7d3f342f51c0ec45f183e2be84abea9ac9c7a9.jpg@100w_100h.webp',
          name: '二次元绘画小妙屋'
        },
        {
          link: 'https://live.bilibili.com/74000?visit_id=azq51tsnrcc0target=_blank',
          avatar: '/cdn/bfs/face/2f305afae61c7d9272e0c352282b89a303c76770.jpg@100w_100h.webp',
          name: '爱吃肉的三水喵'
        },
        {
          link: 'https://live.bilibili.com/21394728',
          avatar: '/cdn/bfs/face/17b82fe7b2adcab81754827212305c6c433704e7.jpg@100w_100h.webp',
          name: 'ChanneLLean'
        },
        {
          link: 'https://live.bilibili.com/268679',
          avatar: '/cdn/bfs/face/75bce68d7ad89c551b2f661eeadf3ee89d16338f.jpg@100w_100h.webp',
          name: '琦妙-妙妙'
        }
      ],
      hotEvents: [
        {
          image: '/cdn/bfs/live/e9cf6b20810ac75447f99a7c00a423f135993100.jpg',
          link: 'https://www.bilibili.com/blackboard/live/activity--5R5611BG.html'
        },
        {
          image: '/cdn/bfs/live/96c21315d7a50a68e3bc96cd4ffe44c7b7b9d73b.jpg',
          link: 'https://www.bilibili.com/blackboard/live/activity-gyLzd_o3K.html'
        }
      ]
    },
    game: {
      banner: {
        image: '/cdn/bfs/game/c8c0bf20b13db63d2dd186bd7c3f5813b775c816.jpg',
        name: '公主连结Re:Dive',
        link: 'https://game.bilibili.com/pcr/chun/'
      },
      recommend: [
        { name: '命运-冠位指定（Fate/GO）', image: '/cdn/bfs/game/f7d4ee0877089e4079b8f0b4f5c95dd4ceba512a.png', link: 'https://game.bilibili.com/fgo/re_gudateito/' },
        { name: '碧蓝航线', image: '/cdn/bfs/game/abfe03ca09e2051e5edc2693499f5db4d72e0e79.png', link: 'https://game.bilibili.com/blhx/chdhx/' },
        { name: '双生视界', image: '/cdn/bfs/game/6afdae46521460c5faa39042932270c14befaf63.jpg', link: 'https://game.bilibili.com/sssj/' }
      ],
      newGames: [
        { name: '天地劫', image: '/cdn/bfs/game/7c1721d09185c060fda9219ae3cc4ccc561f7141.png', link: 'https://www.biligame.com/detail/?id=105019' },
        { name: '炸裂魔女', image: '/cdn/bfs/game/db7eee63a2e41790fdb98bc8047a45be54692e1b.png', link: 'https://www.biligame.com/detail/?id=103276' },
        { name: '风起长安', image: '/cdn/bfs/game/f6e94e5f30b81bf2a9f5eb102339cc02b95a0cea.png', link: 'https://www.biligame.com/detail/?id=105140' },
        { name: '群星守卫', image: '/cdn/bfs/game/9e9bfbc05e1862efa49ea8b35651b755181b3aa7.png', link: 'https://www.biligame.com/detail/?id=104882' },
        { name: '未定事件簿', image: '/cdn/bfs/game/558ecbc508c02f6607e224d3995b701082f9a565.png', link: 'https://www.biligame.com/detail/?id=103811' },
        { name: '四叶草剧场', image: '/cdn/bfs/game/6de80e09cbc3f321196098bb9ae52b65c78f2e33.png', link: 'https://www.biligame.com/detail/?id=103396' },
        { name: '魔法记录 魔法少女小圆外传', image: '/cdn/bfs/game/9943ddcc7be10195255dfc8df6194351b423e32b.png', link: 'https://game.bilibili.com/magireco/' }
      ]
    },
    manga: {
      hotComics: [
        {
          name: '刀剑神域 Alicization篇',
          cover: '/cdn/bfs/manga-static/86a3e7b7511587ef14372203db5b852ee30ee182.jpg@272w',
          link: 'https://manga.bilibili.com/detail/mc26566?refer_from=bili_main_nav'
        },
        {
          name: '仙王的日常生活',
          cover: '/cdn/bfs/manga-static/f8d219b09f4d89bf80fb7fef8264bf365a9352a0.jpg@272w',
          link: 'https://manga.bilibili.com/detail/mc27661?refer_from=bili_main_nav'
        },
        {
          name: '辉夜大小姐想让我告白 ~天才们的恋爱头脑战~',
          cover: '/cdn/bfs/manga-static/776908c7e5841b346db4fd0dba43c335d50c9638.png@272w',
          link: 'https://manga.bilibili.com/detail/mc26009?refer_from=bili_main_nav'
        },
        {
          name: '石之海（乔乔的奇妙冒险第6部）',
          cover: '/cdn/bfs/manga-static/d9ee84f8bab10116c9521d6344c520699a6968e1.jpg@272w',
          link: 'https://manga.bilibili.com/detail/mc25451?refer_from=bili_main_nav'
        }
      ],
      comicList: [
        {
          link: 'https://manga.bilibili.com/detail/mc26009?refer_from=bili_main_nav',
          title: '辉夜大小姐想让我告白~天才们的恋爱头脑战~',
          cover: '/cdn/bfs/manga-static/702828cfff2d0c71503a0f99539bef54f0993fd2.jpg@300w.jpg'
        },
        {
          link: 'https://manga.bilibili.com/detail/mc25940?refer_from=bili_main_nav',
          title: '反派初始化',
          cover: '/cdn/bfs/manga-static/cb67bb80adc5d9312289b8566172067bd48ac3c5.jpg@300w.jpg'
        },
        {
          link: 'https://manga.bilibili.com/detail/mc27491?refer_from=bili_main_nav',
          title: '我的守护女友',
          cover: '/cdn/bfs/manga-static/a3d41c30da4d438bc4e1dbe959c0f4cdd6d5df09.jpg@300w.jpg'
        },
        {
          link: 'https://manga.bilibili.com/detail/mc26769?refer_from=bili_main_nav',
          title: '天官赐福',
          cover: '/cdn/bfs/manga-static/1cecbe6033d31cc9a49f4c1df88258a0abf72e07.jpg@300w.jpg'
        },
        {
          link: 'https://manga.bilibili.com/detail/mc25717?refer_from=bili_main_nav',
          title: '鬼灭之刃',
          cover: '/cdn/bfs/manga-static/c937a55af0a114d4f57bfe266aba3e90fac6aaa2.jpg@300w.jpg'
        },
        {
          link: 'https://manga.bilibili.com/detail/mc26446?refer_from=bili_main_nav',
          title: '租借女友',
          cover: '/cdn/bfs/manga-static/7c4fb47298080963a56acf812e57072aa747bea4.jpg@300w.jpg'
        }
      ]
    },
    unreadDynamic: 200
  },
  getters: {
    message: s => s.message,
    vip: s => s.vip,
    live: s => s.live,
    game: s => s.game,
    manga: s => s.manga,
    unreadDynamic: s => s.unreadDynamic,
    unreadMessage: s => Object.values(s.message).reduce((c, p) => c + p)
  }
}
