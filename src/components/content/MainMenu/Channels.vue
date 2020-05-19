<template>
  <div class="channel" ref="channel-container">
    <channel-item
      v-for="(channel, index) in channels"
      :key="channel.title"
      :placement="index % 2 ? 'bottom' : 'top'"
      :channel="channel" />
    <channel-item
      v-if="shrank"
      :channel="moreChannels"
      :placement="bottom" >
      更多 <i class="bilifont bili-icon_caozuo_xiangyou-copy"></i>
    </channel-item>
  </div>
</template>

<script>
import ChannelItem from './Channels/ChannelItem'
import ResizeObserver from 'resize-observer-polyfill'

export default {
  name: 'Channels',
  components: {
    ChannelItem
  },
  data () {
    return {
      shrank: false
    }
  },
  computed: {
    channels () {
      const channelList = this.$store.getters['channels/channels']
      return channelList(this.shrank)
    },
    moreChannels () {
      return {
        link: '',
        title: '更多',
        newUploaded: '',
        subChannels: {
          width: 160,
          channels: [
            { title: '搞笑', link: 'https://www.bilibili.com/v/life/funny' },
            { title: '动物圈', link: 'https://www.bilibili.com/v/life/animal' },
            { title: '美食圈', link: 'https://www.bilibili.com/v/life/food' },
            { title: '单机游戏', link: 'https://www.bilibili.com/v/game/stand_alone' },
            { title: 'VLOG', link: 'https://www.bilibili.com/v/life/daily/#/530003' }
          ]
        }
      }
    }
  },
  mounted () {
    new ResizeObserver(entries => {
      this.shrank = entries[0].contentRect.width < 740
      console.log(entries[0].contentRect.width)
    }).observe(this.$el)
  }
}
</script>

<style lang="less" scoped>
.channel {
  .blocking(auto, 68px, flex);
  .flexing(wrap, space-between, space-between, space-between, column);
  flex: 1;
}
</style>
