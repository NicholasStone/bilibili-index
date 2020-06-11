<template>
  <div class="wrap content-section" :id="id">
    <div class="section__card-view">
      <card-view :section-name="sectionName">
        <template slot="card-title">
          <svg-icon :icon="section.icon" :width="36"/>
          {{section.title}}
        </template>
        <video-card
          class="section__card-view--response"
          v-for="card in cards"
          :key="card.bvid"
          :video="card"/>
      </card-view>
    </div>
    <div class="section__side-view">
      <side-view :section-name="sectionName">
        <template v-slot:title>
          <span v-if="rankTitle">{{rankTitle}}</span>
        </template>
        <template v-if="rankComponent">
          <component :is="rankComponent" v-bind="rankComponentProps"/>
        </template>
        <template v-else>
        <top-works
          class="side-view--wrap"
          v-for="(video, i) in ranks"
          :key="video.title"
          :index="i + 1"
          :show-cover="i === 0"
          :video="video"/>
        </template>
      </side-view>
    </div>
  </div>
</template>
<script>
import CardView from 'Index/components/ContentSection/CardView'
import SideView from 'Index/components/ContentSection/SideView'
import TopWorks from 'Index/components/ContentSection/SideView/TopWorks'
import VideoCard from 'Index/components/ContentSection/CardView/VideoCard'

import request from 'Network/request'
import { generateSectionId } from 'Utils/utils'
import { getRid } from 'Network/api'
export default {
  name: 'ContentSection',
  props: {
    section: {
      type: Object,
      required: true
    }
  },
  components: { SideView, CardView, TopWorks, VideoCard },
  data () {
    return {
      ranks: [],
      cards: [],
      rankConfig: this.section && this.section.ranks,
      cardConfig: this.section && this.section.cards,
      default_config: {
        cards: {
          api: 'video.index.section_cards',
          params: { rid: getRid(this.section.name), ps: 12 }
        },
        ranks: {
          api: 'video.index.section_ranking',
          params: { rid: getRid(this.section.name), day: 3, original: 0 }
        }
      }
    }
  },
  computed: {
    sectionName () {
      return this.section.name
    },
    renderingCards () {
      return this.cards.slice(0, 8)
    },
    rankTitle () {
      return this.rankConfig && this.rankConfig.title
    },
    rankComponent () {
      return this.rankConfig && this.rankConfig.component
    },
    rankComponentProps () {
      return this.rankConfig && this.rankConfig.props
    },
    id () {
      return generateSectionId(this.sectionName)
    }
  },
  methods: {
    handleCardData: ({ archives }) => archives,
    handleRankData: data => Object.values(data).slice(0, 10),
    async fetchSectionData (config, section, handler) {
      const options = config && config.options ? config.options : this.default_config[section]
      // const adapter = options && options.adapter ? options.adapter : handler
      // const response = await request(options)
      // this[section] = adapter(response)
      this[section] = await request(options)
    }
  },
  mounted () {
    this.fetchSectionData(this.cardConfig, 'cards', this.handleCardData)
    if (!this.rankComponent) this.fetchSectionData(this.rankConfig, 'ranks', this.handleRankData)
  }
}
</script>
<style lang="less" scoped>
  .content-section {
    display: flex;
    justify-content: space-between;
  }

  .section__card-view {
    width: 1286px;
    @media screen {
      @media (max-width: @screen-size-wide) {
        width: 1070px;
      }
      @media (max-width: @screen-size-middle) {
        width: 854px;
      }
      @media (max-width: @screen-size-micro) {
        width: 710px;
      }
    }

    &--response {
      @media screen {
        @media (max-width: @screen-size-wide) {
          &:nth-child(n+11) {
            display: none;
          }
        }
        @media (max-width: @screen-size-middle) {
          &:nth-child(n+9) {
            display: none;
          }
        }
      }
    }
  }
</style>
