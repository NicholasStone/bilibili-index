<template>
  <div class="user-overview">
    <div class="overview-wrap avatar">
      <a href="#" class="avatar-link"></a>
    </div>
    <div class="overview-wrap overview"></div>
    <div class="follows"></div>
    <div class="overview-wrap entries"></div>
    <div class="overview-wrap language"></div>
    <div class="overview-wrap sign-out"></div>
  </div>
</template>

<script>
export default {
  name: 'user-overview',
  data () {
    return {
      username: 'Nicholas-',
      bigMember: true,
      level: 5,
      exp: 26893,
      coin: 20.8,
      bCoin: 5,
      following: 560,
      followers: 7,
      dynamic_count: 215,
      lang: 'zh-CN'
    }
  }
}
</script>

<style lang="less" scoped>
.overview-wrap {
  margin: 0 20px;
}

.user-overview {
  .blocking(280px);
  .avatar {
    .p-absoluting()
  }
}
</style>
