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
        <v-list dense>
          <v-list-item
            v-for="(item, i) in page.toc"
            :key="i"
            nuxt
            link
            :to="'/docs/' + page.slug + '#' + item.id"
          >
            <v-list-item-content>
              {{ item.text }}
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
  name: 'Article',
  props: {
    page: {
      type: Array,
      required: true,
    },
    docLists: {
      type: Array,
      required: true,
    },
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
