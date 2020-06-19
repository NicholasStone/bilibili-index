<template>
<content-section class="manga" :section="options" :fetch-card-data="false" :fetch-side-data="false">
  <template v-slot:card-header-subs>
    <ul class="card-tabs">
      <li
        v-for="tab in cards.tabs"
        :key="tab.index"
        :class="['card-tabs__item', {'card-tabs__item--on': cards.showing === tab.index}]"
        @click="cards.showing = tab.index">
        {{ tab.name }}
      </li>
      <li class="card-tabs__item hover-text-blue">
        <a href="https://manga.bilibili.com/app-download?from=manga_homepage&spm_id_from=333.851.b_62696c695f7265706f72745f6d616e6761.2">下载APP</a>
        <num-bubble class="bubble"><span style="font-size: 12px">领券免费看</span></num-bubble>
      </li>
    </ul>
  </template>
  <template v-slot:card-content>
    <manga-card
      class="card-item"
      v-for="card in cards[cards.showing]"
      :key="card.title"
      v-bind="card"/>
  </template>
  <template v-slot:side-header-subs>
    <ul class="card-tabs">
      <li
        v-for="tab in list.tabs"
        :key="tab.index"
        :class="['card-tabs__item', {'card-tabs__item--on': list.showing === tab.index}]"
        @click="list.showing = tab.index">
        {{ tab.name }}
      </li>
    </ul>
  </template>
  <template v-slot:side-content>
    <top-comic
      class="comic"
      v-for="(comic, i) in list[list.showing]"
      :key="comic.title"
      :comic="comic"
      :index="i"/>
  </template>
</content-section>
</template>
<script>
import ContentSection from 'Index/components/ContentSection'
import request from 'Network/request'
import { MANGA } from 'Index/config/section'
import NumBubble from 'Components/common/NumBubble/NumBubble'
import MangaCard from 'Index/components/ContentSection/CardView/MangaCard'
import TopComic from 'Index/components/ContentSection/SideView/TopComic'

export default {
  name: 'Manga',
  components: { TopComic, MangaCard, NumBubble, ContentSection },
  data () {
    return {
      cards: {
        showing: 'recommend',
        recommend: [],
        free: [],
        tabs: [
          { name: '人气推荐', index: 'recommend' },
          { name: '免费漫画推荐', index: 'free' }
        ]
      },
      list: {
        showing: 'monthly',
        monthly: [],
        support: [],
        soar: [],
        tabs: [
          { name: '月票', index: 'monthly' },
          { name: '应援', index: 'support' },
          { name: '飙升', index: 'soar' }
        ]
      },
      options: {
        name: MANGA,
        icon: MANGA,
        title: '漫画'
      }
    }
  },
  methods: {
    async fetchRecommend () {
      this.cards.recommend = await request({ api: 'manga.index.recommend_card', data: { type: 1, page_size: 12, page_num: 1 } })
    },
    async fetchFree () {
      this.cards.free = await request({ api: 'manga.index.home_hot', data: { type: 1 } })
    },
    async fetchMonthly () {
      this.list.monthly = await request({ api: 'manga.index.home_fans', data: { type: 1, last_month_offset: 0 } })
    },
    async fetchSupport () {
      this.list.support = await request({ api: 'manga.index.home_fans', data: { last_month_offset: 0 } })
    },
    async fetchSoar () {
      this.list.soar = await request({ api: 'manga.index.home_hot', data: { type: 2 } })
    }
  },
  watch: {
    'cards.showing' (val) {
      if (val === 'free' && !this.cards.free.length) this.fetchFree()
    },
    'list.showing' (val) {
      const { support, soar } = this.list
      if (val === 'support' && !support.length) this.fetchSupport()
      if (val === 'soar' && !soar.length) this.fetchSoar()
    }
  },
  mounted () {
    this.fetchRecommend()
    this.fetchMonthly()
  }
}
</script>
<style lang="less" scoped>
.card-tabs__item {
  font-size: @font-size-small;
  margin-right: 12px;
}
.card-item {
  transition: all .2s;
  &:hover {
    color: @bilibili-blue;
  }
  @media screen {
    @media (max-width: @screen-size-micro) {
      &:nth-child(n+9) {
        display: none;
      }
    }
    @media (max-width: @screen-size-wide) {
      &:nth-child(n+11) {
        display: none;
      }
    }
  }

}
.bubble {
  position: absolute;
  width: 72px;
  top: -10px;
  right: -54px;
}
.comic {
  @media screen and (max-width: @screen-size-middle) {
    &:nth-child(n+13) {
      display: none;
    }
  }
}
</style>
<style type="text/css">
.manga .list-box {
  height: auto !important;
}
</style>
