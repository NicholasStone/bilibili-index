<template>
  <div class="content-section" :id="id" :ref="id">
    <div class="card-view">
      <header class="card-view__header">
        <div class="card-view__header-left">
          <a href="#" target="_blank" class="card-view__header-text">
            <svg-icon v-if="section.icon" :icon="section.icon" :width="36"/>
            {{section.title}}
          </a>
          <div class="card-view__header-tabs">
            <slot name="card-header-subs"></slot>
          </div>
        </div>
        <div class="card-view__header-options">
          <slot name="card-options">
            <button class="card-view__header-btn card-view__header-btn--reload" @click="fetchSectionData(cardConfig, 'cards')">
              <i :class="['bilifont', 'bili-icon_caozuo_huanyihuan', {'loading': loading}]"></i>换一换
            </button>
            <a href="#" target="_blank" class="card-view__header-more card-view__header-btn">
              更多<i class="bilifont bili-icon_caozuo_qianwang"></i>
            </a>
          </slot>
        </div>
      </header>
      <main class="card-view__panel list-box">
        <slot name="card-content">
          <video-card
            class="card-view__panel--response"
            v-for="card in cards"
            :hide-up="hideUp"
            :key="card.bvid"
            :video="card"/>
        </slot>
      </main>
    </div>
    <div class="side-view">
      <header class="side-view__header">
        <template v-if="sideTitle">{{sideTitle}}</template>
        <template v-else>
          <div class="side-view__header-title"><span style="margin-right: 12px">排行榜</span><slot name="side-header-subs"></slot></div>
          <a href="#" class="side-view__header-btn">
            更多<i class="bilifont bili-icon_caozuo_qianwang"></i>
          </a>
        </template>
      </header>
      <main class="side-view__content list-box">
        <slot name="side-content">
          <template v-if="sideComponent">
            <component :is="sideComponent" v-bind="rankComponentProps"/>
          </template>
          <template v-else>
            <top-works
              class="side-view--wrap"
              v-for="(video, i) in side"
              :key="video.title"
              :index="i + 1"
              :show-cover="i === 0"
              :video="video"/>
          </template>
        </slot>
      </main>
    </div>
  </div>
</template>
<script>
import CardView from 'Index/components/ContentSection/CardView'
import SideView from 'Index/components/ContentSection/SideView'
import TopWorks from 'Index/components/ContentSection/SideView/TopWorks'
import VideoCard from 'Index/components/ContentSection/CardView/VideoCard'

import request from 'Network/request'
import { addIntersectionListener, unObserve } from 'Utils/handle-intersect'
import { generateSectionId } from 'Utils/utils'
import { getRid } from 'Network/api'
import { debounce } from 'lodash'

export default {
  name: 'ContentSection',
  props: {
    section: {
      type: Object,
      required: true
    },
    fetchCardData: {
      type: Boolean,
      default: true
    },
    fetchSideData: {
      type: Boolean,
      default: true
    },
    hideUp: {
      type: Boolean,
      default: false
    }
  },
  components: { SideView, CardView, TopWorks, VideoCard },
  data () {
    return {
      loading: false,
      side: [],
      cards: [],
      sideConfig: this.section && this.section.side,
      cardConfig: this.section && this.section.cards,
      default_config: {
        cards: {
          api: 'video.index.section_cards',
          params: { rid: getRid(this.section.name), ps: 12 }
        },
        side: {
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
    sideTitle () {
      return this.sideConfig && this.sideConfig.title
    },
    sideComponent () {
      return this.sideConfig && this.sideConfig.component
    },
    rankComponentProps () {
      const configProps = this.sideConfig && this.sideConfig.props
      return {
        ...configProps,
        ...this.side
      }
    },
    id () {
      return generateSectionId(this.sectionName)
    }
  },
  methods: {
    async fetchSectionData (config, section) {
      const options = config && config.options ? config.options : this.default_config[section]
      const debounceReload = debounce(() => { this.loading = !this.loading }, 300)
      this[section] = await request(options, debounceReload, debounceReload)
    },
    loadContent () {
      if (this.fetchCardData) this.fetchSectionData(this.cardConfig, 'cards')
      // 在没有指定特殊 component 和 允许请求数据的情况下可以请求数据，即!this.sideComponent 与 this.fetchSideData 同时为 true
      if (!this.sideComponent && this.fetchSideData) {
        this.fetchSectionData(this.sideConfig, 'side')
      }
    },
    lazyLoad ({ isIntersecting }) {
      isIntersecting && console.log(`load ${this.id}`)
      if (isIntersecting && !this.cards.length) this.loadContent()
    }
  },
  mounted () {
    addIntersectionListener(this.$refs[this.id], this.lazyLoad)
  },
  beforeDestroy () {
    unObserve(this.$refs[this.id])
  }
}
</script>
<style lang="less" scoped>
.content-section {
  display: flex;
  justify-content: space-between;
  min-width: 999px;
  margin-bottom: 40px;

  .list-box {
    height: 404px;
  }
}
@keyframes rotating {
  from {
    transform: rotate(0);
  }
  50% {
    transform: rotate(-180deg);
  }
  to {
    transform: rotate(-360deg);
  }
}
.loading {
  animation: 1s linear rotating infinite;
}
.card-view {
  width: 1286px;
  background-color: #fff;
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
  &__header {
    .blocking(100%, 36px, flex);
    align-items: center;
    justify-content: space-between;
    font-size: 20px;
    line-height: 36px;
    margin-bottom: 16px;

    &-icon {
      margin-right: 6px;
    }

    &-left {
      .blocking(auto, 100%, flex);
    }

    &-text {
      margin-right: 20px;
    }

    &-tabs {
      font-size: @font-size-normal;
      font-weight: 500;
    }

    &-btn {
      .blocking(auto, 22px, flex);
      padding: 0 7px;
      justify-content: center;
      align-items: center;
      background-color: #fff;
      border: 1px solid silver;
      border-radius: 2px;
      text-align: center;
      font-size: @font-size-small;
      color:#505050;
      min-width: 52px;
      &--reload{
        i.bilifont {
          transition: transform ease 500ms;
        }
        &:hover > i.bilifont{
          transform: rotate(-360deg);
        }
      }
    }

    &-options {
      .blocking(auto, 22px, flex);
    }

    &-more {
      margin-left: 12px;
    }
  }

  &__panel {
    .blocking(100%, 100%, flex);
    .flexing(wrap, space-between, space-between, space-between);
    overflow-y: auto;

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
}
.side-view {
  .blocking(320px, 100%);
  background-color: #fff;
  @media screen and (max-width: @screen-size-micro) {
    width: 265px;
  }

  &__header {
    .blocking(100%, 36px, flex);
    align-items: center;
    justify-content: space-between;
    font-size: 20px;
    line-height: 36px;
    margin-bottom: 16px;

    &-title {
      display: flex;
    }

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

  &__content {
    .blocking(100%, 100%);
  }

  &--wrap {
    @media screen and (max-width: @screen-size-micro) {
      &:nth-child(n+9) {
        display: none;
      }
    }
  }
}

</style>
