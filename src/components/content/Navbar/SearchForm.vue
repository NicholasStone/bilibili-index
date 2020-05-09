<template>
  <div class="search">
    <form class="search-form">
      <input type="text" class="keywords" :placeholder="placeholder" @focus="showRecommend" @blur="hideRecommend"/>
      <div class="search-btn">
        <button class="bilifont bili-icon_dingdao_sousuo submit-search"></button>
      </div>
    </form>
    <ul class="search-focused" v-show="focused">
      <li class="focused-item hover-background-gray"
        v-for="({ keywords }, index) in history"
        :key="keywords">
        <a class="link" :href="link">{{ keywords }}</a>
        <i @click="removeItem(index)" class="bilifont bili-icon_sousuo_yichu cancel-icon"></i>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'SearchForm',
  data () {
    return {
      placeholder: 'av170001',
      history: [
        { keywords: '吹响吧！上低音号' },
        { keywords: '狼与香辛料' },
        { keywords: '紫罗兰永恒花园' },
        { keywords: '某科学的超电磁炮' },
        { keywords: 'Fate/Zero' },
        { keywords: '幻想嘉年华' }
      ],
      focused: false
    }
  },
  methods: {
    removeItem (index) {
      this.history.splice(index, 1)
    },
    showRecommend () {
      this.focused = true
    },
    hideRecommend () {
      this.focused = false
    }
  },
  computed: {
    link (keywords) {
      const urlEncodeKeywords = encodeURI(keywords)
      return `//search.bilibili.com/all?keyword=${urlEncodeKeywords}&from_source=nav_search`
    }
  }
}
</script>

<style lang="less" scoped>
.search {
  .blocking();
  position: relative;

  background-color: @color-white;
  border-radius: 2px;

  .search-form {
    .blocking(100%, 100%, flex);

    .keywords {
      .blocking();
      border: none;
      padding-left: 16px;
    }

    .search-btn {
      width: 48px;
      height: 36px;
      border: none;
      background-color: @color-gray;
      border-radius: 2px;
      .submit-search {
        .blocking(100%, 100%);
        border: none;
      }
    }
  }

  .search-focused {
    .blocking();
    .p-absoluting();
    padding: 10px 0;
    top: 105%;
    background: #fff;
    border: 1px solid #e5e9ef;
    border-radius: 2px;
    box-shadow: 0 2px 4px rgba(0,0,0,.16);

    .focused-item {
      .blocking(100%, 32px, flex);
      .flexing(nowrap, space-between, center, center);
      color: @color-text;
      padding: 6px 10px 6px 16px;

      a.link {
        display: inline-block;
        max-width: 90%;
        .line-breaking()
      }
    }
  }
}
</style>
