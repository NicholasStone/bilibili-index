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
        <i class="bilifont bili-icon_fenqudaohang_shouye"></i>
      </div>
      <p>排行榜</p>
    </a>
  </div>
</template>

<script>
export default {
  name: 'PageEntries',
  data () {
    return {
      dynamic_cover: '//i1.hdslb.com/bfs/face/aaf33dced1941af0946f37c62f4b48fcaba9c9a2.jpg@48w_48h.webp'
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

.page-entries {
  .blocking(auto, 68px, flex);

  a.link {
    .blocking(auto, 68px);
    text-align: center;
    width: 68px;

    @media screen and (max-width: 1645px) {
      width: 50px;
    }

    @media screen and (max-width: 1870px) {
      width: 58px;
    }

    .circle{
      .blocking(36px, 36px);
      position: relative;
      border-radius: 50%;
      line-height: 36px;
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
