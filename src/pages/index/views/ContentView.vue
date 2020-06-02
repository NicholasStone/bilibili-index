<template>
  <div class="container">
    <playground></playground>
  </div>
</template>

<script>
import Playground from 'Index/components/Playground'
export default {
  name: 'Content',
  components: {
    Playground
  }
}
</script>

<style lang="less" scoped>
.container {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f0f0f0;
}
</style>
