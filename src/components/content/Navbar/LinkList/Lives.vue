<template>
<div class="live-frame clear-fix">
  <div class="hot-lives">
    <h3 class="live-title">热门直播:</h3>
    <div class="rooms">
      <a class="room" v-for="{link, avatar, name} in rooms" :key="link" :href="link">
        <img class="avatar" :src="avatar" :alt="name">
        <span class="hover-cover">LIVE</span>
        <span class="name">{{ name }}</span>
      </a>
    </div>
  </div>
  <div class="hot-events">
    <h3 class="live-title">热门活动:</h3>
    <a class="event" v-for="{image, link} in hotEvents" :key="image" :href="link">
      <img class="event-banner" :src="image">
    </a>
  </div>
</div>
</template>

<script>
export default {
  name: 'Lives',
  data () {
    return {
      rooms: [
        {
          link: 'https://live.bilibili.com/21870601',
          avatar: 'https://dev.nichospace.com/apis/bfs/face/c3b920d17f57a1ec12a5b24224107cc85af262f0.jpg@100w_100h.webp',
          name: '叶茂在线'
        },
        {
          link: 'https://live.bilibili.com/21548396',
          avatar: 'https://dev.nichospace.com/apis/bfs/face/d5f4003b198542002aa2de8b549e2b8e85cda3bc.jpg@100w_100h.webp',
          name: '阿光爱画画'
        },
        {
          link: 'https://live.bilibili.com/11775380',
          avatar: 'https://dev.nichospace.com/apis/bfs/face/2b7d3f342f51c0ec45f183e2be84abea9ac9c7a9.jpg@100w_100h.webp',
          name: '二次元绘画小妙屋'
        },
        {
          link: 'https://live.bilibili.com/74000?visit_id=azq51tsnrcc0target=_blank',
          avatar: 'https://dev.nichospace.com/apis/bfs/face/2f305afae61c7d9272e0c352282b89a303c76770.jpg@100w_100h.webp',
          name: '爱吃肉的三水喵'
        },
        {
          link: 'https://live.bilibili.com/21394728',
          avatar: 'https://dev.nichospace.com/apis/bfs/face/17b82fe7b2adcab81754827212305c6c433704e7.jpg@100w_100h.webp',
          name: 'ChanneLLean'
        },
        {
          link: 'https://live.bilibili.com/268679',
          avatar: 'https://dev.nichospace.com/apis/bfs/face/75bce68d7ad89c551b2f661eeadf3ee89d16338f.jpg@100w_100h.webp',
          name: '琦妙-妙妙'
        }
      ],
      hotEvents: [
        {
          image: 'https://dev.nichospace.com/apis/bfs/live/e9cf6b20810ac75447f99a7c00a423f135993100.jpg',
          link: 'https://www.bilibili.com/blackboard/live/activity--5R5611BG.html'
        },
        {
          image: 'https://dev.nichospace.com/apis/bfs/live/96c21315d7a50a68e3bc96cd4ffe44c7b7b9d73b.jpg',
          link: 'https://www.bilibili.com/blackboard/live/activity-gyLzd_o3K.html'
        }
      ]
    }
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
