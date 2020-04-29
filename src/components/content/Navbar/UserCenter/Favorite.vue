<template>
  <div class="favorite-container">
    <div class="collect-boxs h-100">
      <div class="box actived w-100">
        <span class="name">0x01</span>
        <span class="count">233</span>
      </div>
      <div class="box w-100">
        <span class="name">稍后再看</span>
        <span class="count">233</span>
      </div>
      <div class="box w-100">
        <span class="name">0x02</span>
        <span class="count">233</span>
      </div>
    </div>
    <div class="collect-items h-100">
      <div class="video-list">
        <div class="item w-100">
          <div class="video-cover">
            <a href="#" >
              <img src="~Assets/images/video-cover.jpg" class="h-100">
            </a>
            <span class="video-duration">16p</span>
          </div>
          <div class="video-info w-100">
            <a href="#" class="title">【危机合约】全关卡攻略合集！阵容平民+低练度+语音详解的愉悦攻略！《明日方舟》荒芜行动 |魔法Zc目录 荒漠/无人危楼/荒芜广场/中转站/59废墟/中转站</a>
            <a href="#" class="upper-name">魔法Zc目录</a>
          </div>
        </div>
        <div class="item w-100">
          <div class="video-cover">
            <a href="#" >
              <img src="~Assets/images/video-cover.jpg" class="h-100">
            </a>
            <span class="video-duration">16p</span>
          </div>
          <div class="video-info w-100">
            <a href="#" class="title">【危机合约】全关卡攻略合集！阵容平民+低练度+语音详解的愉悦攻略！《明日方舟》荒芜行动 |魔法Zc目录 荒漠/无人危楼/荒芜广场/中转站/59废墟/中转站</a>
            <a href="#" class="upper-name">魔法Zc目录</a>
          </div>
        </div>
        <div class="item w-100">
          <div class="video-cover">
            <a href="#" >
              <img src="~Assets/images/video-cover.jpg" class="h-100">
            </a>
            <span class="video-duration">16p</span>
          </div>
          <div class="video-info w-100">
            <a href="#" class="title">【危机合约】全关卡攻略合集！阵容平民+低练度+语音详解的愉悦攻略！《明日方舟》荒芜行动 |魔法Zc目录 荒漠/无人危楼/荒芜广场/中转站/59废墟/中转站</a>
            <a href="#" class="upper-name">魔法Zc目录</a>
          </div>
        </div>
        <div class="item w-100">
          <div class="video-cover">
            <a href="#" >
              <img src="~Assets/images/video-cover.jpg" class="h-100">
            </a>
            <span class="video-duration">16p</span>
          </div>
          <div class="video-info w-100">
            <a href="#" class="title">【危机合约】全关卡攻略合集！阵容平民+低练度+语音详解的愉悦攻略！《明日方舟》荒芜行动 |魔法Zc目录 荒漠/无人危楼/荒芜广场/中转站/59废墟/中转站</a>
            <a href="#" class="upper-name">魔法Zc目录</a>
          </div>
        </div>
      </div>
      <div class="watch-list">
        <a class="view-all" href="#">查看全部</a>
        <a class="view-all" href="#"><span class="play-all"> <i class="bilifont bili-icon_dingdao_bofang"></i> 播放全部</span></a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Favorite'
}
</script>

<style lang="less" scoped>
.favorite-container{
  display: flex;
  width: 520px;
  height: 520px;
  background: @color-white;
  color: @color-text;

  justify-content: space-between;
  .collect-boxs{
    padding: 8px 0;
    width: 150px;
    border-right: 1px solid @color-gray;

    .box {
      display: flex;
      height: 46px;
      padding: 0 16px;

      justify-content: space-between;
      align-items: center;
      .name,
      .count {
        display: inline
      }

      &.actived {
        background: @bilibili-blue;
        color: @color-white;
      }

      &:hover:not(.actived) {
        background-color: @color-gray;
      }
    }
  }

  .collect-items {
    position: relative;
    padding-top: 12px;
    width: 370px;

    .video-list {
      .item {
        display: flex;
        height: 77px;
        padding: 8px 5px 8px 16px;

        &:hover {
          background: @color-gray;
        }

        .video-cover {
          position: relative;
          height: 61px;
          border-radius: 2px;
            .video-duration {
              position: absolute;
              bottom: 4px;
              right: 4px;
              background: rgba(0, 0, 0, .5);
              color: @color-white;
              font-size: @font-size-small;
              line-height: @font-size-small + 2px;
            }
        }

        .video-info {
          margin-left: 6px;

          .title {
            display: block;
            height: 37px;
            font-weight: 500px;
            overflow: hidden;
            text-overflow: ellipsis;
            word-break: break-all;
            line-height: normal;
          }

          .upper-name {
            display: block;
            font-size: @font-size-small;
            color: @color-deep-gray;
          }
        }
      }
    }

    .watch-list {
      display: flex;
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      height: 46px;
      border-top: 1px @color-gray solid;

      .view-all {
        flex: 1;
        line-height: 45px;
        text-align: center;

        .play-all {
          color: @bilibili-blue;
        }
      }
    }
  }
}

</style>
