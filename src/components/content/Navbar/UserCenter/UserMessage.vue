<template>
  <div class="message-box">
    <a
      class="message hover-background-gray"
      v-for="{title, link, key} in messageType"
      :key="key"
      :href="link">
      {{ title }}
      <num-bubble v-if="message[key]" :message="message[key]"></num-bubble>
    </a>
  </div>
</template>

<script>
import NumBubble from 'Components/common/NumBubble/NumBubble'
import { mapGetters } from 'vuex'
export default {
  name: 'UserMessage',
  components: {
    NumBubble
  },
  data () {
    return {
      messageType: [
        { key: 'replys', title: '回复我的', link: 'https://message.bilibili.com/#/reply' },
        { key: 'ats', title: '@我的', link: 'https://message.bilibili.com/#/at' },
        { key: 'loves', title: '收到的赞', link: 'https://message.bilibili.com/#/love' },
        { key: 'system', title: '系统通知', link: 'https://message.bilibili.com/#/system' },
        { key: 'whispers', title: '我的消息', link: 'https://message.bilibili.com/#/whisper' }
      ]
    }
  },
  computed: {
    ...mapGetters('navbar', ['message'])
  }
}
</script>

<style lang="less" scoped>
.message-box {
  .blocking(172px);
  padding: 10px 0;
  background: @color-white;
  border-radius: 2px;
  color: @color-text;

  .message {
    .blocking(auto, 36px, flex);
    .flexing(nowrap, space-between, center, center);
    padding: 0 20px;
    line-height: 36px;
    vertical-align: middle;
  }
}
</style>
