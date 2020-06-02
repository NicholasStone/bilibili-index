<template>
<div class="video-view">
  <a href="" class="video">
    <video-preview :aid="aid" :cover="cover"></video-preview>
  </a>
  <a class="title hover-text-blue" :title="title">{{title}}</a>
  <a class="up hover-text-blue">
    <i class="bilifont bili-icon_xinxi_UPzhu"></i>
    {{up}}
  </a>
</div>
</template>
<script>
import VideoPreview from 'Components/common/VideoPreview/VideoPreview'
export default {
  name: 'Video',
  props: {
    sectionData: {
      type: Object,
      require: true
    }
  },
  components: {
    VideoPreview
  },
  data () {
    return {
    }
  },
  computed: {
    bvid () {
      return this.sectionData.bvid
    },
    aid () {
      return this.sectionData.aid
    },
    title () {
      return this.sectionData.title
    },
    up () {
      return this.sectionData.owner.name
    },
    cover () {
      return this.sectionData.pic
    }
  }
}
</script>
<style lang="less" scoped>
  .video-view {
    width: 206px;
    @media screen and (max-width: @screen-wide-micro) {
      width: 176px;
    }
    .video {
      height: 96px;
      @media screen and (max-width: @screen-wide-micro) {
        height: 96px;
      }
    }
    .title {
      .blocking(100%, 40px, -webkit-box);
      font-size: @font-size-normal;
      line-height: 20px;
      margin: 10px 0 8px;
      padding-right: 12px;
      font-weight: 500;
      .line-breaking(normal);
    }
    .up {
      .blocking(100%, auto);
      font-size: @font-size-small;
      color: @color-deep-gray;
      line-height: 16px;
    }
  }
</style>
