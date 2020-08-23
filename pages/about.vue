<template>
  <article-window />
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import ArticleWindow from '@/components/templates/specification/ArticleWindow.vue'
export default defineComponent({
  name: 'aboutIndexPage',
  components: {
    ArticleWindow,
  },
})
</script>
