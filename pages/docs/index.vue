<template>
  <div>
    <doc-nav-list />
    <v-row>
      <v-col v-for="(card, i) in docLists" :key="i" cols="12" md="6" lg="4">
        <v-card :to="'/docs/' + card.slug">
          <v-img
            :src="
              card.thumbnail === '' ? '/images/404-min.png' : card.thumbnail
            "
          />
          <v-card-title>{{ card.title }}</v-card-title>
          <v-card-text>
            {{ card }}
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>
<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import DocNavList from '@/components/molecules/lists/nav/DocNavList.vue'
export default defineComponent({
  name: 'question',
  layout: 'doc',
  components: {
    DocNavList,
  },
  async asyncData({ $content }) {
    const docLists = await $content('about')
      .only(['toc', 'title', 'path', 'thumbnail', 'slug'])
      .limit(5)
      .fetch()
    return { docLists }
  },
})
</script>
