<template>
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
</template>

<script>
export default {
  name: 'FavoriateVideo'
}
</script>

<style lang="less" scoped>
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
</style>
