<template>
<div class="card-view">
  <header class="card-view__title">
    <div>
      <a href="#" target="_blank" class="card-view__title-text">
        <slot name="card-title"></slot>
      </a>
    </div>
    <div class="card-view__title-options">
      <slot name="card-options">
        <button class="card-view__title-btn">
          <i :class="['bilifont', 'bili-icon_caozuo_huanyihuan', {'loading': loading}]"></i>换一换
        </button>
        <a href="#" target="_blank" class="card-view__title-more card-view__title-btn">
          更多<i class="bilifont bili-icon_caozuo_qianwang"></i>
        </a>
      </slot>
    </div>
  </header>
  <main class="card-view__panel">
    <slot></slot>
  </main>
</div>
</template>

<script>
export default {
  name: 'CardView',
  data () {
    return {
      loading: false
    }
  }
}
</script>
<style lang="less" scoped>
@keyframes rotating {
  from {
    transform: rotate(0);
  }
  50% {
    transform: rotate(-180deg);
  }
  to {
    transform: rotate(-360deg);
  }
}
.loading {
  animation: 1s linear rotating infinite;
}
.card-view {
  background-color: #fff;
  @media screen {
    @media (max-width: @screen-size-wide) {
      width: 1070px;
    }
    @media (max-width: @screen-size-middle) {
      width: 854px;
    }
    @media (max-width: @screen-size-micro) {
      width: 710px;
    }
  }
  &__title {
    .blocking(100%, 36px, flex);
    align-items: center;
    justify-content: space-between;
    font-size: 20px;
    line-height: 36px;
    margin-bottom: 16px;

    &-icon {
      margin-right: 6px;
    }

    &-btn {
      .blocking(auto, 22px, flex);
      padding: 0 7px;
      justify-content: center;
      align-items: center;
      background-color: #fff;
      border: 1px solid silver;
      border-radius: 2px;
      text-align: center;
      font-size: @font-size-small;
      color:#505050;
      min-width: 52px;
    }

    &-options {
      .blocking(auto, 22px, flex);
    }

    &-more {
      margin-left: 12px;
    }
  }

  &__panel {
    .blocking(100%, 404px, flex);
    .flexing(wrap, space-between, space-between, space-between);
    @media screen and (max-width: @screen-size-micro) {
      height: 360px;
    }
  }
}

</style>
