<template>
  <div
    class="frame"
    :class="{enter, leave}"
    :style="frameStyle">
    <slot :width="width" :height="height" />
  </div>
</template>

<script>
export default {
  name: 'CarouselItem',
  data () {
    return {
      index: 0,
      current: 0,
      old: 0,
      totalCount: 0,
      width: 0,
      height: 0
    }
  },
  methods: {
    updateLocation (current, old) {
      this.current = current
      this.old = old
    },
    // 注入此item的index和总长度
    initCarouselItem (index, length) {
      this.index = index
      this.totalCount = length
    },
    // 注入宽高
    updateSize (width, height) {
      this.width = width
      this.height = height
    }
  },
  computed: {
    frameStyle () {
      // 滚动方案2 把其他 frame 分开放在两边
      const position = this.offset === 0 ? 0
        : this.offset > 0 ? 1 : -1
      return {
        width: `${this.width}px`,
        height: `${this.height}px`,
        transform: `translateX(${position * parseInt(this.width)}px)`
      }
    },
    offset () {
      // 滚动方案1 所有frame一字排开
      if (this.index > (this.current + this.totalCount / 2)) {
        return this.index - this.current - this.totalCount
      }
      if (this.index < (this.current - this.totalCount / 2)) {
        return this.totalCount - this.current + this.index
      }
      if (Math.abs(this.index - this.current) === this.totalCount / 2) {
        return -this.totalCount / 2
      }
      return this.index - this.current
    },
    enter () {
      return this.index === this.current
    },
    leave () {
      return this.index === this.old
    }
  }
}
</script>

<style lang="less" scoped>
.frame{
  display: inline-block;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
}
.enter {
  transition: transform ease-in-out 250ms;
  z-index: 8;
}
.leave {
  transition: transform ease 550ms;
  z-index: 7;
}
</style>
