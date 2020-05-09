<template>
  <div class="vip">
    <h3 class="recommend-title">精彩推荐</h3>
    <div class="recommend">
      <div class="recommend-col">
        <a href="https://account.bilibili.com/account/big" class="content">
          <img class="pic" src="//s1.hdslb.com/bfs/static/jinkela/international-home/asserts/vip-default-banner.png">
          <p class="text">大会员可畅享各种专属内容，还有游戏礼包、个性装扮等你来拿~</p>
        </a>
      </div>
    </div>
    <div class="kakin">
      <button class="kakin-btn">{{ vip ? '续费' : '购买' }}大会员</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Vip',
  data () {
    return {
      vip: true
    }
  }
}
</script>

<style lang="less" scoped>
.vip {
  .blocking(260px);
  padding: 14px;
  background: #ffffff;
  color: @color-text;

  .recommend-title {
    font-size: 14px;
    font-weight: 900;
    margin: 5px 0 12px;
  }

  .recommend {
    display: flex;
    justify-content: space-between;
    .recommend-col {
      flex: 1;

      .content {
        .blocking();
        .pic {
          width: 100%;
          border-radius: 2px;
        }

        .text {
          margin-top: 10px;
          line-height: 18px;
        }
      }
    }
  }

  .kakin {
    margin-top: 20px;
    text-align: center;

    .kakin-btn {
      .blocking(160px, 32px, inline-block);
      background: @bilibili-blue;
      color: @color-white;
      border-radius: 2px;
      cursor: pointer;
    }
  }
}
</style>
