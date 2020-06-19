<template>
<a class="manga-card" :href="link">
  <img class="manga-card__cover" :src="cover" :alt="title">
  <p class="manga-card__title">{{title}}</p>
  <p class="manga-card__tags">{{tags}}</p>
</a>
</template>
<script>
export default {
  name: 'MangaCard',
  props: {
    comic_id: Number,
    title: String,
    styles: Array,
    vertical_cover: String
  },
  computed: {
    link () {
      return `https://manga.bilibili.com/detail/mc${this.comic_id}`
    },
    cover () {
      return `${this.vertical_cover}@206w_275h_1c_90q.webp`
    },
    tags () {
      const tags = this.styles.map((item, index) => {
        if (index > 1) return
        if (typeof item === 'string') return item
        if (typeof item === 'object') return item.name
      })
      return tags.slice(0, 2).join(' ')
    }
  }
}
</script>
<style lang="less" scoped>
.manga-card {
  .blocking(206px, auto);
  margin-bottom: 24px;
  @media screen {
    @media (max-width: @screen-size-middle) {
      width: 162px;
      margin-bottom: 20px;
    }
    @media (max-width: @screen-size-micro) {
      width: 170px;
    }
  }
  &__cover {
    .blocking(100%, auto);
  }
  &__title {
    .blocking(100%, 19px);
    max-width: 206px;
    margin: 10px 0 8px;
    .line-breaking();
  }
  &__tags {
    font-size: @font-size-small;
    color: @color-deep-gray;
    line-height: 16px;
  }
}
</style>
