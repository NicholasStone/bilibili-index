<template>
  <div class="search">
    <form class="search-form">
      <input type="text" class="keywords" :placeholder="placeholder"/>
      <div class="search-btn">
        <button class="bilifont bili-icon_dingdao_sousuo submit-search"></button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'SearchForm',
  data () {
    return {
      placeholder: 'av170001'
    }
  }
}
</script>

<style lang="less" scoped>
.search {
  position: relative;
  display: block;

  .full-size();
  background-color: @color-white;
  border-radius: 2px;

  .search-form {
    display: flex;
    .full-size();

    .keywords {
      border: none;
      .full-size();
      padding-left: 16px;
    }

    .search-btn {
      width: 48px;
      height: 36px;
      border: none;
      background-color: @color-gray;
      border-radius: 2px;
      .submit-search {
        .full-size();
        border: none;
      }
    }
  }
}
</style>
