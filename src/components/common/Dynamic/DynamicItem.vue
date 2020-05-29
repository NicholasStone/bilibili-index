<template>
  <div class="news-items w-100">
    <div class="avatar">
      <avatar :avatar-src="uploader.face"/>
    </div>
    <div class="news-content">
      <span class="news-mate">
        <a href="#" class="username">{{ uploader.name }}</a>
        <span class="time">{{ uploadTime }}</span>
      </span>
      <span class="news-title">
        <a href="#">{{ videoTitle }}</a>
      </span>
    </div>
    <div
      class="video"
      @mouseenter="showWatchLater = true"
      @mouseleave="showWatchLater = false">
      <a href="#" class="w-100 h-100">
        <div class="video-cover w-100 h-100"
             :style="{background: `url(${videoCover}) center/contain no-repeat`}">
          <watch-later :aid="aid" v-show="showWatchLater"/>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
import Avatar from 'Components/common/Avatar/Avatar'
import { Time } from 'Utils/time'
import WatchLater from 'Components/common/WatchLater'

export default {
  name: 'DynamicItem',
  props: {
    video: {
      type: Object,
      required: true
    }
  },
  components: {
    WatchLater,
    Avatar
  },
  data () {
    return {
      showWatchLater: false
    }
  },
  computed: {
    uploader () { return this.video.uploader },
    uploadTime () { return Time(this.video.video.pubdate).fromNow() },
    videoTitle () { return this.video.video.title },
    videoCover () { return this.video.video.pic },
    aid () { return this.video.video.aid }
  }
}
</script>

<style lang="less" scoped>
.news-items {
  display: flex;
  padding: 12px 20px;

  &:hover {
    background: #f4f4f4;
  }

  .avatar {
    width: 36px;
  }

  .news-content {
    padding: 0px 12px;
    line-height: 1.3em;

    .news-mate,
    .news-title {
      display: block;
      width: 200px;
    }

    .news-mate {
      font-size: @font-size-small;

      .username {
        color: #505050;
      }

      .time {
        color: #999999;
        margin-left: 10px;
      }
    }

    .news-title {
      margin-top: 6px;
    }
  }

  .video {
    width: 64px;
    height: 36px;

    a {
      display: block;
      border-radius: 4px;
    }

    .video-cover {
      position: relative;
      display: flex;
      width: 64px;
      justify-content: center;
      align-items: center;
      border-radius: 4px;
    }
  }
}
</style>
