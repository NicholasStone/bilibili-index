<template>
  <div class="main-menu wrap">
    <page-entries />
    <span class="divider"></span>
    <channels />
    <span class="divider"></span>
    <friendship-links />
  </div>
</template>

<script>
import PageEntries from './PageEntries'
import Channels from './Channels'
import FriendshipLinks from './FriendshipLinks'

export default {
  name: 'MainMenu',
  components: {
    PageEntries,
    Channels,
    FriendshipLinks
  }
}
</script>

<style lang="less" scoped>
.main-menu {
  display: flex;
  height: 108px;
  padding: 20px 0;
  .flexing(nowrap, center, center, center);

  .divider {
    .blocking(1px, 46px, block);
    border-left: 1px solid @color-gray;

    margin: 0 20px;

    @media screen and (max-width: 1654px) {
      margin: 0 15px;
    }
  }
}
</style>
