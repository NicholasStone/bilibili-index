<template>
<span
  class="danmaku-item"
  :style="fly">
  <slot></slot>
</span>
</template>
<script>
import ResizeObserver from 'resize-observer-polyfill'
import { randomNumber } from 'Utils/utils'
import { throttle } from 'lodash'
export default {
  name: 'Danmaku',
  data () {
    return {
      width: 0,
      fire: false,
      // 弹幕飞行时间，每一次发射都会重新生成。
      // 单位 ms
      flyingTime: 0,
      // 节流阀函数
      t: null
    }
  },
  props: {
    trigger: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    triggered () {
      this.fire = true
      setTimeout(_ => {
        this.fire = false
        this.updateFlyingTime()
      }, this.flyingTime)
    },
    updateFlyingTime () {
      this.flyingTime = randomNumber(3000, 5000)
    }
  },
  computed: {
    fly () {
      if (this.fire) {
        return {
          left: `-${this.width}px`,
          transition: `left ${this.flyingTime}ms linear 0s`
        }
      }
      return {
        left: '100%'
      }
    }
  },
  mounted () {
    new ResizeObserver(entries => {
      this.width = Math.floor(entries[0].contentRect.width)
    }).observe(this.$el)
    this.updateFlyingTime()
  },
  watch: {
    trigger (val) {
      if (val) throttle(this.triggered, this.flyingTime + 100)()
    }
  }
}
</script>
<style lang="less" scoped>
.danmaku-item {
  .p-absoluting(auto, 100%);
  text-shadow: 1px 1px 2px #000;
  color: @color-white;
  white-space: pre; // 连续的空白符会被保留。在遇到换行符或者<br>元素时才会换行。
  font-size: @font-size-small;
  z-index: 100;
}
</style>
