<template>
  <article-window
    :page="page"
    :public-lists="publicLists"
    :draft-lists="draftLists"
  />
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
    const docLists = await $content('projects/about')
      .only(['title', 'status', 'thumbnail', 'path', 'slug', 'dir'])
      .fetch()
    const publicLists = docLists.filter((item: any) => item.status === 0)
    const draftLists = docLists.filter((item: any) => item.status !== 0)
    return {
      page,
      publicLists,
      draftLists,
    }
  },
  components: {
    ArticleWindow,
  },
})
</script>
