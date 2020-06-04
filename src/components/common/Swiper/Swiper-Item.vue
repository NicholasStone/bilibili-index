<template>
  <div
    class="frame"
    :class="{actived}"
    :style="frameStyle"
  >
    <slot :width="width" />
  </div>
</template>

<script>
export default {
  name: 'SwiperItem',
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
    initSwiperItem (index, length, width, height) {
      this.index = index
      this.totalCount = length
      this.width = width
      this.height = height
    },
    updateSize (entry) {
      this.width = entry.width
    }
  },
  computed: {
    frameStyle () {
      return {
        width: `${this.width}px`,
        height: `${this.height}px`,
        transform: `translateX(${this.offset * parseInt(this.width, 10)}px)`
      }
    },
    offset () {
      // 方案1 所有frame一字排开
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

      // 方案2 把其他 frame 分开放在两边
      // if (this.current === this.index) return 0;
      // const difference = this.index - this.current;
      // return difference >= 1 && difference <= this.totalCount / 2 ? 1 : -1;
    },
    actived () {
      return this.index === this.current || this.index === this.old
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
}
.actived {
  transition: transform ease .3s;
}
</style>
