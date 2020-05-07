<template>
  <div class="comic-frame clear-fix">
    <div class="hot-comics">
      <a class="comic" v-for="{name, link, cover} in hotComics" :key="name" :href="link">
        <img class="comic-cover" :src="cover">
        <span class="comic-name">{{ name }}</span>
      </a>
    </div>
    <div class="popular-list">
      <h3 class="title">人气漫画</h3>
      <a class="list-item"
        v-for="({link, title}, index) in comicList"
        :key="title"
        :href="link"
        @mouseenter="showItemComicCover(index)"
        @mouseleave="hideItemComicCover"
      >
        <span class="index">{{ index + 1 }}</span> {{ title }}
      </a>
    </div>
    <div class="popular-comic-cover" v-show="comicCover >= 0">
      <img :src="comicCoverSrc">
    </div>
  </div>
</template>

<script>
export default {
  name: 'comics',
  data () {
    return {
      hotComics: [
        {
          name: '刀剑神域 Alicization篇',
          cover: 'http://i0.hdslb.com/bfs/manga-static/86a3e7b7511587ef14372203db5b852ee30ee182.jpg@272w',
          link: 'https://manga.bilibili.com/detail/mc26566?refer_from=bili_main_nav'
        },
        {
          name: '仙王的日常生活',
          cover: 'http://i0.hdslb.com/bfs/manga-static/f8d219b09f4d89bf80fb7fef8264bf365a9352a0.jpg@272w',
          link: 'https://manga.bilibili.com/detail/mc27661?refer_from=bili_main_nav'
        },
        {
          name: '辉夜大小姐想让我告白 ~天才们的恋爱头脑战~',
          cover: 'http://i0.hdslb.com/bfs/manga-static/776908c7e5841b346db4fd0dba43c335d50c9638.png@272w',
          link: 'https://manga.bilibili.com/detail/mc26009?refer_from=bili_main_nav'
        },
        {
          name: '石之海（乔乔的奇妙冒险第6部）',
          cover: 'http://i0.hdslb.com/bfs/manga-static/d9ee84f8bab10116c9521d6344c520699a6968e1.jpg@272w',
          link: 'https://manga.bilibili.com/detail/mc25451?refer_from=bili_main_nav'
        }
      ],
      comicList: [
        {
          link: 'https://manga.bilibili.com/detail/mc26009?refer_from=bili_main_nav',
          title: '辉夜大小姐想让我告白~天才们的恋爱头脑战~',
          cover: 'https://i0.hdslb.com/bfs/manga-static/702828cfff2d0c71503a0f99539bef54f0993fd2.jpg@300w.jpg'
        },
        {
          link: 'https://manga.bilibili.com/detail/mc25940?refer_from=bili_main_nav',
          title: '反派初始化',
          cover: 'https://i0.hdslb.com/bfs/manga-static/cb67bb80adc5d9312289b8566172067bd48ac3c5.jpg@300w.jpg'
        },
        {
          link: 'https://manga.bilibili.com/detail/mc27491?refer_from=bili_main_nav',
          title: '我的守护女友',
          cover: 'https://i0.hdslb.com/bfs/manga-static/a3d41c30da4d438bc4e1dbe959c0f4cdd6d5df09.jpg@300w.jpg'
        },
        {
          link: 'https://manga.bilibili.com/detail/mc26769?refer_from=bili_main_nav',
          title: '天官赐福',
          cover: 'https://i0.hdslb.com/bfs/manga-static/1cecbe6033d31cc9a49f4c1df88258a0abf72e07.jpg@300w.jpg'
        },
        {
          link: 'https://manga.bilibili.com/detail/mc25717?refer_from=bili_main_nav',
          title: '鬼灭之刃',
          cover: 'https://i0.hdslb.com/bfs/manga-static/c937a55af0a114d4f57bfe266aba3e90fac6aaa2.jpg@300w.jpg'
        },
        {
          link: 'https://manga.bilibili.com/detail/mc26446?refer_from=bili_main_nav',
          title: '租借女友',
          cover: 'https://i0.hdslb.com/bfs/manga-static/7c4fb47298080963a56acf812e57072aa747bea4.jpg@300w.jpg'
        }
      ],
      comicCover: -1
    }
  },
  methods: {
    showItemComicCover (index) {
      this.comicCover = index
    },
    hideItemComicCover () {
      this.comicCover = -1
    }
  },
  computed: {
    comicCoverSrc () {
      if (this.comicCover < 0) return ''
      return this.comicList[this.comicCover].cover
    }
  }
}
</script>

<style lang="less" scoped>
.comic-frame {
  .blocking(520px, 260px, block);
  padding: 20px;
  color: @color-text;
  font-size: @font-size-small;

  .hot-comics {
    .blocking(313px, 220px, flex);
    float: left;
    padding-right: 20px;
    border-right: 1px solid #eaeaea;
    .flexing(wrap, space-between, space-between);

    .comic {
      .blocking(137px, 100px, block);
      .line-breaking();

      &-cover {
        .blocking(137px, 77px);
      }
    }
  }

  .popular-list {
    .blocking(167px, 220px);
    float: left;
    .title {
      font-size: 16px;
      padding-left: 20px;
      font-weight: normal;
    }

    .list-item {
      .blocking(100%, auto);
      .line-breaking();
      padding-left: 20px;
      line-height: 2.6;
      font-size: 13px;

      .index {
        .blocking(auto, auto, inline-block);
        margin-right: 10px;
        color: @color-brown;
      }
    }
  }

  .popular-comic-cover {
    .blocking(160px, 213px);
    .p-absoluting(8%, 95%);
    border-radius: 4px;
    box-shadow: 0 12px 24px -6px rgba(0, 0, 0, .3);
    background: center/contain no-repeat url("data:image/png;base64,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");

    img {
      .blocking(160px);
      border-radius: 4px;
    }
  }
}
</style>
