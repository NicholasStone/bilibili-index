<template>
<div class="work" v-if="!videoType">
  <div class="work__container" v-popover:[ref] @mouseenter="active = true" @mouseleave="active = false">
    <div class="work__ranking" :class="index <= 3 ? 'work__ranking--top3' : 'work__ranking--others'">{{index}}</div>
    <a :class="['work__synopsis work__synopsis--response', {'work__synopsis--top': index === 1}]" :href="link">
      <div class="work__cover" v-if="showCover">
        <img :src="video.pic" :alt="video.title">
        <watch-later/>
      </div>
      <div class="work__basic" v-if="showCover">
        <span class="work__title work__title--2lines hover-text-blue">{{video.title}}</span>
        <span class="work__subs">综合得分: {{this.video.pts | tenThousand}}</span>
      </div>
      <div class="work__title hover-text-blue" v-else>
        {{video.title}}
      </div>
    </a>
  </div>
  <popover :arrow="false" :ref="ref" placement="top" :active="active" :distance="3">
    <div class="work__detail">
      <div class="work__synopsis">
        <div class="work__cover">
          <img :src="video.pic" :alt="video.title">
        </div>
        <div class="work__basic">
          <span class="work__title work__title--2lines work__title--bold">{{video.title}}</span>
          <span class="work__subs">
            <span class="work__up">{{video.author}}</span>
            <span class="work__subs--dot"> · </span>
            <span>{{video.create.substring(0, 10)}}</span>
          </span>
        </div>
      </div>
      <div class="work__counts">
        <span class="count-item"><i class="bilifont bili-icon_shipin_bofangshu"></i> {{this.video.play | tenThousand}}</span>
        <span class="count-item"><i class="bilifont bili-icon_shipin_danmushu"></i> {{this.video.video_review | tenThousand}}</span>
        <span class="count-item"><i class="bilifont bili-icon_shipin_shoucangshu"></i> {{this.video.favorites | tenThousand}}</span>
        <span class="count-item"><i class="bilifont bili-icon_shipin_yingbishu"></i> {{this.video.coins | tenThousand}}</span>
      </div>
    </div>
  </popover>
</div>
<div v-else class="work work__container">
  <div class="work__ranking" :class="index <= 3 ? 'work__ranking--top3' : 'work__ranking--others'">{{index}}</div>
  <a class="work__synopsis work__synopsis--response" :title="video.title" :href="link">
    <span class="work__title hover-text-blue">{{video.title}}</span>
    <span class="work__subs work__subs--update">{{video.new_ep.index_show}}</span>
  </a>
</div>
</template>
<script>
import WatchLater from 'Components/common/WatchLater/WatchLater'
import Popover from 'Components/common/Popover'
import { generateId } from 'Utils/popover'
import { tenThousand } from 'Utils/utils'

export default {
  name: 'TopWork',
  components: { WatchLater, Popover },
  props: {
    video: {
      type: Object,
      required: true
    },
    index: {
      type: Number,
      required: true
    },
    showCover: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      ref: `detail-${generateId()}`,
      active: false
    }
  },
  computed: {
    videoType () {
      return Object.prototype.hasOwnProperty.call(this.video, 'badge')
    },
    link () {
      return this.videoType ? '//www.bilibili.com/bangumi/play/ss' + this.video.season_id : `//www.bilibili.com/video/${this.video.bvid}`
    }
  },
  filters: {
    tenThousand (n) {
      return tenThousand(n)
    }
  }
}
</script>
<style lang="less" scoped>
.work {
  margin-bottom: 18px;
  &__container {
    .blocking(100%, auto, flex);
    justify-content: space-between;
  }
  &__ranking {
    .blocking(18px, 18px);
    line-height: 18px;
    text-align: center;
    font-size: @font-size-normal;
    border-radius: 2px;

    &--top3 {
      background: @bilibili-blue;
      color: @color-white;
    }

    &--others {
      color: @color-deep-gray;
    }
  }

  &__synopsis {
    .blocking(290px, auto, flex);
    justify-content: space-between;
    @media screen and (max-width: @screen-size-micro) {
      width: 235px;
    }
  }

  &__cover {
    position: relative;
    & > img {
      .blocking(112px, 63px);
      border-radius: 2px;
    }

    & > .watch-later {
      position: absolute;
      right: 5px;
      bottom: 5px;
      opacity: 0;
      transition: opacity .3s;
    }

    &:hover > .watch-later {
      opacity: 1;
    }
  }

  &__basic {
    .blocking(auto, 100%, flex);
    min-width: 166px;
    margin-left: 12px;
    flex-direction: column;
    justify-content: space-between;
  }

  &__title {
    width: 100%;
    line-height: 20px;
    .line-breaking(1);
    color: @color-text;
    &&--2lines {
      height: 40px;
      .line-breaking(2);
      @media screen and (max-width: @screen-size-micro) {
        width: 111px;
      }
    }

    &&--bold {
      font-weight: 700;
    }
  }

  &__subs {
    .flex-vertical-center();
    font-size: @font-size-small;
    color: @color-deep-gray;
    &--dot {
      margin: 0 5px
    }

    &--update {
      min-width: 90px;
      text-align: right;
    }
  }

  &__detail {
    .blocking(320px, 130px, flex);
    flex-direction: column;
    padding: 12px;
  }

  &__counts {
    .blocking(100%, auto, flex);
    justify-content: space-between;
    margin-top: 12px;
    padding-top: 12px;
    border-top: 1px solid @color-gray;
    color: @color-deep-gray;
    font-size: @font-size-small;
    & > span {
      .flex-vertical-center()
    }
  }

  &__up{
    max-width: 86px;
    .line-breaking(1, inline-block);
  }
}
</style>
