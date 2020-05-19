<template>
<nav class="links">
  <link-item :disable-popout="true">
    <template v-slot:link>
      <a class="nav-link" href="/">
        <i class="bilifont bili-icon_dingdao_zhuzhan logo"></i>主站
      </a>
    </template>
  </link-item>
  <link-item :disable-popout="true">
    <template v-slot:link>
      <a class="nav-link" href="#">番剧</a>
    </template>
  </link-item>
  <link-item :skidding="165">
    <template v-slot:link><a class="nav-link" href="#">游戏中心</a></template>
    <template v-slot:dialog><game-center /></template>
  </link-item>
  <link-item :skidding="190">
    <template v-slot:link><a class="nav-link" href="#">直播</a></template>
    <template v-slot:dialog><lives /></template>
  </link-item>
  <link-item :disable-popout="true">
    <template v-slot:link><a class="nav-link" href="#">会员购</a></template>
  </link-item>
  <link-item :skidding="190">
    <template v-slot:link><a class="nav-link" href="#">漫画</a></template>
    <template v-slot:dialog><comics /></template>
  </link-item>
  <link-item :disable-popout="true">
    <template v-slot:link><a class="nav-link" href="#">赛事</a></template>
  </link-item>
  <link-item :transparent="true">
    <template v-slot:link><i class="bilifont bili-icon_dingdao_xiazaiapp"></i>下载APP</template>
    <template v-slot:dialog><download-app/></template>
  </link-item>
</nav>
</template>

<script>
import LinkItem from './common/LinkItem'

import DownloadApp from './LinkList/DownloadApp'
import GameCenter from './LinkList/GameCenter'
import Lives from './LinkList/Lives'
import Comics from './LinkList/Comics'

import HoverMixin from './hover-mixin'

export default {
  name: 'LinkList',
  mixins: [HoverMixin],
  components: {
    LinkItem,
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
