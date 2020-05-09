<template>
  <div class="user-overview">
    <section class="overview-wrap avatar-container">
      <avatar :decoration="true" :size="60"/>
    </section>
    <section class="overview divide"
      @mouseenter="handleMouseEnter('notice')"
      @mouseleave="handleMouseLeave">
      <p class="username" :class="{'high-light-pink': vip}">{{ username }}</p>
      <p class="vip" v-if="vip">{{ vipType }}</p>
      <div class="overview-wrap exp-container">
        <div class="level-info">等级 {{level}} <small class="exp">{{ expStage }}</small></div>
        <a class="progress-bar">
          <span class="progress" :style="{width: progress}"></span>
        </a>
        <transition name="panel">
          <div v-show="showDialog('notice')" class="panel notice-panel">
            <p class="notice-title">作为LV{{ level }}, 你可以: </p>
            <p class="level-right">
              1、购买邀请码（1个/月）<br>
              2、发射个性弹幕（彩色、高级、顶部、底部）<br>
              3、参与视频互动（评论、添加tag）<br>
              4、投稿成为偶像
            </p>
            <a href="//www.bilibili.com/blackboard/help.html#%E4%BC%9A%E5%91%98%E7%AD%89%E7%BA%A7%E7%9B%B8%E5%85%B3?id=7251c4ab69d44a8ebbbd276dea46d790" target="_blank" class="notice-link">会员等级相关说明<svg-icon icon="right-arrow" /></a>
          </div>
        </transition>
      </div>
    </section>
    <div class="overview-wrap account clear-fix">
      <div class="coins hover-blue">
        <svg-icon icon="coin" class="icon"/>
        <span class="count">{{ coin }}</span>
      </div>
      <div class="coins hover-blue">
        <svg-icon icon="b-coin" class="icon"/>
        <span class="count">{{ bCoin }}</span>
      </div>
      <a href="#" class="binding">
        <i class="bilifont icon unbind"></i>
      </a>
      <a href="#" class="binding">
        <i class="bilifont icon binded"></i>
      </a>
    </div>
    <section class="follows divide">
      <a class="follows-item hover-blue" href="https://space.bilibili.com/22834699/fans/follow">
        <small class="title">关注</small><span class="num">{{ following }}</span>
      </a>
      <a class="follows-item hover-blue" href="https://space.bilibili.com/22834699/fans/fan">
        <small class="title">粉丝</small><span class="num">{{ followers }}</span>
      </a>
      <a class="follows-item hover-blue" href="https://space.bilibili.com/22834699/dynamic">
        <small class="title">动态</small><span class="num">{{ dynamic_count }}</span>
      </a>
    </section>
    <section class="entries section-container divide">
      <entry
        class="overview-wrap"
        v-for="{link, icon, title} in entries"
        :key="title"
        :icon-type="icon"
        :href="link">
        {{ title }}
      </entry>
    </section>
    <section
      class="language section-container divide"
      @mouseenter="handleMouseEnter('lang')"
      @mouseleave="handleMouseLeave">
      <entry class="overview-wrap" icon-type="bili-icon_dingdao_yuyanshezhi" type="container">
        <span>语言: {{ currentLanguage }}</span>
        <i class="bilifont bili-icon_caozuo_qianwang" style="color: #979797; float: right"></i>
      </entry>
      <transition name='panel'>
        <div v-if="showDialog('lang')" class="panel language-panel">
          <div
            class="language-panel-item"
            :class="{on: lang === 'zh-Hans'}"
            @click="lang = 'zh-Hans'">
            简体中文
            <i
              v-if="lang === 'zh-Hans'"
              class="bilifont bili-icon_caozuo_xuanzhong"
              style="float:right;"></i>
          </div>
          <div
            class="language-panel-item"
            :class="{on: lang === 'zh-Hant'}"
            @click="lang = 'zh-Hant'">
            繁體中文
            <i
              v-if="lang === 'zh-Hant'"
              class="bilifont bili-icon_caozuo_xuanzhong"
              style="float:right;"></i>
          </div>
        </div>
      </transition>
    </section>
    <section class="sign-out section-container divide">
      <entry class="overview-wrap" icon-type="bili-icon_dingdao_dengchu">
        退出
      </entry>
    </section>
  </div>
</template>

<script>
import SvgIcon from 'Components/common/SvgIcon/SvgIcon'
import Avatar from 'Components/common/Avatar/Avatar'
import Entry from './UserOverview/Entry'
import Hover from '../hover-mixin'
export default {
  name: 'user-overview',
  mixins: [Hover],
  components: {
    Avatar,
    SvgIcon,
    Entry
  },
  data () {
    return {
      username: 'Nicholas-',
      level: 5,
      exp: 26893,
      coin: 21.8,
      bCoin: 5,
      following: 560,
      followers: 7,
      dynamic_count: 215,
      lang: 'zh-Hans',
      vip: 1,
      stage: [200, 1500, 4500, 10800, 28800],
      entries: [
        {
          link: 'https://account.bilibili.com/account/home',
          icon: 'bili-icon_dingdao_gerenzhongxin',
          title: '个人中心'
        },
        {
          link: 'https://member.bilibili.com/v2#/upload-manager/article',
          icon: 'bili-icon_dingdao_tougaoguanli',
          title: '投稿管理'
        },
        {
          link: 'https://pay.bilibili.com/',
          icon: 'bili-icon_dingdao_qianbao',
          title: 'B币钱包'
        },
        {
          link: 'https://show.bilibili.com/orderlist',
          icon: 'bili-icon_dingdao_dingdanzhongxin',
          title: '订单中心'
        },
        {
          link: 'https://link.bilibili.com/p/center/index',
          icon: 'bili-icon_dingdao_zhibozhongxin',
          title: '直播中心'
        },
        {
          link: 'https://www.bilibili.com/v/cheese/mine',
          icon: 'bili-icon_dingdao_cheese',
          title: '我的课程'
        }
      ]
    }
  },
  computed: {
    vipType () {
      return ['大会员', '年度大会员'][this.vip]
    },
    expStage () {
      return `${this.exp}/${this.stage[this.level - 1]}`
    },
    progress () {
      return this.exp / this.stage[this.level - 1] * 100 + '%'
    },
    currentLanguage () {
      const lang = {
        'zh-Hans': '简体中文',
        'zh-Hant': '繁體中文'
      }

      return lang[this.lang]
    }
  }
}
</script>

<style lang="less" scoped>
.overview-wrap {
  padding-left: 20px;
  padding-right: 20px;
}

.section-container{
  padding-top: 7px;
  padding-bottom: 7px;
}

.divide {
  border-bottom: 1px solid @color-light-gray;
}

.hover-blue:hover {
  color: @bilibili-blue !important;
}

.link-icon {
  font-size: 24px;
  color: #979797;
  margin-right: 5px;
}

.panel {
  .blocking(240px);
  .p-absoluting(0, 279px);
  padding: 15px;
  background: @color-white;
  border-radius: 2px;
  box-shadow: 0 3px 6px 0 rgba(0,0,0,.2);
}

.panel-enter,
.panel-leave-to {
  opacity: 0
}

.panel-enter-active,
.panel-leave-active {
  transition: .3s ease;
}

.user-overview {
  .blocking(280px);
  min-height: 492px;
  position: relative;
  border: solid 1px transparent;

  .avatar-container{
    .blocking(60px, 60px);
    .p-absoluting(-30px, 88px);
    border-radius: 50%;
  }

  .overview{
    margin-top: 52px;

    .username {
      text-align: center;
      font-weight: 600;
      font-size: 16px;
    }

    .vip {
      .blocking(66px);
      margin: 4px auto 0;
      background: @bilibili-pink;
      border-radius: 2px;
      color: @color-white;
      font-size: @font-size-small;
      text-align: center;
    }

    .exp-container {
      position: relative;
      .level-info {
        margin: 20px 0 5px;
        .exp {
          float: right;
          color: @color-deep-gray;
        }
      }

      .progress-bar {
        .blocking(100%, 2px);
        background: @color-light-gray;

        .progress {
          display: block;
          height: 2px;
          background: @color-light-origin;
          margin: 4px 0;
        }
      }

      .notice-panel {
        .notice-title,
        .lever-right {
          margin-bottom: 12px;
        }

        .notice-link {
          color: @bilibili-blue;
        }
      }
    }

  }

  .account {
    padding-top: 14px;
    padding-bottom: 14px;

    .icon {
      width: 20px;
      height: 20px;
      font-size: 20px;
    }

    .coins {
      display: flex;
      align-items: center;
      float: left;
      .count {
        margin: 0 29px 0 8px;
      }
    }

    .binding {
      margin-left: 4px;
      float: right;

      .binded {
        color: @bilibili-blue;
      }

      .unbind {
        color: silver;
      }
    }
  }

  .follows {
    .blocking(100%, 58px, flex);
    .flexing();

    .follows-item {
      .blocking(auto, auto, flex);
      .flexing(nowrap, center, center, center, column);
      flex: 1;
      line-height: 100%;
      &:not(:last-child) {
        border-right: 1px solid @color-light-gray;
      }

      .title {
        font-size: @font-size-small;
        color: @color-deep-gray;
      }

      &:hover>.title {
        color: @bilibili-blue;
      }

      .num {
        font-size: @font-size-big;
        font-weight: 700;
        line-height: 20px;
      }

    }
  }

  .language {
    position: relative;
    .language-panel{
      padding: 8px 0;
      // font-size: @font-size;
      line-height: 22px;

      .language-panel-item {
        width: 100%;
        padding: 8px 15px;

        &.on {
          color: @bilibili-blue
        }
      }
    }
  }
}

</style>
