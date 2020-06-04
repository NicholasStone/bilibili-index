<template>
  <div class="playground">
    <div class="content">
      <recommendation class="wrap"></recommendation>
    </div>
  </div>
</template>
<script>
import Recommendation from 'Index/components/Recommendation'
export default {
  name: 'Playground',
  components: { Recommendation }
}
</script>
<style lang="less" scoped>
.playground {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f0f0f0;

  .content {
    background-color: white;
  }
}
</style>
