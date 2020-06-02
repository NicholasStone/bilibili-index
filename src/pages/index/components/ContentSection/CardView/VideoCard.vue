<template>
<div class="video-card">
  <a href="#" class="video-card__video">
    <video-preview :video="video" />
  </a>
  <a class="video-card__title hover-text-blue" :title="title">{{title}}</a>
  <a class="video-card__up hover-text-blue">
    <i class="bilifont bili-icon_xinxi_UPzhu"></i>
    {{up}}
  </a>
</div>
</template>
<script>
import VideoPreview from 'Components/common/VideoPreview/VideoPreview'
export default {
  name: 'VideoCard',
  props: {
    video: {
      type: Object,
      require: true
    }
  },
  components: {
    VideoPreview
  },
  computed: {
    bvid () {
      return this.video.bvid
    },
    aid () {
      return this.video.aid
    },
    title () {
      return this.video.title
    },
    up () {
      return this.video.owner.name
    },
    cover () {
      return this.video.pic
    },
    state () {
      return this.video.stat
    }
  }
}
</script>
<style lang="less" scoped>
.video-card {
  width: 206px;
  @media screen and (max-width: @screen-wide-micro) {
    width: 170px;
  }
  &__video {
    .blocking(100%, 116px);
    @media screen and (max-width: @screen-wide-micro) {
      height: 96px;
    }
  }
  &__title {
    .blocking(100%, 40px, -webkit-box);
    font-size: @font-size-normal;
    line-height: 20px;
    margin: 10px 0 8px;
    padding-right: 12px;
    font-weight: 500;
    .line-breaking(2);
  }
  &__up {
    .blocking(100%, auto);
    font-size: @font-size-small;
    color: @color-deep-gray;
    line-height: 16px;
  }
}
</style>
