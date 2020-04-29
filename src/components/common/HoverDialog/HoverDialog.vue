<template>
  <div class="hover-dialog">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'HoverDialog',
  props: {
    position: {
      type: String,
      default: 'center'
    },
    left: Number,
    top: Number
  }
}
</script>

<style lang="less" scoped>
.hover-dialog {
  position: absolute;
  background-color: #ffffff;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.2) !important;
  border: none;
  border-radius: 2px;
  padding: 0;
  top: 45px;
  left: 50%;
  transform: translateX(-50%);
  box-shadow: 0 3px 6px 0 rgba(0,0,0,0.2);

  &::before {
    content: "";
    position: absolute;
    width: 10px;
    height: 10px;
    top: -5px;
    left: 50%;
    background: #ffffff;
    transform: translateX(-50%) rotate(45deg);
  }
}

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

      &:hover{
        color: @bilibili-blue;
      }

      &.tabbar-item__active {
        background-color: @bilibili-blue;
        color: @color-white;
        padding: 4px 10px;
        border-radius: 12px;
        margin-right: 12px;
      }
    }
  }
}
</style>
