<template>
  <div class="container">
    <card-view :section-name="category[1].name">
      <template v-slot:title>
        <svg-icon :icon="category[1].icon" :width="36" style="margin-right: 6px"/>
        {{category[1].title}}
      </template>
    </card-view>
  </div>
</template>

<script>
import CardView from 'Index/components/ContentSection/CardView'
import { mapGetters } from 'vuex'
// import Playground from 'Index/components/Playground'
export default {
  name: 'Content',
  components: {
    // Playground
    CardView
  },
  computed: {
    ...mapGetters('sections', ['category'])
  }
}
</script>

<style lang="less" scoped>
.container {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f0f0f0;
  .content {
    border-radius: 4px;
    background-color: white;
  }
}
</style>
