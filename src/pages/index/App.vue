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
    Navbar,
    Banner,
    MainMenu,
    ContentView
  }
}
</script>

<style lang="less">
.container {
  width: 100%;
  height: 100%;
  background-color: @color-white;
}
</style>
