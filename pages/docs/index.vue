<template>
  <div>
    <doc-nav-list :nav-lists="docLists" :drawer="drawer" />
    <v-card outlined>
      <v-toolbar flat>
        <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
        <v-card-title>仕様書のまとめ</v-card-title>
        <v-spacer />

        <v-autocomplete
          v-model="query"
          dense
          chips
          clearable
          hide-no-data
          hide-details
          hide-selected
          prepend-icon="mdi-magnify"
          :search-input.sync="searchDocuments"
          :items="articles"
          label="ドキュメントを検索"
        />
      </v-toolbar>
      <v-divider />
      <v-container>
        <v-row>
          <v-col
            v-for="(card, i) in docLists"
            :key="i"
            cols="6"
            md="4"
            lg="3"
            xl="2"
          >
            <v-card :to="'/docs/' + card.slug">
              <v-img
                :src="
                  card.thumbnail === '' ? '/images/404-min.png' : card.thumbnail
                "
              />
              <v-card-subtitle>{{ card.title }}</v-card-subtitle>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import DocNavList from '@/components/molecules/lists/nav/DocNavList.vue'
export default Vue.extend({
  name: 'Question',
  layout: 'doc',
  components: {
    DocNavList,
  },
  async asyncData({ $content }) {
    const docLists = await $content('documents/about')
      .only(['title', 'thumbnail', 'slug'])
      .limit(5)
      .fetch()
    const lists = await $content('documents').fetch()
    return { docLists, lists }
  },
  data() {
    return {
      drawer: false,
      query: '',
      searchDocuments: null,
      articles: [],
    }
  },
  watch: {
    async searcDocuments(query) {
      console.log(query)
      if (!query) {
        this.articles = []
        return
      }

      this.articles = await this.$content('about')
        .only(['title', 'slug'])
        .sortBy('createdAt', 'asc')
        .limit(6)
        .search(query)
        .fetch()
    },
  },
  methods: {
    clickDrawer() {
      return (this.drawer = !this.drawer)
    },
  },
})
</script>
