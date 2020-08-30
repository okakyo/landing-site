<template>
  <article-window :page="page" :doc-lists="docLists" />
</template>
<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import ArticleWindow from '@/components/templates/specification/ArticleWindow.vue'
export default defineComponent({
  name: 'question',
  layout: 'doc',
  async asyncData({ $content, params }) {
    const page = await $content(
      `/${params.dir}/${params.project}`,
      params.slug
    ).fetch()
    const docLists = await $content('projects', { deep: true })
      .only(['title', 'thumbnail', 'slug', 'dir'])
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
