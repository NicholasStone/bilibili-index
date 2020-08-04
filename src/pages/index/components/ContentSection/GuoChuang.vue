<template>
<div>
  <content-section class="anime" :section="timelineConfig" :fetch-card-data="false" :fetch-side-data="false" card-scroll>
    <template v-slot:card-options>
      <a class="bangumi-timeline-entry" href="https://www.bilibili.com/anime/timeline/" target="_blank">新番时间表<i class="bilifont bili-icon_caozuo_qianwang"></i></a>
    </template>
    <template v-slot:card-header-subs>
      <ul class="card-tabs">
        <li
          v-for="{name, index} in tabs"
          :class="['card-tabs__item', {'card-tabs__item--on': showing === index}]"
          :key="name"
          @click="showing = index">
          {{name}}
        </li>
      </ul>
    </template>
    <template v-slot:card-content>
      <div :class="['card-content', {nodata: !renderingCards.length}]">
        <timeline-card
          v-for="anime in renderingCards"
          :key="anime.episode_id"
          :anime="anime"/>
      </div>
    </template>
    <template v-slot:side-content>
      <top-work
        class="side-view--wrap"
        v-for="(video, i) in timelineSide"
        :key="video.title"
        :index="i + 1"
        :show-cover="i === 0"
        :video="video"/>
      <carousel-screen :content="slides" style="height: 110px"/>
    </template>
  </content-section>
  <content-section :section="dynamic" />
</div>
</template>
<script>
import request from 'Network/request'
import TimelineCard from 'Index/components/ContentSection/CardView/TimelineCard'
import ContentSection from 'Index/components/ContentSection'
import CarouselScreen from 'Index/components/Recommendation/CarouselScreen'
import { GUOCHUANG, GUOCHUANG_RELATED } from 'Index/config/section'
import TopWork from 'Index/components/ContentSection/SideView/TopWorks'

export default {
  name: 'GuoChuang',
  components: { TopWork, CarouselScreen, TimelineCard, ContentSection },
  data () {
    return {
      timelineConfig: {
        name: GUOCHUANG,
        title: '国创',
        icon: GUOCHUANG
      },
      timeline: [],
      showing: 0,
      tabs: [
        { name: '最新', index: 0 },
        { name: '周一', index: 1 },
        { name: '周二', index: 2 },
        { name: '周三', index: 3 },
        { name: '周四', index: 4 },
        { name: '周五', index: 5 },
        { name: '周六', index: 6 },
        { name: '周日', index: 7 }
      ],
      dynamic: {
        name: GUOCHUANG_RELATED,
        title: '国产原创相关'
      },
      slides: [],
      timelineSide: []
    }
  },
  computed: {
    renderingCards () {
      if (!this.timeline.length) return []
      return this.timeline[this.showing].episodes
    }
  },
  methods: {
    async fetchTimeline () {
      this.timeline = await request({ api: 'video.index.anime_timeline', params: { season_type: 4 } })
    },
    async fetchSlideShow () {
      this.slides = await request({ api: 'video.index.slide_show', params: { position_id: 101 } })
    },
    async fetchTimelineSide () {
      const side = await request({ api: 'video.index.publication_ranking', params: { season_type: 4, day: 3 } })
      this.timelineSide = side.slice(0, 7)
    }
  },
  mounted () {
    this.fetchTimelineSide()
    this.fetchTimeline()
    this.fetchSlideShow()
  }
}
</script>
<style lang="less" scoped>
.bangumi-timeline-entry {
  .blocking(112px, 30px);
  border: 1px solid @bilibili-blue;
  border-radius: 2px;
  color: @bilibili-blue;
  line-height: 30px;
  text-align: center;
  font-size: 14px;
  font-weight: normal;
  transition: all .2s;
  &:hover {
    background: @bilibili-blue;
    color: @color-white;
  }
}

.card-content {
  .blocking(100%, 100%, flex);
  .flexing(wrap, flex-start, flex-start, flex-start);
}
.anime {
  margin-bottom: 40px;
}
</style>
