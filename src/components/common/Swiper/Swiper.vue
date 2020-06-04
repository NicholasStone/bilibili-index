<template>
  <div
    class="scroll-swiper"
    v-on="{mouseenter: clearTimer, mouseleave: setTimer}"
    :style="{height: `${height}px`}">
    <div class="swiper-screens">
      <slot />
    </div>
    <button
      id="prev"
      class="swiper-btn swiper-btn__prev"
      @click="prev"/>
    <button
      id="next"
      class="swiper-btn swiper-btn__next"
      @click="next"/>

    <div
      class="pagination"
      id="pagination">
      <span
        class="pagination-bullet"
        v-for="i in frames.length"
        :key="i"
        :class="{'pagination-bullet__active': currentIndex === i - 1}"
        @click="currentIndex = i - 1"
      />
    </div>
  </div>
</template>

<script>
import { addResizeLiserner, removeResizeLiserner } from 'Common/utils/handle-resize'

export default {
  name: 'Swiper',
  props: {
    height: {
      type: Number,
      default: 150
    },
    autoplay: {
      type: Boolean,
      default: true
    },
    interval: {
      type: Number,
      default: 3000
    }
  },
  data () {
    return {
      frames: [],
      current: 0,
      timer: null
    }
  },
  methods: {
    next () {
      this.currentIndex += 1
    },
    prev () {
      this.currentIndex -= 1
    },
    mountFrames () {
      this.frames = this.$children.filter((child) => child.$options.name === 'SwiperItem')
      this.frames.forEach((item, index) => {
        item.initSwiperItem(index, this.frames.length, this.width, this.height)
      })
    },
    updateFramesLocation (prevIndex = 0) {
      this.frames.forEach((frame) => {
        frame.updateLocation(this.currentIndex, prevIndex)
      })
    },
    setTimer () {
      this.timer = setInterval(() => this.next(), this.interval)
    },
    clearTimer () {
      clearInterval(this.timer)
    },
    updateSize (entry) {
      this.width = entry.width
      this.frames.forEach((frame) => frame.updateSize(entry))
    }
  },
  computed: {
    currentIndex: {
      get () {
        return this.current
      },
      set (val) {
        let newVal = val
        if (newVal >= this.frames.length) {
          newVal %= this.frames.length
        } else if (newVal < 0) {
          newVal += this.frames.length
        }
        this.current = newVal
      }
    }
  },
  watch: {
    current (curr, prev) {
      this.updateFramesLocation(prev)
    }
  },
  mounted () {
    this.mountFrames()
    this.updateFramesLocation()
    this.$nextTick(() => {
      addResizeLiserner(this.$el, this.updateSize)
      this.setTimer()
    })
  },
  beforeDestroy () {
    removeResizeLiserner(this.$el, this.updateSize)
  }
}
</script>

<style lang="less" scoped>

.transition {
  transition-duration: 0.3s;
}

.scroll-swiper {
  position: relative;
  overflow: hidden;
  min-height: 150px;

  .swiper-screens {
    position: relative;
    backface-visibility: hidden;

    .swiper-screen-frame {
      position: relative;
      float: left;
      height: 100%;
      width: 100%;

      &::before{
        content: attr(data-frame-index);
        position: absolute;
        top: 10px;
        left: 0;
        right: 0;
        text-align: center;
        line-height: 36px;
        font-size: 36px;
        color: #666666;
      }
    }
  }

  .swiper-btn {
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto 0;
    width: 75px;
    height: 75px;
    z-index: 2;
    border: none;

    &.swiper-btn__prev {
      border-radius: 0 5px 5px 0;
      left: 0;
      background: center/contain url("~Assets/images/swiper/left.svg") no-repeat;

      &:hover{
          background: center/contain rgba(0, 0, 0, 0.3) url("~Assets/images/swiper/left_hover.svg")
        no-repeat;
      }
    }

    &.swiper-btn__next {
      border-radius: 5px 0 0 5px;
      right: 0;
      background: center/contain url("~Assets/images/swiper/right.svg") no-repeat;

      &:hover{
          background: center/contain rgba(0, 0, 0, 0.3) url("~Assets/images/swiper/right_hover.svg")
        no-repeat;
      }
    }
  }

  .pagination {
    display: flex;
    width: 100px;
    height: 20px;
    position: absolute;
    bottom: 40px;
    left: 0;
    right: 0;
    margin: 0 auto;
    border-radius: 10px;
    background-color: #000000;
    opacity: 0.6;
    z-index: 5;

    justify-content: space-evenly;
    align-items: center;

    .pagination-bullet {
      float: left;
      width: 12px;
      height: 12px;
      background-color: #363636;
      border-radius: 50%;
      border: 2px #777777 solid;
      transition: all ease 0.5s;

      &:hover,
      &.pagination-bullet__active {
        background-color: #eaeaea;
      }
    }
  }
}
</style>
