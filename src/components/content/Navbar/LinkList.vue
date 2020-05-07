<template>
<nav>
  <ul class="links">
    <li class="link-item">
      <a class="nav-link" href="#">
        <i class="bilifont bili-icon_dingdao_zhuzhan logo"></i>主站
      </a>
    </li>
    <li class="link-item">
      <a class="nav-link" href="#">番剧</a>
    </li>
    <li class="link-item"
      @mouseenter="handleMouseEnter('game-center')"
      @mouseleave="handleMouseLeave"
    >
      <a class="nav-link" href="#">游戏中心</a>
      <hover-dialog :left-distance="190" :arrow-left-distance="72" :show="showDialog('game-center')">
        <game-center />
      </hover-dialog>
    </li>
    <li class="link-item"
      @mouseenter="handleMouseEnter('lives')"
      @mouseleave="handleMouseLeave"
    >
      <a class="nav-link" href="#">直播</a>
      <hover-dialog :left-distance="190" :arrow-left-distance="86" :show="showDialog('lives')">
        <lives />
      </hover-dialog>
    </li>
    <li class="link-item">
      <a class="nav-link" href="#">会员购</a>
    </li>
    <li class="link-item"
      @mouseenter="handleMouseEnter('comics')"
      @mouseleave="handleMouseLeave">
      <a class="nav-link" href="#">漫画</a>
      <hover-dialog :left-distance="205" :arrow-left-distance="70" :show="showDialog('comics')">
        <comics />
      </hover-dialog>
    </li>
    <li class="link-item">
      <a class="nav-link" href="#">赛事</a>
    </li>
    <li class="link-item"
      @mouseenter="handleMouseEnter('download-app')"
      @mouseleave="handleMouseLeave">
      <i class="bilifont bili-icon_dingdao_xiazaiapp"></i>
      下载APP
      <hover-dialog :is-transparent="true" :top="40" :show="showDialog('download-app')">
        <download-app/>
      </hover-dialog>
    </li>
  </ul>
</nav>
</template>

<script>
import HoverDialog from 'Components/common/HoverDialog/HoverDialog'

import DownloadApp from './LinkList/DownloadApp'
import GameCenter from './LinkList/GameCenter'
import Lives from './LinkList/Lives'
import Comics from './LinkList/Comics'

import HoverMixin from './hover-mixin'

export default {
  name: 'LinkList',
  mixins: [HoverMixin],
  components: {
    HoverDialog,
    GameCenter,
    DownloadApp,
    Lives,
    Comics
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
