<template>
  <div class="user-center">
    <div class="user-profile"
      @mouseenter="handleMouseEnter('user-overview')"
      @mouseleave="handleMouseLeave">
      <avatar/>
      <!-- showDialog('user-overview') -->
      <hover-dialog :show-arrow="false" :top="44" :show="showDialog('user-overview')">
        <user-overview/>
      </hover-dialog>
    </div>
    <ul class="links">
      <li class="link-item">
        <a href="#">大会员</a>
      </li>
      <li class="link-item">
        <a href="#">消息</a>
      </li>
      <li class="link-item"
        @mouseenter="handleMouseEnter('user-dynamic')"
        @mouseleave="handleMouseLeave">
        <a href="#">动态</a>
        <hover-dialog :show="showDialog('user-dynamic')">
          <user-dynamic/>
        </hover-dialog>
      </li>
      <li class="link-item"
        @mouseenter="handleMouseEnter('user-favorite')"
        @mouseleave="handleMouseLeave">
        <a href="#">收藏</a>
        <hover-dialog :show="showDialog('user-favorite')">
          <user-favorite/>
        </hover-dialog>
      </li>
      <li class="link-item"
        @mouseenter="handleMouseEnter('user-history')"
        @mouseleave="handleMouseLeave">
        <a href="#">历史</a>
        <hover-dialog :show="showDialog('user-history')">
          <user-history/>
        </hover-dialog>
      </li>
      <li class="link-item">
        <a href="#">创作中心</a>
      </li>
    </ul>
    <div class="contribute"
      @mouseenter="handleMouseEnter('contribute')"
      @mouseleave="handleMouseLeave">
      <button class="w-100 h-100 contribute-btn">投稿</button>
      <hover-dialog :left-distance="315" :arrow-left-distance="228" :show="showDialog('contribute')">
        <user-contribute />
      </hover-dialog>
    </div>
  </div>
</template>

<script>
import HoverDialog from 'Components/common/HoverDialog/HoverDialog'
import Avatar from 'Components/common/Avatar/Avatar'

import UserOverview from './UserCenter/UserOverview'
import UserDynamic from './UserCenter/UserDynamic'
import UserFavorite from './UserCenter/UserFavorite'
import UserHistory from './UserCenter/UserHistory'
import UserContribute from './UserCenter/UserContribute'

import HoverMixin from './hover-mixin'

export default {
  name: 'UserCenter',
  mixins: [HoverMixin],
  components: {
    HoverDialog,
    UserOverview,
    UserDynamic,
    UserFavorite,
    UserHistory,
    UserContribute,
    Avatar
  }
}
</script>

<style lang="less" scoped>
@import "~Assets/css/_navbar-links.less";

.user-center {
  display: flex;
  align-items: center;
  justify-content: space-between;

  .user-profile {
    position: relative;
    width: 36px;
    margin-right: 22px;
  }

  .contribute {
    flex: auto;
    width: 100px;
    height: 100%;

    .contribute-btn {
      background-color: @bilibili-pink;
      color: @color-white;
    }
  }
}
</style>
