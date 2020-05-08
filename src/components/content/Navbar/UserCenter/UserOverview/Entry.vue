<template>
  <a @click="handleClick" :href="link" class="entry hover-background-gray" target="_blank">
    <i class="link-icon bilifont" :class="icon"></i>
    <div style="width: 100%">
      <slot></slot>
    </div>
  </a>
</template>

<script>
export default {
  name: 'Entry',
  props: {
    iconType: {
      type: String,
      required: true
    },
    href: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'link'
    }
  },
  methods: {
    handleClick (e) {
      if (this.type === 'link') return
      e.preventDefault()
    }
  },
  computed: {
    icon () {
      return this.iconType
    },
    link () {
      return this.href
    }
  }
}
</script>

<style lang="less" scoped>
.entry {
  display: flex;
  width: 100%;
  align-items: center;
  padding-top: 7px;
  padding-bottom: 7px;

  color: @color-text;

  .link-icon {
    font-size: 24px;
    color: #979797;
    margin-right: 5px;
  }
}
</style>
