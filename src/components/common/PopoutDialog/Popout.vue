<template>
  <keep-alive>
  <transition name="slide-fade">
    <div
      v-if="show"
      class="hover-dialog"
      :style="position">
      <div v-if="showArrow" class="arrow" :style="arrow"></div>
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
    leftDistance: Number,
    // 透明背景
    isTransparent: {
      type: Boolean,
      default: false
    },
    showArrow: {
      type: Boolean,
      default: true
    },
    // 小三角位置
    arrowPosition: {
      type: String,
      default: 'top'
    },
    // 小三角偏移量
    arrowLeftDistance: {
      type: Number,
      default: 0
    }
  },
  computed: {
    // 箭头位置
    arrow () {
      return {
        left: this.arrowLeftDistance ? this.arrowLeftDistance + 'px' : '50%'
      }
    },
    // 整体左边距
    position () {
      return {
        left: this.leftDistance ? this.leftDistance + 'px' : '50%'
      }
    }
  }
}
</script>

<style lang="less" scoped>
.hover-dialog {
  position: absolute;
  top: 25px;
  border: none;
  border-radius: 2px;
  padding-top: 20px;
  background-color: transparent;
  transform: translateX(-50%);
  z-index: 10;

  .content {
    .blocking();
    position: relative;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.2);
    background: #ffffff;
  }

  .arrow {
    position: absolute;
    top: 15px;
    width: 10px;
    height: 10px;
    border: 5px solid transparent;
    border: 5px solid #ffffff;
    transform: translateX(-50%) rotate(45deg);
    z-index: 11;
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
