<template>
  <span class="num-bubble" v-if="num">{{ num >= 100 ? '99+' : num }}</span>
</template>

<script>
export default {
  name: 'NumBubble',
  props: {
    num: {
      type: Number,
      default: 0
    }
  }
}
</script>

<style lang="less" scoped>
.num-bubble {
  display: block;
  min-width: 16px;
  line-height: 16px;
  padding: 0 3px;
  font-size: @font-size-small;
  text-align: center;
  border-radius: 8px;
  background: @color-red;
  color: @color-white;
}
</style>
