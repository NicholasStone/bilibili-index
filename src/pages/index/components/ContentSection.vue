<template>
<div class="wrap content-section">
  <div class="section__card-view">
    <card-view :section-name="sectionName">
      <template slot="card-title">
        <svg-icon :icon="section.icon" :width="36"/>
        {{section.title}}
      </template>
    </card-view>
  </div>
  <div class="section__side_view">
    <side-view :section-name="sectionName">
    </side-view>
  </div>
</div>
</template>

<script>
import CardView from 'Index/components/ContentSection/CardView'
import SideView from 'Index/components/ContentSection/SideView'
export default {
  name: 'ContentSection',
  props: {
    section: {
      type: Object,
      required: true
    }
  },
  components: { SideView, CardView },
  data () {
    return {
      // sectionName: 'digital'
    }
  },
  computed: {
    sectionName () {
      return this.section.name
    }
  }
}
</script>

<style type="less" scoped>
.content-section {
  display: flex;
  justify-content: space-between;
}
.section__card-view {
  @media screen {
    @media (max-width: @screen-size-wide) {
      width: 1070px;
    }
    @media (max-width: @screen-wide-middle) {
      width: 854px;
    }
    @media (max-width: @screen-wide-micro) {
      width: 710px;
    }
  }
}
</style>
