<template>
  <div class="navbar">
    <div class="navbar-content">
      <ul class="navbar-links">
        <li class="navbar-link-item">
          <a class="nav-link" href="#">
            <!-- FIXME: 主站两个字字体偏小 -->
            <i class="bilifont bili-icon_dingdao_zhuzhan"></i>主站
          </a>
        </li>
        <li class="navbar-link-item">
          <a class="nav-link" href="#">番剧</a>
        </li>
        <li class="navbar-link-item">
          <a class="nav-link" href="#">游戏中心</a>
        </li>
        <li class="navbar-link-item">
          <a class="nav-link" href="#">直播</a>
        </li>
        <li class="navbar-link-item">
          <a class="nav-link" href="#">会员购</a>
        </li>
        <li class="navbar-link-item">
          <a class="nav-link" href="#">漫画</a>
        </li>
        <li class="navbar-link-item">
          <a class="nav-link" href="#">赛事</a>
        </li>
        <li class="navbar-link-item">
          <i class="bilifont bili-icon_dingdao_xiazaiapp"></i>
          下载APP
        </li>
      </ul>
    </div>
    <div class="navbar-search-box">
      <search-form />
    </div>
    <div class="navbar-user-center"></div>
  </div>
</template>

<script>
import SearchForm from 'Components/common/SearchForm'
export default {
  name: 'Title',
  components: {
    SearchForm
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
  box-shadow: 1px 0 1px 2px rgba(100, 100, 100, 0.1);
  background: transparent;

  padding: 10px 24px;
  align-items: center;
  justify-content: space-between;
  .navbar-content {
    display: flex;
    flex: 1;
    .navbar-links{
      display: flex;
      align-items: center;
      height: 36px;
      .navbar-link-item{
        margin-right: 12px;
      }
      .navbar-link-item,
      .nav-link{
        color: @color-white;
        vertical-align: center;
        line-height: 30px;
        i {
          font-size: @font-size-large;
        }
      }
    }
  }

  .navbar-search-box {
    flex: 1;
    max-width: 500px;
  }
}
</style>
