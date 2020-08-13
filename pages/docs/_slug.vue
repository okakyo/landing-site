<template>
  <v-card outlined min-height="600" class="pa-3">
    <v-card-title class="headline">
      Sample
    </v-card-title>
    <v-card-subtitle>
      {{ page.createdAt | dateParser }}
    </v-card-subtitle>
    <v-divider></v-divider>
    <v-card-text class="ma-3">
      <nuxt-content :document="page" />
    </v-card-text>
  </v-card>
</template>
<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import { dateParser } from '@/libs'
export default defineComponent({
  name: 'question',
  layout: 'doc',
  async asyncData({ $content, params }) {
    const page = await $content('news', params.slug).fetch()
    return {
      page,
    }
  },
  filters: {
    dateParser(date: string) {
      return dateParser(date)
    },
  },
})
</script>
