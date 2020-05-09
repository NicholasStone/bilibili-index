<template>
<div class="contribute-panel">
  <a href="#" class="contribute-link">
    <i class="bilifont bili-icon_dingdao_wenzhangtougao link-icon"></i>
    <span class="link-title">专栏投稿</span>
  </a>
  <a href="#" class="contribute-link">
    <i class="bilifont bili-icon_dingdao_yinpintougao link-icon"></i>
    <span class="link-title">音频投稿</span>
  </a>
  <a href="#" class="contribute-link">
    <i class="bilifont bili-icon_dingdao_shipintougao link-icon"></i>
    <span class="link-title">视频投稿</span>
  </a>
  <a href="#" class="contribute-link">
    <i class="bilifont bili-icon_dingdao_tougaoguanli1 link-icon"></i>
    <span class="link-title">投稿管理</span>
  </a>
</div>
</template>

<script>
export default {
  name: 'UserContribute'
}
</script>

<style lang="less" scoped>
.contribute-panel {
  .blocking(304px, 78px, flex);
  color: @color-deeper-gray;

  .contribute-link {
    .blocking(76px, 100%, flex);
    .flexing(nowrap, space-evenly, center, center, column);
    padding-top: 10px;
    .link-icon {
      font-size: 26px;
    }
  }
}
</style>
