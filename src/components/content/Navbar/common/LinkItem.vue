<template>
  <div class="link-item"
       @mouseenter="handleMouseEnter"
       @mouseleave="handleMouseLeave">
    <div class="link-item__reference" v-popover:[reference]>
      <slot name="link"></slot>
    </div>
    <popover
      :ref="reference"
      :active="active"
      v-if="!disablePopout"
      v-bind="$attrs">
      <slot name="dialog"></slot>
    </popover>
  </div>
</template>

<script>
import Popover from 'Components/common/Popover/'
import { generateId } from 'Utils/popover'

export default {
  name: 'LinkItem',
  inheritAttrs: false,
  props: {
    disablePopout: {
      type: Boolean,
      default: false
    }
  },
  components: {
    Popover
  },
  data () {
    return {
      active: false,
      reference: `popover-ref-${generateId()}`
    }
  },
  methods: {
    handleMouseEnter () {
      this.active = true
    },
    handleMouseLeave () {
      this.active = false
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
  &__reference {
    height: 100%
  }
}
</style>
