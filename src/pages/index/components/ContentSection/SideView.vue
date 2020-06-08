<template>
<div class="side-view">
  <header class="side-view__title">
    <slot name="title">
      排行榜
      <a href="#" class="side-view__title-btn">
        更多<i class="bilifont bili-icon_caozuo_qianwang"></i>
      </a>
    </slot>
  </header>
  <main class="side-view__ranking">
    <slot></slot>
  </main>
</div>
</template>
<script>
export default {
  name: 'SideView'
}
</script>
<style lang="less" scoped>
.side-view {
  .blocking(320px, 100%);
  background-color: #fff;
  @media screen and (max-width: @screen-size-micro) {
    width: 265px;
  }

  &__title {
    .blocking(100%, 36px, flex);
    align-items: center;
    justify-content: space-between;
    font-size: 20px;
    line-height: 36px;
    margin-bottom: 16px;

    &-btn {
      .blocking(auto, 22px, flex);
      padding: 0 7px 0 12px;
      justify-content: center;
      align-items: center;
      background-color: #fff;
      border: 1px solid silver;
      border-radius: 2px;
      text-align: center;
      font-size: @font-size-small;
      color:#505050;
    }
  }

  &--wrap {
    @media screen and (max-width: @screen-size-micro) {
      &:nth-child(n+9) {
        display: none;
      }
    }
  }
}
</style>
