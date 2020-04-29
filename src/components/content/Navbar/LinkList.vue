<template>
  <ul class="links">
    <li class="link-item">
      <a class="nav-link" href="#">
        <!-- FIXME: 主站两个字字体偏小 -->
        <i class="bilifont bili-icon_dingdao_zhuzhan logo"></i>主站
      </a>
    </li>
    <li class="link-item">
      <a class="nav-link" href="#">番剧</a>
    </li>
    <li class="link-item">
      <a class="nav-link" href="#">游戏中心</a>
    </li>
    <li class="link-item">
      <a class="nav-link" href="#">直播</a>
    </li>
    <li class="link-item">
      <a class="nav-link" href="#">会员购</a>
    </li>
    <li class="link-item">
      <a class="nav-link" href="#">漫画</a>
    </li>
    <li class="link-item">
      <a class="nav-link" href="#">赛事</a>
    </li>
    <li class="link-item">
      <i class="bilifont bili-icon_dingdao_xiazaiapp"></i>
      下载APP
    </li>
  </ul>
</template>

<script>
// import HoverDialog from 'Components/common/hover-dialog/HoverDialog'

export default {
  name: 'LinkList',
  components: {
  }
}
</script>

<style lang="less" scoped>
@import '~Assets/css/_navbar-links.less';

.link-item{
  i {
    font-size: @font-size-large;
  }
  .logo {
    margin-right: 6px;
  }
}

</style>
