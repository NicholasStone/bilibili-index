<template>
  <keep-alive>
  <transition name="slide-fade">
    <div
      v-if="show"
      class="popout"
      :class="[{'popout--transform': !this.disableTransform}, `popout--${this.position}`]"
      :style="containerPosition">
      <div
        v-if="showArrow"
        class="arrow"
        :class="`arrow--${position}`"
        :style="arrow"></div>
      <div
        class="content"
        :class="{ transparent: isTransparent }">
        <slot></slot>
      </div>
    </div>
  </transition>
  </keep-alive>
</template>

<script>
export default {
  name: 'PopupDialog',
  props: {
    show: Boolean,
    // dialog 位置
    leftDistance: String,
    // 透明背景
    isTransparent: {
      type: Boolean,
      default: false
    },
    showArrow: {
      type: Boolean,
      default: true
    },
    // 组件与父组件的相对位置
    position: {
      type: String,
      default: 'bottom',
      validator: p => p === 'top' || p === 'bottom'
    },
    // 禁止使用 transform 移动主框
    disableTransform: {
      type: Boolean,
      default: false
    },
    // 小三角偏移量
    arrowLeftDistance: String
  },
  computed: {
    // 箭头位置
    arrow () {
      return {
        left: this.arrowLeftDistance === undefined ? '50%' : this.arrowLeftDistance
      }
    },
    /**
     * 整体位置
     */
    containerPosition () {
      return {
        left: this.leftDistance === undefined ? '50%' : this.leftDistance
      }
    },
    popoutClass () {
      return [
        [`popout--${this.position}`],
        {
          'popout-transform': !this.disableTransform
        }
      ]
    }
  }
}
</script>

<style lang="less" scoped>
.popout {
  position: absolute;
  border: none;
  border-radius: 2px;
  background-color: transparent;
  z-index: 10;
  // 在内容底部
  &--bottom {
    top: 25px;
    padding-top: 25px;
  }

  // 在内容顶部
  &--top {
    bottom: 25px;
    padding-bottom: 25px;
  }

  &--transform {
    transform: translateX(-50%);
  }

  .content {
    .blocking();
    position: relative;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.2);
    background: #ffffff;
  }

  .arrow {
    position: absolute;
    width: 10px;
    height: 10px;
    border: 5px solid @color-white;
    transform: translateX(-50%) rotate(45deg);
    z-index: 11;

    &--top {
      bottom: 20px;
    }

    &--bottom {
      top: 20px;
    }
  }
}

.transparent{
  box-shadow: none !important;
  background: transparent !important;
}

.slide-fade-enter-active {
  transition: all .2s ease;
}
.slide-fade-leave-active {
  transition: all .2s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter,
.slide-fade-leave-to {
  transform: translate3d(-50%, -5px, 0);
  opacity: 0;
}

</style>
