<template>
  <div class="link-item"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave">
    <slot name="link"></slot>
    <popout-dialog :show="alwaysShow || actived" v-if="!disablePopout" v-bind="$attrs">
      <slot name="dialog"></slot>
    </popout-dialog>
  </div>
</template>

<script>
import PopoutDialog from 'Components/common/PopoutDialog'

export default {
  name: 'LinkItem',
  inheritAttrs: false,
  props: {
    disablePopout: {
      type: Boolean,
      default: false
    },
    alwaysShow: Boolean
  },
  components: {
    PopoutDialog
  },
  data () {
    return {
      actived: false
    }
  },
  methods: {
    handleMouseEnter () {
      this.actived = true
    },
    handleMouseLeave () {
      this.actived = false
    }
  }
}
</script>

<style lang="less" scoped>
.link-item{
  position: relative;
  height: 100%;
  color: @color-white;
  vertical-align: middle;
  line-height: 30px;
  i {
    font-size: @font-size-large;
  }
  .logo {
    margin-right: 6px;
  }
}
</style>
