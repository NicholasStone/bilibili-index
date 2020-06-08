<template>
<a href="https://www.bilibili.com/v/customer-service" target="_blank" class="customer-service">联系客服</a>
</template>
<script>
export default {
  name: 'CustomerService'
}
</script>
<style lang="less" scoped>
.customer-service {
  .blocking(28px, 72px);
  padding: 8px 7px;
  position: fixed;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  background: @color-white;
  box-shadow: 0 6px 10px 0 #e7e7e7;
  border: 1px solid @color-gray;
  border-radius: 2px;
  font-size: @font-size-small;
  color: #505050;
  line-height: @font-size-normal;
}
</style>
