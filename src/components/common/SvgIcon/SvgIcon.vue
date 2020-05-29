<template>
<svg class="svg-icon" :style="style">
  <use :xlink:href="iconName" />
</svg>
</template>

<script>
import 'Assets/images/icons/big-member.svg'
export default {
  name: 'SvgIcon',
  props: {
    icon: {
      type: String,
      required: true
    },
    width: {
      type: Number,
      default: 0
    }
  },
  computed: {
    iconName () {
      return `#bili-${this.icon}`
    },
    style () {
      let size = '1em'
      if (this.width) {
        size = `${this.width}px`
      }
      return {
        width: size,
        height: size
      }
    }
  }
}
</script>

<style lang="less" scoped>
.svg-icon {
  overflow: hidden;
  vertical-align: middle;
  fill: currentColor;
}
</style>
