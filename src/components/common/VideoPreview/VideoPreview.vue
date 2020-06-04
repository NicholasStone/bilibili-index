<template>
  <div
    class="video-preview bottom-shadow"
    @mouseenter="showDanmakuSprite"
    @mouseleave="hideDanmakuSprite">
    <i class="video-preview__crown" :class="crownType"></i>
    <img class="video-preview__cover" :src="cover">
    <div class="info clear-fix">
      <span class="info__counts-view float-left">
        <i class="bilifont bili-icon_shipin_bofangshu"></i>
        {{view}}
      </span>
      <span class="info__counts-likes float-left">
        <i class="bilifont bili-icon_shipin_dianzanshu"></i>
        {{likes}}
      </span>
      <span class="info__duration float-right">
        {{duration}}
      </span>
    </div>
    <div :class="['video-preview__insight', {'video-preview__insight--visible': mouseIn}]">
      <danmaku-screen :aid="aid" :rails="2" :fire="mouseIn"></danmaku-screen>
    </div>
    <div :class="['video-preview__insight', {'video-preview__insight--visible': mouseIn}]">
      <sprite-preview :aid="aid" :playing="mouseIn"></sprite-preview>
    </div>
    <div :class="['video-preview__watch-later', {'video-preview__watch-later--visible': mouseIn}]">
      <watch-later />
    </div>
  </div>
</template>
<script>
import DanmakuScreen from './Danmaku/DanmakuScreen'
import SpritePreview from './SpritePreview'
import WatchLater from 'Components/common/WatchLater/WatchLater'
import { parseTime } from 'Utils/time'

export default {
  name: 'VideoPreview',
  props: {
    video: {
      type: Object,
      required: true
    }
  },
  components: {
    DanmakuScreen,
    SpritePreview,
    WatchLater
  },
  data () {
    return {
      mouseIn: false,
      progress: 0,
      width: 0
    }
  },
  computed: {
    cover () {
      return this.video.pic
    },
    view () {
      return this.shorted(this.video.stat.view)
    },
    likes () {
      return this.shorted(this.video.stat.like)
    },
    duration () {
      return parseTime(this.video.duration)
    },
    crownType () {
      const view = this.video.stat.view
      let type = 1
      if (view > 2500000) type = 2
      if (view < 500000) type = 0

      if (!type) return ''
      return type === 1 ? 'video-preview__crown--silver' : 'video-preview__crown--gold'
    },
    aid () {
      return this.video.aid
    }
  },
  methods: {
    showDanmakuSprite () {
      this.mouseIn = true
    },
    hideDanmakuSprite () {
      this.mouseIn = false
    },
    shorted (number) {
      return number < 10000 ? number : Math.round(number / 10000) + '万'
    }
  }
}
</script>
<style lang="less" scoped>
.video-preview {
  .blocking(100%, 100%);
  position: relative;
  border-radius: 2px;

  .info {
    .blocking(100%, 28px);
    .p-absoluting(auto, 0, 0, 0);
    padding: 6px 8px;
    font-size: @font-size-small;
    color: @color-white;
    line-height: 16px;

    &__counts-view {
      margin-right: 10px;
    }
  }

  &__cover {
    .full-sizing();
    border-radius: 2px;
  }

  &__crown {
    .p-absoluting(0, 0);
    background-size: cover;
    background-position: center;
    &--gold {
      .blocking(40px, 24px);
      background-image: url("~Assets/images/crown_gold.png");
    }
    &--silver {
      .blocking(40px, 24px);
      background-image: url("~Assets/images/crown_silver.png");
    }
  }

  &__insight{
    .p-absoluting(0, 0, 0, 0);
    opacity: 0;
    transition: opacity .2s ease;
    &--visible {
      opacity: 1;
    }
  }

  &__watch-later {
    .p-absoluting(auto, auto, 5px, 5px);
    opacity: 0;
    transition: opacity .2s ease;
    &--visible {
      opacity: 1;
    }
  }
}
</style>
