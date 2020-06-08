<template>
  <content-section :section="section" :rank-list-api="{url: 'video.index.publication_ranking', params}">
  </content-section>
</template>
<script>
import ContentSection from 'Index/components/ContentSection'
export default {
  name: 'FilmAndTVShows',
  props: {
    section: {
      type: Object,
      required: true
    }
  },
  components: { ContentSection }
}
</script>
<style scoped>
</style>
