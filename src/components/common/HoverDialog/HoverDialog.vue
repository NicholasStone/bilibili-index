<template>
  <keep-alive>
  <transition name="slide-fade">
    <div
      v-if="show"
      class="hover-dialog"
      :class="{transparent: isTransparent }"
      :style="position"
    >
      <div v-if="showArrow" class="arrow" :style="arrow"></div>
      <slot></slot>
    </div>
  </transition>
  </keep-alive>
</template>

<script>

export default {
  name: 'HoverDialog',
  props: {
    show: Boolean,
    // dialog 位置
    leftDistance: Number,
    // 透明背景
    isTransparent: {
      type: Boolean,
      default: false
    },
    // 和 navbar 的距离 （不算小三角）
    top: {
      type: Number,
      default: 47,
      validator: val => !isNaN(parseInt(val))
    },
    // 是否显示小三角
    showArrow: {
      type: Boolean,
      default: true
    },
    // 小三角位置
    arrowPosition: {
      type: String,
      default: 'center'
    },
    // 小三角偏移量
    arrowLeftDistance: {
      type: Number,
      default: 0
    }
  },
  computed: {
    arrow () {
      const left = this.arrowLeftDistance ? this.arrowLeftDistance + 'px' : '50%'
      return {
        top: `${47 - parseInt(this.top) - 5}px`,
        left
      }
    },
    position () {
      return {
        left: this.leftDistance ? this.leftDistance + 'px' : '50%',
        top: this.top + 'px'
      }
    }

  }
}
</script>

<style lang="less" scoped>
.transparent{
  box-shadow: none !important;
  background: transparent !important;
}

.hover-dialog {
  position: absolute;
  border: none;
  border-radius: 2px;
  padding: 0;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.2);
  background-color: #ffffff;
  transform: translateX(-50%);

  .arrow {
    position: absolute;
    width: 10px;
    height: 10px;
    border: 5px solid transparent;
    border-top: 5px solid #ffffff;
    border-left: 5px solid #ffffff;
    transform: translateX(-50%) rotate(45deg);
  }
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
