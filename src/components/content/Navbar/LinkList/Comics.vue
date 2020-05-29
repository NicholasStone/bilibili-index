<template>
  <div class="comic-frame clear-fix">
    <div class="hot-comics">
      <a class="comic" v-for="{name, link, cover} in manga.hotComics" :key="name" :href="link">
        <img class="comic-cover" :src="cover">
        <span class="comic-name">{{ name }}</span>
      </a>
    </div>
    <div class="popular-list">
      <h3 class="title">人气漫画</h3>
      <a class="list-item"
        v-for="({link, title}, index) in manga.comicList"
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
import { mapGetters } from 'vuex'
export default {
  name: 'comics',
  data () {
    return {
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
      return this.manga.comicList[this.comicCover].cover
    },
    ...mapGetters('navbar', ['manga'])
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

      &-name {
        color: @color-text;
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
