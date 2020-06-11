<template>
  <div class="container">
    <elevator/>
    <recommendation class="wrap section--mb"/>
    <component
      class="wrap section--mb"
      v-for="section in sections"
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
import { generateSectionId } from 'Utils/utils'
import { UPDATE_SECTION_OFFSET } from 'Index/store/mutation-types'
import { addResizeListener, removeResizeListener } from 'Utils/handle-resize'

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
  },
  methods: {
    getSectionsYOffset () {
      this.sections.map(item => {
        const sectionId = generateSectionId(item.name)
        const el = document.getElementById(sectionId)
        const offset = el.getBoundingClientRect().y + window.pageYOffset
        const height = el.scrollHeight
        this.$store.commit(`sections/${UPDATE_SECTION_OFFSET}`, { name: item.name, offset, height })
      })
    }
  },
  mounted () {
    // this.getSectionsYOffset()
    addResizeListener(this.$el, this.getSectionsYOffset)
  },
  beforeDestroy () {
    removeResizeListener(this.$el, this.getSectionsYOffset)
  }
}
</script>

<style lang="less" scoped>
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
