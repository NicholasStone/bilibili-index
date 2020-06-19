<template>
  <div class="playground">
    <div class="content wrap">
      <manga/>
<!--      <top-comic :comic="comic[1]" :index="1" />-->
    </div>
  </div>
</template>
<script>
import Manga from 'Index/components/ContentSection/Manga'
import TopComic from 'Index/components/ContentSection/SideView/TopComic'
import request from 'Network/request'
export default {
  name: 'Playground',
  // eslint-disable-next-line
  components: {TopComic, Manga },
  data () {
    return {
      comic: null
    }
  },
  computed: {},
  methods: {

  },
  async mounted () {
    this.comic = await request({ api: 'manga.index.home_fans', data: { type: 1, last_month_offset: 0 } })
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
    margin-top: 50px;
    /*width: 265px;*/
    height: 100%;
    position: relative;
  }
}
</style>
