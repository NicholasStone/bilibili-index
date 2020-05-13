<template>
  <div class="friendship-links">
    <a
      class="links-item"
      v-for="{link, text, icon} in links"
      :key="text"
      :href="link">
      <svg-icon :icon="icon" class="icon"/>
      <span>{{text}}</span>
    </a>
  </div>
</template>

<script>
import SvgIcon from 'Components/common/SvgIcon/SvgIcon'
export default {
  name: 'FriendshipLinks',
  components: {
    SvgIcon
  },
  data () {
    return {
      links: [
        { link: 'https://www.bilibili.com/read/home', icon: 'read', text: '专栏' },
        { link: 'https://live.bilibili.com/', icon: 'live', text: '直播' },
        { link: 'https://www.bilibili.com/blackboard/x/act_list', icon: 'activity', text: '活动' },
        { link: 'https://www.bilibili.com/cheese/', icon: 'knowlege', text: '课堂' },
        { link: 'https://www.bilibili.com/blackroom/', icon: 'blackroom', text: '小黑屋' },
        { link: 'https://www.bilibili.com/v/musicplus/', icon: 'musicplus', text: '音乐PLUS' }
      ]
    }
  }
}
</script>

<style lang="less" scoped>
  .friendship-links {
    .blocking(289px, 68px, flex);
    .flexing(wrap, space-between, space-between, space-between, column);

    @media screen and (max-width: 1870px) {
      width: 242px;
    }

    @media screen and (max-width: 1654px) {
      width: 220px;
    }

    .links-item {
      .blocking(auto, 34px, flex);
      align-items: center;

      .icon {
        width: 1.8em;
        height: 1.8em;
        fill: currentColor;
        overflow: hidden;
        vertical-align: middle;
      }

      span {
        display: inline-block;
        margin-left: 4px;
      }
    }
  }
</style>
