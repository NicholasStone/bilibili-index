<template>
  <div class="timeline-dialog">
    <div class="tabbar w-100">
      <div
        class="tabbar-item"
        v-for="({text, active}, index) in tabs"
        :key="text"
        :class="{'tabbar-item__active': currentTab === index}"
        @click="handleClick(index)"
      >{{ currentTab === index ? active : text }}</div>
    </div>
    <div class="w-100 h-100 content">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Dynamic',
  props: {
    tabs: {
      type: Array,
      required: true,
      validator: tabs => tabs.every(value => value.text && value.active)
    }
  },
  data () {
    return {
      currentTab: 0
    }
  },
  methods: {
    handleClick (index) {
      this.currentTab = index
      this.$emit('tabChanged', index)
    }
  }
}
</script>

<style lang="less" scoped>
.timeline-dialog {
  width: 370px;
  height: 518px;
  color: #000000;

  .tabbar {
    display: flex;
    height: 49px;
    box-shadow: 0 -1px 1px 1px rgba(0, 0, 0, 0.2);
    padding-left: 20px;
    justify-content: flex-start;
    align-items: center;

    .tabbar-item {
      margin-right: 24px;
      font-size: @font-size-small;
      line-height: 16px;
      color: #999999;
      transition: all ease .3s;

      &:hover {
        color: @bilibili-blue;
      }

      &.tabbar-item__active {
        background-color: @bilibili-blue;
        color: @color-white;
        padding: 4px 10px;
        border-radius: 12px;
        margin: 0 12px 0 -10px;
      }
    }
  }

  .content {
    padding-top: 12px;
    height: 469px;
    overflow-y: scroll;
  }
}
</style>
