<template>
<a :href="link">
  <img :src="vertical_cover" :alt="title">
  <p>{{title}}</p>
  <p>{{styles}}</p>
</a>
</template>
<script>
export default {
  name: 'MangaCard',
  props: {
    comic_id: {
      type: Number
    },
    title: {
      type: String
    },
    styles: {
      type: Array
    },
    vertical_cover: {
      type: String
    }
  },
  computed: {
    link () {
      return `https://manga.bilibili.com/detail/mc${this.comic_id}`
    }
  }
}
</script>
<style scoped>
</style>
