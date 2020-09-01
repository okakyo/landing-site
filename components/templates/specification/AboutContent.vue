<template>
  <base-component>
    <v-card outlined min-height="600" class="pa-3">
      <v-toolbar flat>
        <v-spacer />
        <v-card-title class="headline">
          {{ page.title }}
        </v-card-title>
        <v-spacer />
      </v-toolbar>
      <v-divider />
      <nuxt-content id="article" class="ma-3 pa-3" :document="page" />
    </v-card>
  </base-component>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import BaseComponent from '@/components/molecules/grids/BaseGrid.vue'
export default defineComponent({
  name: 'aboutContent',
  props: {
    page: {
      type: Object,
      required: true,
    },
  },
  components: {
    BaseComponent,
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
