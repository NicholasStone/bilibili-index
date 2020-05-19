<template>
<div class="channel-item"
     @mouseenter="handleMouseEnter"
     @mouseleave="handleMouseLeave">
  <a
    class="channel-item__link hover-text-blue"
    :href="channel.link">
    <span class="channel-item__link-title" v-popover:[reference]>
      <slot>{{channel.title}}</slot>
    </span>
    <span class="channel-item__link-count" v-if="channel.newUploaded">{{channel.newUploaded | formatUpload}}</span>
  </a>
  <popover
    v-if="channel.subChannels.channels.length"
    v-bind="$attrs"
    :ref="reference"
    :active="active"
    :placement="placement"
    :distance="10"
    :skidding="55">
    <div class="channel-item__sub" :style="{width: channel.subChannels.width + 'px'}">
      <a
        class="channel-item__sub-title hover-text-blue"
        v-for="sub in channel.subChannels.channels"
        :href="sub.link"
        :key="sub.title">
        {{sub.title}}
      </a>
    </div>
  </popover>
</div>
</template>

<script>
import Popover from 'Components/common/Popover'
import { generateId } from 'Utils/popover'

export default {
  name: 'ChannelItem',
  props: {
    channel: Object,
    index: Number,
    placement: String
  },
  components: {
    Popover
  },
  data () {
    return {
      active: false,
      reference: `channel-ref-${generateId()}`
    }
  },
  methods: {
    handleMouseEnter () {
      this.active = true
    },
    handleMouseLeave () {
      this.active = false
    }
  },
  filters: {
    formatUpload (val) {
      if (val <= 999) return val
      else if (val > 999) return '999+'
      return ''
    }
  }
}
</script>

<style lang="less" scoped>
  .channel-item{
    .blocking(auto, 34px, flex);
    align-items: center;
    position: relative;

    &__link{
      .blocking(auto, auto, flex);
      align-items: center;

      &-title {
        display: inline-block;
      }

      &-count {
        .blocking(32px, auto, inline-block);
        margin-left: 1px;
        border-radius: 2px;
        transform: scale(.85);
        background: #73c9e5;
        text-align: center;
        font-size: @font-size-small;
        color: @color-white;
      }
    }

    &__sub {
      .blocking(auto, auto, flex);
      .flexing(wrap, flex-start, flex-start, flex-start, column);
      max-height: 148px;
      &-title {
        display: block;
        height: 37px;
        width: auto;
        padding: 10px 13px;
        font-size: @font-size-small;
        text-align: left;
        color: @color-text;
      }
    }
  }
</style>
