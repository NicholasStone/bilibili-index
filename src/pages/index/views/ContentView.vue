<template>
  <div class="content">
    <div class="item">
      <popout :show="true" position="bottom" :left-distance="0">
        <div style="width: 100px; height: 100px; background: #999999"></div>
      </popout>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Popout from 'Components/common/PopoutDialog'

export default {
  name: 'Content',
  components: {
    Popout
  }
}
</script>

<style lang="less" scoped>
.content {
  position: relative;
  width: 100%;
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f0f0f0;

  .item {
    position: relative;
    width: 50px;
    height: 20px;
    background: #666;
  }
}
</style>
