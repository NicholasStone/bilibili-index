<template>
  <transition name="slide-fade">
    <div
      ref="popper"
      class="popover popper"
      role="tooltip"
      v-show="active"
      :id="id"
      :style="{width, zIndex}">
      <div data-popper-arrow class="popper__arrow"></div>
      <div
        class="popover__content"
        :class="transparent? 'popper__content--bg-transparent' : 'popper__content--bg-white'">
        <slot></slot>
      </div>
    </div>
  </transition>
</template>

<script>
import { createPopper } from '@popperjs/core'
import { generateId, zIndex } from 'Utils/popover'
export default {
  name: 'Popover',
  data () {
    return {
      popperInstance: null,
      reference: null,
      popper: null,
      modifiers: [],
      timer: null,
      id: `popover-${generateId()}`,
      zIndex: this.nextZIndex()
    }
  },
  props: {
    placement: {
      type: String,
      default: 'bottom',
      validator: p => /^(top|bottom|left|right)(-start|-end)?$/g.test(p)
    },
    skidding: {
      type: Number,
      default: 0
    },
    distance: {
      type: Number,
      default: 0
    },
    popperModifiers: {
      type: Array,
      default: _ => []
    },
    width: {
      type: [Number, String],
      default: 'auto'
    },
    disablePopper: {
      type: Boolean,
      default: false
    },
    active: {
      type: Boolean,
      default: false
    },
    transparent: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    hidden () {
      return (this.disablePopper || !this.active) ? 'true' : 'false'
    }
  },
  methods: {
    createPopper: function () {
      // document.body.append(this.popper)
      this.popperInstance = createPopper(this.reference, this.popper, {
        placement: this.placement,
        modifiers: this.modifiers
      })
    },
    updatePopper () {
      if (this.popperInstance) {
        this.popperInstance.update()
        this.zIndex = this.nextZIndex()
      } else {
        this.createPopper()
      }
    },
    destroyPopper () {
      this.popperInstance.destroy()
    },
    nextZIndex: _ => zIndex().next().value
  },
  watch: {
    active () {
      if (this.disablePopper) return
      this.updatePopper()
    }
  },
  mounted: function () {
    this.reference = this.$refs.reference
    this.popper = this.$refs.popper

    this.reference.setAttribute('aria-describedby', this.id)

    this.modifiers = [
      {
        name: 'popperOffsets',
        data: {
          x: 0, y: 0
        }
      },
      {
        name: 'offset',
        options: {
          offset: [this.skidding, this.distance]
        }
      },
      {
        name: 'arrow',
        options: {
          padding: 5
        },
        data: {
          centerOffset: 0
        }
      },
      {
        name: 'computeStyles',
        options: {
          gpuAcceleration: false, // 关掉 gpu加速，使用传统的 top left ，防止 transform 污染 Transition动画,
          adaptive: false
        }
      },
      {
        name: 'preventOverflow',
        options: {
          padding: 8
        }
      },
      ...this.popperModifiers
    ]
  }
  // beforeDestroy () {
  //   this.destroyPopper()
  // }
}
</script>

<style lang="less" scoped>
@padding-distance: 10px;
.popper{
  .popper__arrow{
    &::after {
      content: " ";
      position: absolute;
      display: block;
      width: 0;
      height: 0;
      border-color: transparent;
      border-style: solid;
      border-width: 6px;
    }
    border-width: 6px;
    filter: drop-shadow(0 2px 12px rgba(0, 0, 0, 0.03));
  }
  &[data-popper-placement^=top] .popper__arrow {
    bottom: 4px;
    left: 50%;
    margin-right: 3px;
    border-top-color: #EBEEF5;
    border-bottom-width: 0;
    &::after {
      bottom: 1px;
      margin-left: -6px;
      border-top-color: #FFFFFF;
      border-bottom-width: 0;
    }
  }
  &[data-popper-placement^=bottom] .popper__arrow {
    top: 4px;
    left: 50%;
    margin-right: 3px;
    border-top-width: 0;
    border-bottom-color: #EBEEF5;
    &::after {
      top: 1px;
      margin-left: -6px;
      border-top-width: 0;
      border-bottom-color: #FFFFFF;
    }
  }

  &[data-popper-placement^=right] .popper__arrow {
    top: 50%;
    left: 4px;
    margin-bottom: 3px;
    border-right-color: #EBEEF5;
    border-left-width: 0;
    &::after {
      bottom: -6px;
      left: 1px;
      border-right-color: #FFFFFF;
      border-left-width: 0;
    }
  }

  &[data-popper-placement^=left] .popper__arrow {
    top: 50%;
    right: 4px;
    margin-bottom: 3px;
    border-right-width: 0;
    border-left-color: #EBEEF5;
    &::after {
      right: 1px;
      bottom: -6px;
      margin-left: -6px;
      border-right-width: 0;
      border-left-color: #FFFFFF;
    }
  }

  &[data-popper-reference-hidden] {
    visibility: hidden;
    pointer-events: none;
  }
}

.popover {
  background: transparent;
  transform-origin: center top;
  &[data-popper-placement^=bottom] {
    padding-top: @padding-distance;
  }
  &[data-popper-placement^=top] {
    padding-bottom: @padding-distance;
  }
  &[data-popper-placement^=right] {
    padding-left: @padding-distance;
  }
  &[data-popper-placement^=left] {
    padding-right: @padding-distance;
  }
  &__content {
    min-width: 100px;
    border-radius: 2px;
    border: none;
    z-index: 2000;
    color: #606266;
    line-height: 1.4;
    text-align: justify;
    font-size: 14px;
    word-break: break-all;
    &.popper__content--bg-transparent {
      background-color: transparent;
    }
    &.popper__content--bg-white {
      background-color: @color-white;
      box-shadow: 0 3px 6px rgba(0, 0, 0, 0.2);
    }
  }
}

.slide-fade-enter-active {
  transition: .2s ease;
  transition-property:  transform, opacity;
}
.slide-fade-leave-active {
  transition: .2s cubic-bezier(1, 0.5, 0.8, 1);
  transition-property:  transform, opacity;
}
.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateY(-5px);
  opacity: 0;
}
</style>
