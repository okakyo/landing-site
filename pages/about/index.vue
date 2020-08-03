<template>
  <div />
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  name: 'aboutIndexPage',
  async asyncData({ $content }) {
    const articleLists = await $content('about').fetch()
    return {
      articleLists,
    }
  },
})
</script>
