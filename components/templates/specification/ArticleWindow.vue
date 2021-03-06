<template>
  <div>
    <doc-nav-list
      :public-lists="publicLists"
      :draft-lists="draftLists"
      :drawer="drawer"
    />
    <v-row>
      <v-col cols="12">
        <v-card outlined min-height="600" class="pa-3">
          <v-toolbar flat>
            <v-app-bar-nav-icon
              v-if="$vuetify.breakpoint.mdAndDown"
              @click="drawer = !drawer"
            />
            <v-card-title class="headline">
              {{ page.title }}
            </v-card-title>
            <v-spacer />
          </v-toolbar>

          <v-spacer />
          <v-chip-group class="mx-8">
            <v-chip
              small
              label
              :color="page.status === 0 ? 'success' : 'warning'"
              >{{ page.status === 0 ? '公開' : '下書き' }}</v-chip
            >
            <v-spacer />
            <v-chip v-for="item in page.tags" :key="item" small>{{
              item
            }}</v-chip>
          </v-chip-group>
          <v-divider />
          <nuxt-content id="article" :document="page" />
        </v-card>
      </v-col>
      <v-col :hidden="$vuetify.breakpoint.smAndDown" md="3" xl="4">
        <toc-nav-list :page="page" :toc="page.toc" />
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api'

import { dateParser } from '@/libs'
import DocNavList from '@/components/molecules/lists/nav/DocNavList.vue'
import TocNavList from '@/components/molecules/lists/nav/TocNavList.vue'

export default defineComponent({
  name: 'Article',
  props: {
    isSidebar: {
      type: Boolean,
      default: true,
    },
    page: {
      type: Object,
      required: true,
    },
    publicLists: {
      type: Array,
      required: true,
    },
    draftLists: {
      type: Array,
      required: true,
    },
  },

  setup() {
    const drawer = ref(false)

    // Twitter のURLがあれば、カードが生成されるように設計する

    return {
      drawer,
    }
  },
  components: {
    DocNavList,
    TocNavList,
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
  white-space: pre-wrap;
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
  box-shadow: none;
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
.v-application code {
  background-color: initial;
  padding: initial;
  font-size: initial;
}
</style>
