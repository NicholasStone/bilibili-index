<template>
  <div class="user-center">
    <div class="user-profile">
      <avatar />
    </div>
    <ul class="links">
      <li class="link-item">
        <a href="#">大会员</a>
      </li>
      <li class="link-item">
        <a href="#">消息</a>
      </li>
      <li class="link-item">
        <a href="#">动态</a>
        <hover-dialog style="display: none;">
          <timeline-dialog />
        </hover-dialog>
      </li>
      <li class="link-item">
        <a href="#">收藏</a>
        <hover-dialog>
          <favorite />
        </hover-dialog>
      </li>
      <li class="link-item">
        <a href="#">历史</a>
      </li>
      <li class="link-item">
        <a href="#">创作中心</a>
      </li>
    </ul>
    <div class="submit">
      <button class="w-100 h-100 submit-btn">投稿</button>
    </div>
  </div>
</template>

<script>
import Avatar from 'Components/common/Avatar/Avatar'
import HoverDialog from 'Components/common/HoverDialog/HoverDialog'
import TimelineDialog from './UserCenter/TimelineDialog'
import Favorite from './UserCenter/Favorite'

export default {
  name: 'UserCenter',
  components: {
    Avatar,
    HoverDialog,
    TimelineDialog,
    Favorite
  },
  data () {
    return {}
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
    width: 36px;
    margin-right: 22px;
  }

  .submit {
    flex: auto;
    width: 100px;
    height: 100%;

    .submit-btn {
      background-color: @bilibili-pink;
      color: @color-white;
    }
  }
}
</style>
