<template>
<div class="recommend-video bottom-shadow">
  <a class="recommend-video__link block" :href="video.link">
    <img class="recommend-video__cover" :src="video.src" :alt="video.title">
    <div class="recommend-video__info">
      <h3 class="recommend-video__title">{{video.title}}</h3>
      <div class="recommend-video__subs"><i class="bilifont bili-icon_xinxi_UPzhu"></i>{{video.author}}</div>
      <div class="recommend-video__subs">{{video.view}}</div>
    </div>
  </a>
  <watch-later class="recommend-video__watch-later"/>
</div>
</template>
<script>
import WatchLater from 'Components/common/WatchLater/WatchLater'
export default {
  name: 'RecommendVideo',
  components: { WatchLater },
  props: {
    video: {
      type: Object,
      required: true
    }
  }
}
</script>
<style lang="less" scoped>
.recommend-video {
  margin-bottom: 10px;
  position: relative;
  .blocking(206px, 116px);
  overflow: hidden;
  @media screen and (max-width: @screen-size-micro) {
    .blocking(170px, 96px);
  }

  &:hover &__link::before,
  &:hover &__watch-later {
    opacity: 1;
  }
  &:hover &__info {
    top: 0;
  }
  &:hover &__title {
    white-space: normal;
  }
  &__link::before {
    content: ' ';
    .p-absoluting(0,0,0,0);
    background-color: rgba(0,0,0,.65);
    opacity: 0;
    transition: opacity .2s;
  }

  &__cover {
    .blocking(100%, 100%);
    border-radius: 2px;
  }

  &__info {
    .blocking(100%, 100%);
    position: absolute;
    top: 64px;
    left: 0;
    padding: 26px 10px 10px;
    transition: top .2s ease;
    z-index: 5;
  }

  &__title {
    font-size: @font-size-normal;
    line-height: 18px;
    margin-bottom: 6px;
    color: @color-white;
    .line-breaking();
    font-weight: 500;
  }

  &__subs {
    font-size: @font-size-small;
    color: #e0e0e0;
    margin-bottom: 3px;
    .flex-vertical-center();
  }

  &__watch-later {
    position: absolute;
    bottom: 8px;
    right: 8px;
    opacity: 0;
  }
}
</style>
