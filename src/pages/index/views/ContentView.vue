<template>
  <div class="content">
    <link-item>
      <template v-slot:link><span style="color: #212121">游戏中心</span></template>
      <template v-slot:dialog>
        <div style="width: 300px; height: 100px; padding: 20px">dialog</div>
      </template>
    </link-item>
  </div>
</template>

<script>
// @ is an alias to /src
import LinkItem from 'Components/content/Navbar/common/LinkItem'

export default {
  name: 'Content',
  components: {
    LinkItem
  }
}
</script>

<style lang="less" scoped>
.content {
  position: relative;
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f0f0f0;
}
</style>
