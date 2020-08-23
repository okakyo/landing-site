<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12," md="8">
        <v-card outlined min-height="600" class="pa-3">
          <v-card-title class="headline">
            {{ page.title }}
          </v-card-title>
          >
          <v-divider></v-divider>
          <v-card-text class="ma-3">
            <nuxt-content :document="page" />
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import { dateParser } from '@/libs'
export default defineComponent({
  name: 'NewsDetail',
  components: {},
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
