<template>
<div class="elevator">
  <div class="elevator__mask"></div>
  <div class="elevator__2233"></div>
  <div class="elevator__hat"><i class="ear bilifont bili-icon_youdaohang_xiaodianshitianxian"></i></div>
  <ul class="elevator__floors">
    <li v-for="item in categories" :key="item.name" class="item hover-highlight-blue">
      {{item.title}}
    </li>
  </ul>
  <div class="elevator__sort hover-highlight-blue"><i class="bilifont bili-icon_youdaohang_paixu"></i></div>
  <div class="elevator__back-top hover-highlight-blue"><i class="bilifont bili-general_pullup_s"></i></div>
</div>
</template>
<script>
import Draggable from 'vuedraggable'

export default {
  name: 'Elevator',
  component: {
    Draggable
  },
  data () {
  },
  computed: {
    categories: {
      set (val) {

      },
      get () {
        return this.$store.getters['sections/categories']
      }
    }
  }
}
</script>
<style lang="less" scoped>
.hover-highlight-blue:hover {
  background-color: @bilibili-blue;
  color: @color-white;
}

.elevator {
  width: 56px;
  margin-left: 85%;
  margin-bottom: -15%;
  position: sticky;
  top: 100px;
  background-color: transparent;
  font-size: @font-size-small;
  z-index: 100;
  &__mask {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #000000;
    opacity: .7;
    z-index: -1;
  }
  &__hat {
    position: absolute;
    top: -10px;
    width: 100%;
    text-align: center;
    z-index: 2;
    .bilifont{
      font-size: @font-size-small;
    }
  }
  &__floors{
    width: 100%;
    padding: 6px 0;
    border-radius: 10px 10px 0 0;
    border: 1px solid @color-gray;
    background: #ffffff;
    z-index: 2;
    .item {
      .blocking(100%, 24px);
      line-height: 24px;
      text-align: center;
      transition: all 200ms;
    }
  }
  &__back-top,
  &__sort {
    .blocking(100%, 32px);
    background-color: @color-white;
    line-height: 32px;
    text-align: center;
    border: 1px solid @color-gray;
    border-top: none;
    color: @color-deep-gray;
    z-index: 2;
    &--on {
      background-color: @bilibili-blue;
      color: white;
    }
  }
  &__back-top {
    border-radius: 0 0 10px 10px;
    .bilifont {
      font-size: 26px;
    }
  }
  &__2233 {
    .blocking(210px, 630px);
    position: absolute;
    top: -20px;
    right: -15px;
    padding: 40px;
    background: url("~Assets/images/tab2233.png") rgba(255, 255, 255, .7) no-repeat 16px 20px;
    border-radius: 2px;
    z-index: -1;
  }
}
</style>
