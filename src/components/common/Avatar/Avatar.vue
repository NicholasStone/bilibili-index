<template>
  <div class="avatar">
    <img src="~Assets/images/avatar.jpg" class="avatar-img">
  </div>
</template>

<script>
export default {
  name: 'Avatar',
  data () {
    return {
      avatarUrl: ''
    }
  }
}
</script>

<style lang="less" scoped>
.avatar {
  img.avatar-img {
    width: 36px;
    height: 36px;
    border-radius: 18px;
  }
}
</style>
