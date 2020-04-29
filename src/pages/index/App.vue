<template>
  <div class="container">
    <navbar />
    <banner/>
    <content-view />
  </div>
</template>

<script>
import Navbar from 'Components/content/Navbar'
import Banner from 'Components/content/Banner'
import ContentView from './views/ContentView'

export default {
  name: 'App',
  components: {
    Banner,
    ContentView,
    Navbar
  }
}
</script>

<style lang="less">
@import '~Assets/css/base.less';
.container {
  width: 100%;
  height: 100%;
}
</style>
