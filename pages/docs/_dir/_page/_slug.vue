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
    console.log(params.dir)
    const page = await $content(
      `/${params.dir}/${params.page}`,
      params.slug
    ).fetch()
    const docLists = await $content('projects/about')
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
