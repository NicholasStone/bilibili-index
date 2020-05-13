<template>
      <div class="channel-item">
      <a :href="link" class="channel-item__link hover-text-blue">
        <span class="channel-item__link-title">{{channel.title}}</span>
        <span class="channel-item__link-count">{{channel.upload}}</span>
      </a>
      <popout-dialog
        :show="true"
        :position="index % 2 ? 'bottom' : 'top'"
        :left-distance="0"
        :disable-transform="true"
        arrow-left-distance="10%"
        >
        <div class="channel-item__sub" :style="{width: channel.subChannels.width + 'px'}">
          <span
            class="channel-item__sub-title hover-text-blue"
            v-for="sub in channel.subChannels.channels"
            :key="sub.title">
            {{sub.title}}
          </span>
        </div>
      </popout-dialog>
    </div>
</template>

<script>
import PopoutDialog from 'Components/common/PopoutDialog'

export default {
  name: 'ChannelItem',
  props: {
    channel: Object
  },
  components: {
    PopoutDialog
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
      // display: none;
      // width: auto !important;
      &-title {
        .blocking(auto, 37px, inline-block);
        padding: 10px 13px;
      }
    }
  }
</style>
