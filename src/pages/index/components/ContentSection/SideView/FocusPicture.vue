<template>
<div class="focus-picture">
  <img :src="src" :alt="alt">
</div>
</template>
<script>
export default {
  name: 'FocusPicture',
  props: {
    src: {
      type: String,
      required: true
    },
    alt: {
      type: String,
      default: ''
    }
  }
}
</script>
<style lang="less" scoped>
.focus-picture {
  .blocking(100%, 100%);
  & > img {
    .blocking(100%, 100%);
    vertical-align: middle;
  }
}
</style>
