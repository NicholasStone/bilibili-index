<template>
  <div class="qrcode">
    <img src="~Assets/images/app-download.png">
    <p class="notice">扫描下载手机客户端</p>
  </div>
</template>

<script>
export default {
  name: 'DownloadApp'
}
</script>

<style lang="less" scoped>
.qrcode{
  position: relative;

  img{
    width: 280px;
  }

  .notice{
    position: absolute;
    left: 0;
    right: 0;
    bottom: 17px;
    text-align: center;
    color: @color-text;
  }
}
</style>
