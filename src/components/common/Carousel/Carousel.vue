<template>
  <div
    class="scroll-carousel"
    v-on="{mouseenter: clearTimer, mouseleave: setTimer}">
    <div class="carousel-screens">
      <slot/>
    </div>
    <div
      class="pagination"
      id="pagination">
      <span
        class="pagination-bullet"
        v-for="i in frames.length"
        :key="i"
        :class="{'pagination-bullet__active': currentIndex === i - 1}"
        @click="currentIndex = i - 1"/>
    </div>
  </div>
</template>
<script>
import { addResizeListener, removeResizeListener } from 'Utils/handle-resize'

export default {
  name: 'Carousel',
  props: {
    // height: {
    //   type: Number,
    //   default: 150
    // },
    autoplay: {
      type: Boolean,
      default: true
    },
    interval: {
      type: Number,
      default: 5000
    }
  },
  data () {
    return {
      frames: [],
      current: 0,
      timer: null,
      height: 0,
      width: 0
    }
  },
  methods: {
    next () {
      this.currentIndex++
    },
    mountFrames () {
      this.frames = this.$children.filter((child) => child.$options.name === 'CarouselItem')
      this.frames.forEach((item, index) => {
        item.initCarouselItem(index, this.frames.length)
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
    updateSize ({ width, height }) {
      this.width = width
      this.height = height
      this.frames.forEach((frame) => frame.updateSize(width, height))
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
    addResizeListener(this.$el, this.updateSize)
    this.$nextTick(() => {
      this.updateFramesLocation()
      this.setTimer()
    })
  },
  beforeDestroy () {
    removeResizeListener(this.$el, this.updateSize)
  }
}
</script>
<style lang="less">
.scroll-carousel {
  .blocking(100%, 100%);
  position: relative;
  overflow: hidden;
  min-height: 150px;
  min-width: 300px;

  .carousel-screens {
    position: relative;
    backface-visibility: hidden;

    .carousel-screen-frame {
      position: relative;
      float: left;
      height: 100%;
      width: 100%;

      &::before {
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

  .pagination {
    .blocking(100px, 20px, flex);
    .p-absoluting(auto, auto, 12px, 12px);
    z-index: 10;
    justify-content: space-evenly;
    align-items: center;

    .pagination-bullet {
      .blocking(10px, 10px);
      background-color: @color-white;
      border-radius: 50%;
      border: 2px transparent solid;
      transition: all ease 200ms;

      &:hover{
        border-color: @color-white;
        background-color: @bilibili-blue;
        transform: scale(1.3);
      }
      &.pagination-bullet__active {
        border: none;
        background: center/cover no-repeat url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABGdBTUEAALGPC/xhBQAABUlJREFUWAmtVwtMnEUQnitX7g6R1wFtOajSqlBrQULbtJioqK2PiMZEqjatj7S1NmpTGmNUImlr1BhL2hhpmphokzaKtVFBkZooxhCLWNtw+CQtUMSjCKXAyd1x3Mtvfm7/7uX+w5/HJN/t7uzszOz+M7tzBtJJoVDIANHVQBmwClgURjLaYWAIaAdagJMGg6ED7ewJhpOAfUA/MB06BeFNwLypvOBdaRIWxmGiAngZSBNC4JN92EsXxnx00eOn0YkApcTHkS3BSMVWM2UlzBeiom1DZydOpFkw5FbTARhhg7XAOiHcOuih984NU8PfY9Q/HhDsqLYw1UTP56fRxtwkshjVzfOCPcDrcCQkL4pyAMbzIfAVkMuCf4566aWzA1TXO8ZD3WQ1xcGRVKpckU7GeaqZj6BgM5xQd6DOsGYYz0DTCijGa7tHacupi+QORDjNorrp9gUJdPw2G2WYjWLNUXSeECehOgDjZkw0AWtZ8jX7IFXZL3F31pSD+KgrzaEixEiYdsOBA9yXHdiLcRUzj5wfoaew87kkm8VI9rJcsk6exAR0r4YTdiVKsHsbGC+wwbNDHnq6ZW6Ns14HMmbrFb3xYL3NfBGmvPsEZuw6/Q/5ND65EWe1/foUOrxmIe1alkaWOPXweJku+hyBfKxrVMiuw8ZvNYa//SPMre/9l5oHPEJAbdnUl3fk0N22RJW3aUkSlTReoImgypqyY0ImvLLCShuuSZLltvEJcK4rmo+cV72ThagkwxJhnCeLrRZ6IPvqCLlYg1JkQju+f1VhBsVPnhy7/S7wLOfGg7zQ7Q/S133auc45rUWx+EI2HeuqV2bS40tTBItbvhm3IwB/4gE7cAN3fh4aj5nvzQNuGhz3y7lMLl+QTsZwmPU9uTSZ9hdniqhnlgvYAxyEcT9ahfgTZHHP4fYpDK2fYXzoe7/ppR8H3eQNBMl+eZzKmnqpx6XqUZflJcXTd+sX0we3ZMnGGyCwHIb3y8Z5EZ+A4kCfO1oZCwg6A6NrG3vEULOtRJC9WpBOpjiRXOSE4BYYPaG5AEyWHOdJ8wzSitfJ9AXSrO2yV2ZxyG9Api2SmXKfHXAwwxb9jMpyuvrtI14lNZ9r7ScnnukwlaP9A07sANSjEZPM6ONBbmLUOy5kptVyftV0DNOyui460cNfQCGumg4BP8CJgknW5C87cJq7BXjHs/FozBX14eot/95B93+LYEXxEqY1aM/AibcA5eZlBz7lSQQKPbRY38XC8nqpwTFGy+s7qfq3IQoElTued/ki8CucWK9c6Oh0g3FtB4qPm+q7yK/xFug1OJXczTjl90uy5Gf5gAiKg7wwL9lEO/JSp9Ixq7nfsUGJOPuqhQMcIOd4ci/u6yVzFJCsT6Y3izLl3R/CZ3coDqDDUaLUA6m4vxvuzKGU+cI3WcXM+/dkXUUVN6rFNX/yfaxNtQIn6jF+g5n5+BSNd+XQQrP2I8Qy06HNeLo/K81WAh3reLMbYU95eiOqCgQjjz8G+PKgPrwPDyOVWlCSz4S4iKleuYB2ooAJE99Oj8H4J4IR4QAz4QSXSzXAVh4H8UektttJVW2D1Hkln3kqJnHx8Sj+F+zGkRekqoUoBx1Xw8flhVEOiEk48gz67wDKFelHDjf1u4jve64bely+iGooAW9JUZqZ7stOpG0o3aQynFVygJfDuJ0HuglOXAd8COAgIikYDIYueXyhTqdXaQMYa5ATvErAotuoliAUFAI1wF+AHmqHUAWQrqVP5sX8BLKQ3IfSQoxXAfzEMvjJHQH4X8wvQAuOWnng0P9f+g8mO0+PDltmygAAAABJRU5ErkJggg==);
        transform: scale(1.8);
      }
    }
  }
}
</style>
<style lang="less" scoped>
.transition {
  transition-duration: 0.3s;
}
</style>
