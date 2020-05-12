<template>
  <a :href="spaceLink" class="avatar-link" :style="avatarSize">
    <img :src="avatarSrc" class="avatar" :style="avatarSize">
    <img :src="decorationSrc" v-if="decoration" class="avatar-decoration">
    <svg-icon v-if="vip && vipIcon" class="big-member" :icon="vipIcon"/>
  </a>
</template>

<script>
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
    },
    avatarSrc: {
      type: String,
      default: '//static.hdslb.com/images/akari.jpg'
    },
    decorationSrc: {
      type: String,
      default: ''
    },
    // 是否显示 vip 图标
    vip: {
      type: Boolean,
      default: true
    },
    vipType: {
      type: Number,
      default: 0
    },
    spaceLink: {
      type: String,
      default: ''
    }
  },
  computed: {
    avatarSize () {
      return {
        width: this.size + 'px',
        height: this.size + 'px'
      }
    },
    vipIcon () {
      if (this.vipType) {
        return 'big-member'
      }
      return ''
    }
    // spaceLink () {
    //   // TODO: 适配 webpage api
    //   return `https://space.bilibili.com/${this.user_id}`
    // }
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
