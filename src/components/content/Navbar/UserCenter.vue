<template>
  <div class="user-center">
    <link-item class="user-profile" :show-arrow="false">
      <template v-slot:link>
        <avatar :vip="false" space-link="#"/>
      </template>
      <template v-slot:dialog><user-overview /></template>
    </link-item>
    <section class="links">
      <link-item>
        <template v-slot:link><a href="#">大会员</a></template>
        <template v-slot:dialog><vip /></template>
      </link-item>
      <link-item>
        <template v-slot:link>
          <a href="#">消息</a>
          <div class="bubble">
            <num-bubble :num="unreadMessage" v-if="unreadMessage"/>
          </div>
        </template>
        <template v-slot:dialog><user-message /></template>
      </link-item>
      <link-item>
        <template v-slot:link>
          <a href="#">动态</a>
          <div class="bubble">
            <num-bubble :num="unreadDynamic" v-if="unreadDynamic"/>
          </div>
        </template>
        <template v-slot:dialog><user-dynamic /></template>
      </link-item>
      <link-item>
        <template v-slot:link><a href="#">收藏</a></template>
        <template v-slot:dialog><user-favorite /></template>
      </link-item>
      <link-item>
        <template v-slot:link><a href="#">历史</a></template>
        <template v-slot:dialog><user-history /></template>
      </link-item>
      <link-item :disable-popout="true">
        <template v-slot:link><a href="#">创作中心</a></template>
      </link-item>
    </section>
    <link-item class="contribute" left-distance="-35px" arrow-left-distance="237px">
      <template v-slot:link><button class="w-100 h-100 contribute-btn">投稿</button></template>
      <template v-slot:dialog><user-contribute /></template>
    </link-item>
  </div>
</template>

<script>
import Avatar from 'Components/common/Avatar'
import NumBubble from 'Components/common/NumBubble'

import LinkItem from './common/LinkItem'

import UserOverview from './UserCenter/UserOverview'
import UserDynamic from './UserCenter/UserDynamic'
import UserFavorite from './UserCenter/UserFavorite'
import UserHistory from './UserCenter/UserHistory'
import UserContribute from './UserCenter/UserContribute'
import UserMessage from './UserCenter/UserMessage'
import Vip from './UserCenter/Vip'

import HoverMixin from './hover-mixin'
import { mapGetters } from 'vuex'

export default {
  name: 'UserCenter',
  mixins: [HoverMixin],
  components: {
    LinkItem,
    NumBubble,
    UserDynamic,
    UserFavorite,
    UserHistory,
    UserContribute,
    UserMessage,
    Vip,
    Avatar,
    UserOverview
  },
  computed: {
    ...mapGetters('navbar', ['unreadMessage', 'unreadDynamic'])
  }
}
</script>

<style lang="less" scoped>
@import "~Assets/css/_navbar-links.less";

.bubble {
  .p-absoluting(-7px, auto, auto, -10px);
}

.user-center {
  .blocking(100%, 100%, flex);
  align-items: center;
  justify-content: space-between;

  .user-profile {
    position: relative;
    width: 36px;
    margin-right: 22px;
  }

  .contribute {
    margin-left: 14px;
    height: 100%;

    .contribute-btn {
      width: 100px;
      background-color: @bilibili-pink;
      color: @color-white;
    }
  }
}
</style>
