<template>
  <div class="playground">
    <div class="content wrap">
      <elevator/>
    </div>
  </div>
</template>
<script>
import Elevator from 'Index/components/Elevator'
export default {
  name: 'Playground',
  components: { Elevator }
}
</script>
<style lang="less" scoped>
.playground {
  position: relative;
  width: auto;
  height: 1000%;
  background: @color-deep-gray;
  margin-top: 300px;
  .content {
    background-color: @color-light-gray;
    height: 100%;
    position: relative;
  }
}
</style>
