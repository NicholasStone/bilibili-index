<template>
<div class="sprite-preview"
     :style="sprite"
     @mousemove="handleMouseMove">
  <div class="progress-box">
    <span class="progress-bar" :style="{width: `${progress}%`}"></span>
  </div>
</div>
</template>
<script>
import request from 'Network/request'
import { addResizeListener, removeResizeListener } from 'Utils/handle-resize'

export default {
  name: 'SpritePreview',
  props: {
    aid: {
      type: Number,
      required: true
    },
    playing: {
      type: Boolean,
      required: true,
      default: false
    }
  },
  data () {
    return {
      preview: null,
      frameLength: 0,
      percentage: 0
    }
  },
  computed: {
    sprite () {
      if (!this.preview) return ''
      const image = Math.floor(this.frame / 100)
      return {
        backgroundImage: `url(${this.preview.image[image]}@.webp)`,
        backgroundPosition: this.position
      }
    },
    // 从 0 开始
    position () {
      const frame = this.frame % 100
      const xAxis = frame % 10
      const yAxis = Math.floor(frame / 10)
      return `-${xAxis * 100}% -${yAxis * 100}%`
    },
    frame () {
      // if (!this.progress) return 0
      // const index = this.preview.index
      // // 根据 progress 的值，在 index 数组中查询对应的 key，使用二分法
      // let left = 1
      // let right = index.length - 1
      // let mid = 0
      // while (right >= left) {
      //   mid = Math.floor((left + right) / 2)
      //   if (index[mid] < this.progress) left = mid + 1
      //   else right = mid - 1
      // }
      // return right - 1
      return Math.floor(this.percentage * this.frameLength)
    },
    progress () {
      return this.percentage * 100
    }
  },
  methods: {
    handleMouseMove ({ layerX }) {
      this.percentage = layerX / this.width
    },
    async loadPreview () {
      this.preview = await request('video.index.preview_pictures', { params: { aid: this.aid } })
      this.frameLength = this.preview.index.length
    },
    handleResize ({ width }) {
      this.width = width
    }
  },
  watch: {
    playing (val) {
      if (val && !this.preview) this.loadPreview()
    }
  },
  mounted () {
    addResizeListener(this.$el, this.handleResize)
  },
  beforeDestroy () {
    removeResizeListener(this.$el, this.handleResize)
  }
}

</script>
<style lang="less" scoped>
.sprite-preview {
  position: relative;
  .blocking(100%, 100%);
  // 未来能把单独的图片显示出来，需要将背景图片放大至容器的10倍（因为一排有10张）
  background-size: 1000%;
  background-color: #000000;
  .progress-box {
    position: absolute;
    left: 0;
    right: 0;
    width: auto;
    height: 10px;
    border-width: 4px 8px;
    border-color: #000000;
    border-style: solid;
    background: #444444;
    .progress-bar{
      .blocking(100%, 2px);
      background-color: #fff;
      transition: width .12s;
    }
  }
}
</style>
