<template>
  <div class="navbar" :style="{boxShadow: showShadow}">
    <div class="navbar-content navbar-links">
      <link-list />
    </div>
    <div class="navbar-content navbar-search-box">
      <search-form />
    </div>
    <div class="navbar-content navbar-user-center">
      <user-center />
    </div>
  </div>
</template>

<script>
import SearchForm from './Navbar/SearchForm'
import LinkList from './Navbar/LinkList'
import UserCenter from './Navbar/UserCenter'

export default {
  name: 'Navbar',
  components: {
    LinkList,
    SearchForm,
    UserCenter
  },
  data () {
    return {
      boxShadow: '1px 0 1px 2px rgba(100, 100, 100, 0.1)'
    }
  },
  computed: {
    showShadow () {
      // TODO: 根据路由修改是否显示阴影
      return false
    }
  }
}
</script>

<style lang="less" scoped>
@import "~Assets/css/_variable.less";

.navbar{
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 56px;
  background: transparent;
  z-index: 10;

  padding: 10px 24px;
  align-items: center;
  justify-content: space-between;

  .navbar-content {
    position: relative;
    display: flex;
    flex: 1;
    height: 36px;
  }
  .navbar-links{
    max-width: 440px;
    min-width: 440px;
  }

  .navbar-search-box {
    min-width: 300px;
    max-width: 500px;
  }

  .navbar-user-center {
    max-width: 450px;
    min-width: 450px;
    margin-left: 20px;
  }
}
</style>
