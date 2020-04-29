<template>
<hover-dialog style="display: none;">
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
        <favorite-video v-for="i in 10" :key="i"/>
      </div>
      <div class="watch-list">
        <a class="view-all" href="#">查看全部</a>
        <a class="view-all" href="#">
          <span class="play-all">
            <i class="bilifont bili-icon_dingdao_bofang"></i> 播放全部
          </span>
        </a>
      </div>
    </div>
  </div>
</hover-dialog>
</template>

<script>
import HoverDialog from 'Components/common/HoverDialog/HoverDialog'
import FavoriteVideo from './Favorite/FavoriteVideo'

export default {
  name: 'Favorite',
  components: {
    FavoriteVideo,
    HoverDialog
  }
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
      height: 462px;
      overflow-y: scroll;
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
