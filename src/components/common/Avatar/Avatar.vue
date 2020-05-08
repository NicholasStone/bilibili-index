<template>
  <a :href="spaceLink" class="avatar-link" :style="avatarSize">
    <img src="~Assets/images/avatar.jpg" class="avatar" :style="avatarSize">
    <img v-if="decoration" src="~Assets/images/avatar-decoration.png" class="avatar-decoration">
    <svg-icon v-if="decoration" class="big-member" icon="big-member"/>
  </a>
</template>

<script>
// TODO: 适配 vuex

export default {
  name: 'Avatar',
  props: {
    decoration: {
      type: Boolean,
      default: false
    },
    size: {
      type: Number,
      default: 36
    }
  },
  data () {
    return {
      avatarUrl: '',
      spaceLink: 'https://space.bilibili.com/22834699',
      avatarSrc: 'https://dev.nichospace.com/apis/bfs/face/1e4e803270680ed2b82a5d9f99955a150563c3f6.jpg@87w_88h_1c_100q.webp',
      avatarDecorationSrc: 'https://dev.nichospace.com/apis/bfs/face/971b69742c60b93225d38eb4c99fc382e2e5eb44.png@127w_128h_1c_100q.webp',
      bigMember: true
    }
  },
  computed: {
    avatarSize () {
      return {
        width: this.size + 'px',
        height: this.size + 'px'
      }
    }
  }
}
</script>

<style lang="less" scoped>
.avatar-link{
  display: block;
  position: relative;
  border-radius: 50%;

  img.avatar{
    border-radius: 50%
  }

  img.avatar-decoration {
    .blocking(102px, auto);
    .p-absoluting(-21px, -21px);
  }

  .big-member {
    .blocking(20px, 20px);
    .p-absoluting(auto, auto, 0, 0);
  }
}
</style>
