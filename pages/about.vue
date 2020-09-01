<template>
  <v-container>
    <about-content :page="page" />
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import AboutContent from '@/components/templates/specification/AboutContent.vue'

export default defineComponent({
  name: 'aboutIndexPage',
  components: {
    AboutContent,
  },
  async asyncData({ $content }) {
    const page = await $content('index', 'About').fetch()
    return { page }
  },
})
</script>
