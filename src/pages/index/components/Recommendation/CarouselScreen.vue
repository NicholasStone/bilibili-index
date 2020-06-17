<template>
  <carousel class="carousel-screen" ref="carousel">
    <carousel-item v-for="{img, blink, title} in content" :key="title">
      <a :href="blink" class="carousel-content bottom-shadow">
        <img
          class="carousel-content__image"
          :src="img"
          :alt="title">
        <span class="carousel-content__title">{{title}}</span>
      </a>
    </carousel-item>
    <slot></slot>
  </carousel>
</template>
<script>
import { Carousel, CarouselItem } from 'Components/common/Carousel'

export default {
  name: 'CarouselScreen',
  inheritAttrs: false,
  props: {
    content: {
      type: Array,
      validator: arr => arr.every(item => item.img && item.blink && item.title)
    }
  },
  components: {
    Carousel,
    CarouselItem
  },
  watch: {
    content (val) {
      // 由于异步数据加载，必须重新挂载
      if (val) this.$nextTick(() => this.$refs.carousel.reload())
    }
  }
}
</script>
<style lang="less" scoped>
.carousel-screen {
  .blocking(100%, 100%);
}
.carousel-content {
  .blocking(100%, 100%);
  position: relative;
  &__image {
    .blocking(100%, 100%);
  }

  &__title {
    .blocking(70%, auto);
    .p-absoluting(auto, 12px, 10px);
    color: @color-gray;
    .line-breaking();
    font-size: @font-size-normal;
    line-height: @font-size-normal;
    z-index: 10;
  }
}
</style>
