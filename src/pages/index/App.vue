<template>
  <div class="container">
<!--    <navbar />-->
<!--    <banner/>-->
<!--    <main-menu />-->
<!--    <content-view />-->
<!--    <customer-service />-->
<!--    <index-footer />-->
    <playground />
  </div>
</template>

<script>
/* eslint-disable vue/no-unused-components */
import Navbar from 'Components/content/Navbar'
import Banner from 'Components/content/Banner'
import MainMenu from 'Components/content/MainMenu'
import ContentView from 'Index/views/ContentView'
import Playground from 'Index/components/Playground'
import IndexFooter from 'Index/views/IndexFooter'
import CustomerService from 'Index/views/CustomerService'

export default {
  name: 'App',
  components: {
    CustomerService,
    Playground,
    Navbar,
    Banner,
    MainMenu,
    ContentView,
    IndexFooter
  }
}
</script>

<style lang="less">
@import '~Assets/css/base.less';
.container {
  width: 100%;
  height: 100%;
  background-color: @color-white;
}
</style>
