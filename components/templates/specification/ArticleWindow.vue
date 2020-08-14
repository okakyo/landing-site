<template>
  <div>
    <doc-nav-list :nav-lists="docLists" />
    <v-row>
      <v-col cols="12" sm="10" md="9" xl="8">
        <v-card outlined min-height="600" class="pa-3">
          <v-toolbar flat>
            <v-card-title class="headline">
              {{ page.title }}
            </v-card-title>
            <v-spacer />
            <v-card-subtitle>
              <a
                :href="
                  'https://github.com/okakyo/landing-site/edit/master/content/' +
                  page.path +
                  page.extension
                "
                >記事を編集する</a
              >
            </v-card-subtitle>
          </v-toolbar>
          <v-divider />
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
<style>
.nuxt-content {
  padding: 5%;
  padding-top: 3%;
}
.nuxt-content p {
  padding: 0.75em;
  line-height: 1.8em;
}
.nuxt-content ul {
  margin-bottom: 1.5em;
}
.nuxt-content li {
  line-height: 2em;
  margin-block-end: 0.5em;
}
.nuxt-content code {
  box-shadow: none;
}
.nuxt-content pre {
  margin: 0.5rem 0;
}
.nuxt-content code::before {
  content: '';
}
.nuxt-content img {
  max-width: 90%;
  margin: 0.5rem;
}
.nuxt-content h2 {
  margin-bottom: 0.75em;
  padding: 0.5em; /* 文字周りの余白 */
  color: #010101; /* 文字色 */
  background: #eaf3ff; /* 背景色 */
}
.nuxt-content h3 {
  padding: 0.25em 0.5em; /* 上下 左右の余白 */
  margin-bottom: 0.75em;
  color: #494949; /* 文字色 */
  background: transparent; /* 背景透明に */
  border-left: solid 5px #7db4e6; /* 左線 */
}
</style>
