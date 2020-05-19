<template>
  <div class="timeline-dialog">
    <div class="tabbar w-100">
      <div class="tabbar-item tabbar-item__active">视频动态</div>
      <div class="tabbar-item">直播</div>
      <div class="tabbar-item">专栏</div>
    </div>
    <div class="w-100 h-100 content">
      <div class="news w-100">
        <div class="news-items w-100">
          <div class="avatar">
            <avatar/>
          </div>
          <div class="news-content">
          <span class="news-mate">
            <a href="#" class="username">观察者网</a>
            <span class="time">3分钟前</span>
          </span>
            <span class="news-title">
            <a href="#">全美死亡数超5.6万，福克斯主播：没想象中致命</a>
          </span>
          </div>
          <div class="video">
            <a href="#" class="w-100 h-100">
              <div class="video-cover">
                <div class="watch-later"></div>
                <div class="watch-later-taps"> 稍后再看</div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Avatar from 'Components/common/Avatar/Avatar'

  export default {
    name: 'TimelineDialog',
    components: {
      Avatar
    }
  }
</script>

<style lang="less" scoped>
  .timeline-dialog {
    width: 370px;
    height: 518px;
    color: #000000;

    .tabbar {
      display: flex;
      height: 49px;
      box-shadow: 0 -1px 1px 1px rgba(0, 0, 0, 0.2);
      padding-left: 20px;
      justify-content: flex-start;
      align-items: center;

      .tabbar-item {
        margin-right: 24px;
        font-size: @font-size-small;
        line-height: 16px;
        color: #999999;

        &:hover {
          color: @bilibili-blue;
        }

        &.tabbar-item__active {
          background-color: @bilibili-blue;
          color: @color-white;
          padding: 4px 10px;
          border-radius: 12px;
          margin-right: 12px;
        }
      }
    }

    .content {
      padding-top: 12px;
      display: flex;
      overflow-y: hidden;

      .news {
        height: 84px;
        padding: 12px 20px;

        &:hover {
          background: #f4f4f4;
        }

        .news-items {
          height: 84px;
          display: flex;

          .avatar {
            width: 36px;
          }

          .news-content {
            padding: 0px 12px;
            line-height: 1.3em;

            .news-mate,
            .news-title {
              display: block;
              max-width: 200px;
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

            a {
              display: block;
            }

            .video-cover {
              position: relative;
              display: flex;
              width: 64px;
              height: 36px;
              background: center/contain url(~Assets/images/news-cover.jpg) no-repeat;
              justify-content: center;
              align-items: center;

              .watch-later {
                position: relative;
                display: none;
                width: 22px;
                height: 22px;
                background: url(data:image/png;base64,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) center/contain no-repeat;
              }

              .watch-later-taps {
                display: none;
                position: absolute;
                bottom: 30px;
                padding: 6px 8px;
                background: rgba(0, 0, 0, .7);
                border-radius: 2px;

                font-size: @font-size-small;
                line-height: @font-size-small;
                color: #ffffff;
              }

              &:hover > .watch-later {
                display: block;
              }

              .watch-later:hover ~ .watch-later-taps {
                display: block;
              }
            }

          }
        }
      }
    }
  }
</style>
