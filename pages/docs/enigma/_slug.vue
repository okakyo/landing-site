<template>
  <div>
    <doc-nav-list :nav-lists="docLists" />
    <v-row>
      <v-col cols="12" sm="10" md="9" xl="8">
        <v-card outlined min-height="600" class="pa-3">
          <v-card-title class="headline">
            {{ page.title }}
          </v-card-title>
          <v-card-subtitle>
            {{ page.createdAt | dateParser }}
          </v-card-subtitle>
          <v-divider></v-divider>
          <nuxt-content class="ma-3 pa-3" :document="page" />
        </v-card>
      </v-col>
      <v-col :hidden="$vuetify.breakpoint.smAndDown" md="3" xl="4">
        <v-list>
          <v-list-item>
            <v-list-item-content>
              sample-1
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-content>
              sample-2
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-col>
    </v-row>
  </div>
</template>
<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import { dateParser } from '@/libs'
import DocNavList from '~/components/molecules/lists/nav/DocNavList.vue'
export default defineComponent({
  name: 'question',
  layout: 'doc',
  async asyncData({ $content, params }) {
    const page = await $content('about', params.slug).fetch()
    const docLists = await $content('about')
      .only(['title', 'thumbnail', 'slug'])
      .limit(5)
      .fetch()
    return {
      page,
      docLists,
    }
  },
  components: {
    DocNavList,
  },
  filters: {
    dateParser(date: string) {
      return dateParser(date)
    },
  },
})
</script>
