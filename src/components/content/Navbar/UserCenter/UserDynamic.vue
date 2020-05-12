<template>
<dynamic @tabChanged="handleTabChange" :tabs="tabs">
  <dynamic-item v-for="item in videos" :key="item.bvid" :video="item" />
</dynamic>
</template>

<script>
import Dynamic from 'Components/common/Dynamic/Dynamic'
import DynamicItem from 'Components/common/Dynamic/DynamicItem'
import { mapGetters } from 'vuex'

export default {
  name: 'TimelineDialog',
  components: {
    Dynamic,
    DynamicItem
  },
  data () {
    return {
      currentTab: 0,
      tabs: [
        { text: '视频', active: '视频动态' },
        { text: '直播', active: '直播动态' },
        { text: '专栏', active: '专栏动态' }
      ]
    }
  },
  methods: {
    handleTabChange (index) {
      this.currentTab = index
    }
  },
  computed: {
    ...mapGetters('dynamic', [
      'videos'
    ])
  },
  created () {
    this.$store.dispatch('dynamic/getDynamic')
  }
}
</script>

<style lang="less" scoped>
.timeline-dialog {
  width: 370px;
  height: 518px;
  color: #000000;

  .tabbar {
    display: flex;
    height: 49px;
    box-shadow: 0 -1px 1px 1px rgba(0, 0, 0, 0.2);
    padding-left: 20px;
    justify-content: flex-start;
    align-items: center;

    .tabbar-item {
      margin-right: 24px;
      font-size: @font-size-small;
      line-height: 16px;
      color: #999999;
      transition: all ease .3s;

      &:hover {
        color: @bilibili-blue;
      }

      &.tabbar-item__active {
        background-color: @bilibili-blue;
        color: @color-white;
        padding: 4px 10px;
        border-radius: 12px;
        margin: 0 12px 0 -10px;
      }
    }
  }

  .content {
    padding-top: 12px;
    height: 469px;
    overflow-y: scroll;
  }
}
</style>
