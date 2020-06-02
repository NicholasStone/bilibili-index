<template>
<div class="side-view">
  <header class="side-view__title">
    <slot name="title">
      排行榜
      <a href="#" class="side-view__title-btn">
        更多<i class="bilifont bili-icon_caozuo_qianwang"></i>
      </a>
    </slot>
  </header>
  <main class="side-view__ranking">
    <slot>
      <top-work
        class="side-view--wrap"
        v-for="(video, i) in rank"
        :key="video.bvid"
        :index="i + 1"
        :show-cover="i === 0"
        :video="video" />
    </slot>
  </main>
</div>
</template>
<script>
import TopWork from 'Index/components/ContentSection/SideView/TopWorks'
import request from 'Network/request'
import { getRid } from 'Network/api'
export default {
  name: 'SideView',
  components: { TopWork },
  props: {
    sectionName: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      rank: []
    }
  },
  methods: {
    async fetchSectionRank () {
      const r = await request('video.index.section_ranking', { params: { rid: getRid(this.sectionName), day: 3, original: 0 } })
      this.rank = Object.values(r).slice(0, 10)
    }
  },
  mounted () {
    this.fetchSectionRank()
  }
}
</script>
<style lang="less" scoped>
.side-view {
  .blocking(320px, 100%);
  background-color: #fff;
  @media screen and (max-width: @screen-wide-micro) {
    width: 265px;
  }

  &__title {
    .blocking(100%, 36px, flex);
    align-items: center;
    justify-content: space-between;
    font-size: 20px;
    line-height: 36px;
    margin-bottom: 16px;

    &-btn {
      .blocking(auto, 22px, flex);
      padding: 0 7px 0 12px;
      justify-content: center;
      align-items: center;
      background-color: #fff;
      border: 1px solid silver;
      border-radius: 2px;
      text-align: center;
      font-size: @font-size-small;
      color:#505050;
    }
  }

  &--wrap {
    @media screen and (max-width: @screen-wide-micro) {
      &:nth-child(n+9){
        display: none;
      }
    }
  }
}
</style>
