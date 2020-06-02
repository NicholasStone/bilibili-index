<template>
  <div class="danmaku-container">
    <danmaku v-for="(d, i) in danmaku"
             :class="`rail-${i % danmakuRails}`"
             :key="`${d}-${i}`"
             :trigger="i === launch">
      {{ d }}
    </danmaku>
  </div>
</template>
<script>
import Danmaku from './Danmaku'
import { randomNumber } from 'Utils/utils'
import request from 'Network/request'
export default {
  name: 'DanmakuScreen',
  props: {
    aid: {
      type: Number,
      required: true
    },
    // 轨道
    rails: Number,
    // 上边距
    padding: {
      type: Number,
      default: 8
    },
    // 开火！！
    fire: {
      type: Boolean,
      default: false,
      required: true
    }
  },
  components: {
    Danmaku
  },
  data () {
    return {
      danmaku: null,
      timeout: null,
      currLaunch: 0
    }
  },
  computed: {
    danmakuRails () {
      if (this.rails) return this.rails
      // todo: 根据容器高度自动判断弹幕轨道数
      return 10
    },
    // 要发射的弹幕
    launch: {
      get () {
        return this.currLaunch
      },
      set (val) {
        this.currLaunch = val >= this.danmaku.length ? 0 : val
      }
    }
  },
  methods: {
    // 发送弹幕
    async openFire () {
      if (!this.danmaku) await this.loadDanmaku()
      this.launch++
      this.timeout = setTimeout(this.openFire, randomNumber(1000, 2500))
    },
    ceasefire () {
      clearTimeout(this.timeout)
    },
    async loadDanmaku () {
      const data = await request('video.index.danmaku', { params: { aid: this.aid } })
      this.danmaku = Object.values(data)
    }
  },
  watch: {
    fire (val) {
      val ? this.openFire() : this.ceasefire()
    }
  }
}
</script>
<style lang="less" scoped>
  .danmaku-container {
    .blocking(100%, 100%, block);
    position: relative;
    overflow: hidden;

    .rail-0 {
      top: 8px;
    }

    .rail-1 {
      top: 28px;
    }

    .rail-2 {
      top: 48px;
    }

    .rail-3 {
      top: 68px;
    }

    .rail-4 {
      top: 88px;
    }
  }
</style>
