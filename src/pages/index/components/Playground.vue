<template>
<div class="playground" @mouseenter="play = true">
  <div class="content">
    <content-section>
    </content-section>
  </div>
</div>
</template>
<script>
import ContentSection from 'Index/components/ContentSection'
export default {
  name: 'Playground',
  components: {
    ContentSection
  }
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
