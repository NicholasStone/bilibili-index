<template>
<div class="timeline">
  <a class="timeline__cover" :href="'https://www.bilibili.com/bangumi/play/ss'+anime.season_id">
    <img :src="anime.square_cover" :alt="anime.title">
  </a>
  <div class="timeline__detail">
    <a class="timeline__title hover-text-blue" :href="'https://www.bilibili.com/bangumi/play/ss'+anime.season_id">{{anime.title}}</a>
    <a class="timeline__pub" :href="'https://www.bilibili.com/bangumi/play/ep'+anime.episode_id">{{anime.pub_index}}</a>
  </div>
</div>
</template>
<script>
export default {
  name: 'TimelineCard',
  props: {
    anime: {
      type: Object,
      required: true,
      validator: item => item.season_id && item.square_cover && item.title && item.pub_index && item.episode_id
    }
  }
}
</script>
<style lang="less" scoped>
.timeline{
  .blocking(227px, 70px, flex);
  .flexing(wrap, space-between);
  margin: 0 30px 24px 0;
  @media screen and (max-width: @screen-size-micro) {
    width: 210px;
    margin: 0 20px 24px 0;
  }

  &__cover {
    img {
      .blocking(70px, 70px, inline-block);
      border-radius: 2px;
    }
  }
  &__detail {
    .blocking(145px, 100%);
    font-weight: 500;

    @media screen and (max-width: @screen-size-micro) {
      width: 130px;
    }
  }

  &__title {
    .blocking(100%, 37px);
    margin: 2px 0 12px;
    font-size: 14px;
    .line-breaking(2);
  }

  &__pub {
    font-size: @font-size-small;
    color: @bilibili-blue;
  }
}
</style>
