<template>
<div class="live-frame clear-fix">
  <div class="hot-lives">
    <h3 class="live-title">热门直播:</h3>
    <div class="rooms">
      <a class="room" v-for="{link, avatar, name} in live.rooms" :key="link" :href="link">
        <img class="avatar" :src="avatar" :alt="name">
        <span class="hover-cover">LIVE</span>
        <span class="name">{{ name }}</span>
      </a>
    </div>
  </div>
  <div class="hot-events">
    <h3 class="live-title">热门活动:</h3>
    <a class="event" v-for="{image, link} in live.hotEvents" :key="image" :href="link">
      <img class="event-banner" :src="image">
    </a>
  </div>
</div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Lives',
  computed: {
    ...mapGetters('navbar', ['live'])
  }
}
</script>

<style lang="less" scoped>
.live-frame {
  width: 524px;
  padding: 20px 0;
  color: @color-text;

  .live-title {
    padding-left: 20px;
    font-size: @font-size-normal;
    line-height: 1;
    color: @bilibili-pink;
    padding-bottom: 1px;
  }

  .hot-lives {
    width: 274px;
    float: left;

    .rooms {
      padding: 0 20px;
      display: flex;
      flex-wrap: wrap;
      border-right: 1px solid #eaeaea;
      justify-content: space-between;

      .room {
        display: block;
        position: relative;
        padding:10px 0 0 0;
        font-size: @font-size-small;

        &:hover>.hover-cover {
          opacity: 1;
          transform: scale(1);
        }

        .hover-cover {
          display: flex;
          position: absolute;
          top: 10px;
          left: 0;
          right: 0;
          height: 64px;
          border-radius: 50%;
          background-color: rgba(0, 0, 0, .5);
          justify-content: space-evenly;
          align-items: center;

          font-weight: 900;
          font-size: 15px;
          color: @color-white;

          opacity: 0;
          transform: scale(0);
          transition: all .2s cubic-bezier(.22, .58, .12, .98);
        }

        .hover-cover::before {
          content: '';
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background-color: @bilibili-pink;
        }

        img.avatar {
          display: block;
          width: 64px;
          height: 64px;
          border-radius: 50%;
        }

        span.name {
          display: block;
          width: 64px;
          word-break: break-all;
          text-overflow: ellipsis;
          text-align: center;
          white-space: nowrap;
          overflow: hidden;
        }
      }
    }
  }

  .hot-events {
    width: 250px;
    float: left;

    .event {
      display: block;
      padding: 10px 20px;

      &:hover {
        background-color: @color-gray;
      }

      img.event-banner {
        width: 208px;
        height: 80px;
      }
    }
  }
}
</style>
