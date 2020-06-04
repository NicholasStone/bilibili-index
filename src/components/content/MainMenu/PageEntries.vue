<template>
  <div class="page-entries">
    <a href="/" class="link">
      <div class="circle color-red">
        <i class="bilifont bili-icon_fenqudaohang_shouye"></i>
      </div>
      <p>首页</p>
    </a>
    <a href="https://t.bilibili.com/" class="link">
      <div class="circle color-yellow">
        <i class="bilifont bili-icon_dingdao_dongtai"></i>
        <div class="cover-image">
          <img :src="dynamic_cover">
        </div>
      </div>
      <p>动态</p>
    </a>
    <a href="https://www.bilibili.com/ranking" class="link">
      <div class="circle color-blue">
        <i class="bilifont bili-icon_fenqudaohang_paihangbang"></i>
      </div>
      <p>排行榜</p>
    </a>
    <a href="https://www.bilibili.com/v/channel" class="link">
      <div class="circle color-green">
        <i class="bilifont bili-pindao"></i>
      </div>
      <p>频道</p>
    </a>
  </div>
</template>

<script>
export default {
  name: 'PageEntries',
  data () {
    return {
      dynamic_cover: '/cdn/http://i1.hdslb.com/bfs/face/aaf33dced1941af0946f37c62f4b48fcaba9c9a2.jpg@48w_48h.webp'
    }
  }
}
</script>

<style lang="less" scoped>
.color-red {
  background-color: #ff5c7c;
}

.color-yellow {
  background-color: #fcba2a;
}

.color-blue {
  background-color: @bilibili-blue;
}

.color-green {
  background-color: #6dc781;
}

.page-entries {
  .blocking(auto, 68px, flex);

  a.link {
    .blocking(64px, 68px);
    text-align: center;

    @media screen {
      @media (max-width: @screen-size-wide) {
        width: 58px;
      }
      @media (max-width: @screen-size-middle) {
        width: 50px;
      }
    }

    .circle{
      .blocking(36px, 36px, flex);
      justify-content: center;
      align-items: center;
      position: relative;
      border-radius: 50%;
      line-height: 36px;
      text-align: center;
      margin: 0 auto 4px;

      .cover-image {
        .p-absoluting(0, 0, 0, 0);

        img{
          width: 100%;
          height: 100%;
          border-radius: 50%;
        }
      }

      i {
        color: @color-white;
        font-size: 28px;
      }
    }
  }
}
</style>
