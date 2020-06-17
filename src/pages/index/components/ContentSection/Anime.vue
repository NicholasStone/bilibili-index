<template>
<div class="anime">
  <content-section :section="timelineConfig" :fetch-card-data="false" card-scroll>
    <template v-slot:card-options>
      <a class="bangumi-timeline-entry" href="https://www.bilibili.com/anime/timeline/" target="_blank">新番时间表<i class="bilifont bili-icon_caozuo_qianwang"></i></a>
    </template>
    <template v-slot:card-tabs>
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
      <div class="card-content">
        <timeline-card
          v-for="anime in renderingCards"
          :key="anime.title"
          :anime="anime"/>
      </div>
    </template>
  </content-section>
  <content-section :section="dynamic" :fetch-rank-data="false" hide-up>
    <template v-slot:side-content>
      <carousel-screen :content="slides" class="anime-slide" />
    </template>
  </content-section>
</div>
</template>
<script>
import request from 'Network/request'
import TimelineCard from 'Index/components/ContentSection/CardView/TimelineCard'
import ContentSection from 'Index/components/ContentSection'
import CarouselScreen from 'Index/components/Recommendation/CarouselScreen'
import { ANIME } from 'Index/config/section'

export default {
  name: 'Anime',
  components: { CarouselScreen, TimelineCard, ContentSection },
  data () {
    return {
      timelineConfig: {
        name: 'anime-timeline',
        title: '动漫',
        icon: ANIME,
        side: {
          options: {
            api: 'video.index.publication_ranking',
            params: {
              season_type: 1,
              day: 3
            }
          }
        }
      },
      timeline: null,
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
        name: ANIME,
        title: '番剧动态'
      },
      slides: []
    }
  },
  computed: {
    renderingCards () {
      if (!this.timeline) return
      return this.timeline[this.showing].episodes
    }
  },
  methods: {
    async fetchTimeline () {
      this.timeline = await request({ api: 'video.index.anime_timeline', params: { season_type: 1 } })
    },
    async fetchSlideShow () {
      this.slides = await request({ api: 'video.index.slide_show', params: { position_id: 104 } })
    }
  },
  mounted () {
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

  .card-tabs {
    display: flex;
    margin-left: 4px;
    &__item {
      .blocking(28px, 30px);
      margin-right: 24px;
      line-height: 30px;
      cursor: pointer;

      &--on {
        color: @bilibili-blue;
        border-bottom: 1px solid @bilibili-blue;
      }
    }
  }

  .anime-slide {
    height: 312px;
    @media screen and (max-width: @screen-size-micro) {
      height: 274px;
    }
  }

  .card-content {
    .blocking(100%, 100%, flex);
    .flexing(wrap, flex-start, flex-start, flex-start);
  }
</style>
<style lang="less">
  .anime .list-box {
    height: 376px !important;
    @media screen and (max-width: @screen-size-micro) {
      height: 332px !important;
    }
  }
</style>
