<template>
  <span class="num-bubble">
    <slot>{{content}}</slot>
  </span>
</template>

<script>
export default {
  name: 'NumBubble',
  props: {
    message: {
      type: [Number, String],
      default: 0
    }
  },
  computed: {
    content () {
      if (typeof this.message === 'number') return this.message >= 100 ? '99+' : this.message
      return this.message
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
