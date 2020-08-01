<template>
  <v-container>
    <v-card flat>
      <v-row justify="center">
        <v-col cols="12," md="8">
          <v-timeline dense align-top>
            <v-timeline-item
              v-for="(page, index) in pages"
              :key="index"
              color="#00cba9"
            >
              <v-card class="mx-5" nuxt :to="page.path" color="#00cba9">
                <v-card-subtitle class="white--text">{{
                  page.updatedAt | dateParser
                }}</v-card-subtitle>
                <v-card-title class="headline white text--primary">{{
                  page.title
                }}</v-card-title>
              </v-card>
            </v-timeline-item>
          </v-timeline>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>
<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import { dateParser } from '@/functions'
export default defineComponent({
  name: 'NewsIndex',
  async asyncData({ $content }) {
    const pages = await $content('news')
      .only(['title', 'slug', 'updatedAt', 'path'])
      .fetch()
    return {
      pages,
    }
  },
  filters: {
    dateParser(date: string) {
      return dateParser(date)
    },
  },
})
</script>
