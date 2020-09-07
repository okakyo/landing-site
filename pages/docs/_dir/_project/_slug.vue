<template>
  <article-window :page="page" :doc-lists="docLists" />
</template>
<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import ArticleWindow from '@/components/templates/specification/ArticleWindow.vue'

import axios from 'axios'

const apiMeta = axios.create({
  withCredentials: process.env.NODE_ENV !== 'production',
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
    'Access-Control-Allow-Origin': '*',
  },
  timeout: 20000,
})

export default defineComponent({
  name: 'question',
  layout: 'doc',
  async asyncData({ $content, params, $axios }) {
    const page = await $content(
      `/${params.dir}/${params.project}`,
      params.slug
    ).fetch()
    const docLists = await $content('projects/about')
      .only(['title', 'thumbnail', 'slug', 'dir'])
      .fetch()
    const getInfo = await apiMeta.get('https://github.com/okakyo/landing-site')
    console.log(getInfo.headers)
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
