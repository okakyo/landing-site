<template>
  <article-window :page="page" :doc-lists="docLists" />
</template>
<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import ArticleWindow from '@/components/templates/specification/ArticleWindow.vue'
export default defineComponent({
  name: 'SamplePage',
  layout: 'doc',
  async asyncData({ $content, params }) {
    const page = await $content('example', params.slug).fetch()
    const docLists = await $content('about')
      .only(['title', 'thumbnail', 'slug'])
      .limit(5)
      .fetch()
    return {
      page,
      docLists,
    }
  },
  components: {
    ArticleWindow,
  },
})
</script>
