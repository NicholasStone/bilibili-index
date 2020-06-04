<template>
  <div class="container">
  <recommendation class="wrap section--mb"/>
    <content-section
      class="wrap section--mb"
      v-for="section in sections"
      :key="section.name"
      :section="section"></content-section>
  </div>
</template>

<script>
import ContentSection from 'Index/components/ContentSection'
import Recommendation from 'Index/components/Recommendation'
export default {
  name: 'Content',
  components: {
    Recommendation,
    ContentSection
  },
  computed: {
    sections () {
      return this.$store.getters['sections/category']
    }
  }
}
</script>

<style lang="less" scoped>
.container {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  background: #ffffff;
  .section--mb {
    margin-bottom: 40px;
  }
}
</style>
