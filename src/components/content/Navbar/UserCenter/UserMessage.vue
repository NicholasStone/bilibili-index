<template>
  <div class="message-box">
    <a
      class="message hover-background-gray"
      v-for="{title, link, count} in messageType"
      :key="title"
      :href="link">
      {{ title }}
      <num-bubble v-if="count" :num="count"></num-bubble>
    </a>
  </div>
</template>

<script>
import NumBubble from 'Components/common/NumBubble/NumBubble'
export default {
  name: 'UserMessage',
  components: {
    NumBubble
  },
  data () {
    return {
      messageType: [
        { title: '回复我的', link: 'https://message.bilibili.com/#/reply', count: 0 },
        { title: '@我的', link: 'https://message.bilibili.com/#/at', count: 2 },
        { title: '收到的赞', link: 'https://message.bilibili.com/#/love', count: 300 },
        { title: '系统通知', link: 'https://message.bilibili.com/#/system', count: 0 },
        { title: '我的消息', link: 'https://message.bilibili.com/#/whisper', count: 0 }
      ]
    }
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
