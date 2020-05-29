<template>
<div class="playground" @mouseenter="play = true">
  <div class="content">
    <sprite-preview :aid="83251570" :playing="play"/>
  </div>
</div>
</template>
<script>
import SpritePreview from 'Components/common/VideoPreview/SpritePreview'

export default {
  name: 'Playground',
  components: {
    SpritePreview
  },
  data () {
    return {
      play: false
    }
  },
  methods: {
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
    width: 206px;
    height: 116px;
    border-radius: 4px;
    background-color: white;
  }
}
</style>
