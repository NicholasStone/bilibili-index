<template>
  <div class="container">
    <elevator ref="elevator"/>
    <recommendation class="wrap section--mb"/>
    <component
      class="wrap"
      v-for="section in sections"
      v-elevator:elevator="section.name"
      :key="section.name"
      :is="section.component || 'ContentSection'"
      :section="section">
    </component>
  </div>
</template>

<script>
import ContentSection from 'Index/components/ContentSection'
import Recommendation from 'Index/components/Recommendation'
import Elevator from 'Index/components/Elevator'

export default {
  components: {
    Elevator,
    Recommendation,
    ContentSection
  },
  computed: {
    sections () {
      return this.$store.getters['sections/categories']
    }
  }
}
</script>

<style lang="less">
.container {
  position: relative;
  width: 100%;
  height: auto;
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
