<template>
  <div class="container">
    <navbar />
    <banner/>
    <main-menu />
    <content-view />
  </div>
</template>

<script>
import Navbar from 'Components/content/Navbar'
import Banner from 'Components/content/Banner'
import MainMenu from 'Components/content/MainMenu'
import ContentView from './views/ContentView'

export default {
  name: 'App',
  components: {
    Banner,
    Navbar,
    MainMenu,
    ContentView
  }
}
</script>

<style lang="less">
@import '~Assets/css/base.less';
.container {
  width: 100%;
  height: 100%;
  // display: flex;
  // .flexing(nowrap, center, center, center);
}
</style>
