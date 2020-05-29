<template>
<div class="wrap content-section clear-fix">
  <div class="card-view"></div>
  <div class="side-view"></div>
</div>
</template>

<script>
export default {
  name: 'ContentSection'
}
</script>

<style type="less" scoped>
.content-section {
  .card-view {
    @media screen and (max-width: @screen-size-wide) {
      width: 1070px;
    }

    @media screen and (max-width: @screen-wide-middle) {
      width:854px;
    }

    @media screen and (max-width: @screen-wide-micro) {
      width: 710px;
      height: 360px;
    }
  }
  .side-view {
    width: 320px;
  }
}
</style>
