<template>
  <v-navigation-drawer
    clipped
    app
    right
    :permanent="$vuetify.breakpoint.mdAndUp"
  >
    <v-list dense>
      <v-list-item
        v-for="(item, i) in toc"
        :key="i"
        nuxt
        link
        :to="'/docs' + page.dir + '/' + page.slug + '#' + item.id"
      >
        <v-list-item-title v-if="item.depth == 2" class="text-primary">{{
          item.text
        }}</v-list-item-title>
        <v-list-item-subtitle v-else-if="item.depth == 3" class="pl-3">{{
          item.text
        }}</v-list-item-subtitle>
      </v-list-item>
      {{ page.slug }}
    </v-list>
  </v-navigation-drawer>
</template>
<script lang="ts">
import { defineComponent } from '@vue/composition-api'
export default defineComponent({
  name: 'TocNavList',
  props: {
    toc: {
      type: Array,
      required: true,
    },
    page: {
      type: Object,
      required: true,
    },
    url: {
      type: String,
      required: false,
      default: '',
    },
  },
})
</script>
