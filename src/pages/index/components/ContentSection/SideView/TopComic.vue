<template>
  <div class="comic" v-if="index === 0">
    <div :class="['comic__ranking', index <= 3 ? 'comic__ranking--top3' : 'comic__ranking--others']">{{index + 1}}</div>
    <a class="comic__synopsis hover-text-blue" :href="link" :title="comic.title">
      <div class="comic__cover">
        <img :src="comic.vertical_cover" alt="">
      </div>
      <div class="comic__basic">
        <p class="comic__title comic__title--2lines comic__title--mb hover-text-blue">{{comic.title}}</p>
        <p class="comic__subs">{{tags}}</p>
        <p class="comic__subs">更新至{{comic.last_short_title}}</p>
      </div>
    </a>
  </div>
  <div class="comic" v-else>
    <div :class="['comic__ranking', index <= 3 ? 'comic__ranking--top3' : 'comic__ranking--others']">{{index + 1}}</div>
    <a class="comic__synopsis" :href="link" :title="comic.title">
      <p class="comic__title hover-text-blue">{{comic.title}}</p>
      <p class="comic__subs comic__subs--right">更新至{{comic.last_short_title}}</p>
    </a>
  </div>
</template>
<script>
export default {
  name: 'TopComic',
  props: {
    comic: {
      type: Object,
      required: true
    },
    index: {
      type: Number,
      required: true
    }
  },
  computed: {
    link () {
      return `https://manga.bilibili.com/detail/mc${this.comic.comic_id}`
    },
    tags () {
      const tagArr = this.comic.styles.map((item, index) => {
        if (index > 1) return
        return item.name
      })
      return tagArr.slice(0, 2).join(' ')
    }
  }
}
</script>
<style lang="less" scoped>
.comic {
  .blocking(100%, auto, flex);
  padding: 9px 0;
  justify-content: space-between;
  &__ranking {
    .blocking(18px, 18px);
    line-height: 18px;
    text-align: center;
    font-size: @font-size-normal;
    border-radius: 2px;

    &--top3 {
      background: @bilibili-blue;
      color: @color-white;
    }

    &--others {
      color: @color-deep-gray;
    }
  }
  &__synopsis {
    .blocking(290px, auto, flex);
    justify-content: space-between;
    @media screen and (max-width: @screen-size-micro) {
      width: 235px;
    }
  }
  &__cover {
    position: relative;
    & > img {
      .blocking(112px, 149px);
      border-radius: 2px;
    }
  }
  &__basic {
    .blocking(auto, 100%);
    min-width: 111px;
    margin-left: 12px;
  }
  &__title {
    display: inline-block;
    width: 100%;
    line-height: 20px;
    .line-breaking(1);
    color: @color-text;
    &&--2lines {
      height: 40px;
      .line-breaking(2);
      @media screen and (max-width: @screen-size-micro) {
        width: 111px;
      }
    }
    &&--mb {
      margin-bottom: 10px;
    }
  }
  &__subs {
    .flex-vertical-center();
    font-size: @font-size-small;
    color: @color-deep-gray;
    min-width: 90px;

    &--right {
      justify-content: flex-end;
    }
  }
}

</style>
