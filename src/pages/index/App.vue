<template>
  <div class="container">
    <banner/>
    <content-view />
  </div>
</template>

<script>
import Banner from 'Components/content/Banner'
import ContentView from './views/ContentView'

export default {
  name: 'App',
  components: {
    Banner,
    ContentView
  }
}
</script>

<style lang="less">
@import '~Assets/css/base.less';
.container {
  width: 100%;
  height: 100%;
  background-color: #999999;
}
</style>
