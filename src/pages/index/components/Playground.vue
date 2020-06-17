<template>
  <div class="playground">
    <div class="content wrap">
      <manga-card v-bind="comics"/>
    </div>
  </div>
</template>
<script>
import MangaCard from 'Index/components/ContentSection/CardView/MangaCard'
import request from 'Network/request'
export default {
  name: 'Playground',
  // eslint-disable-next-line
  components: { MangaCard },
  data () {
    return {
      comics: null
    }
  },
  computed: {},
  methods: {
    async fetchMangaData () {
      this.comics = (await request({ api: 'manga.index.recommend_card', data: { type: 1, page_size: 12, page_num: 1 } }))[0]
    }
  },
  mounted () {
    this.fetchMangaData()
  }
}
</script>
<style lang="less" scoped>
.playground {
  position: relative;
  width: auto;
  height: 100%;
  background: @color-white;
  // margin-top: 300px;
  .content {
    // background-color: @color-light-gray;
    height: 100%;
    position: relative;
    li {
      width:50px;
      height:30px;
      line-height: 30px;
      text-align: center;
      border: 1px solid gray;
      background-color: #fff;
    }
  }
}
</style>
