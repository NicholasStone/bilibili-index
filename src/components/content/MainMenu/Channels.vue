<template>
  <div class="channel">
    <channel-item
      v-for="channel in channels"
      :key="channel.title"
      :channel="channel" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import ChannelItem from './Channels/ChannelItem'

export default {
  name: 'Channels',
  components: {
    ChannelItem
  },
  computed: {
    ...mapGetters('channels', ['channels'])
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
