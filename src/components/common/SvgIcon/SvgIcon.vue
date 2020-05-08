<template>
<svg class="svg-icon" :class="classes">
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
    classes: {
      type: String,
      default: ''
    }
  },
  computed: {
    iconName () {
      return `#bili-${this.icon}`
    }
  }
}
</script>

<style lang="less" scoped>
.svg-icon {
  overflow: hidden;
  width: 1em;
  height: 1em;
  vertical-align: middle;
  fill: currentColor;
}
</style>
