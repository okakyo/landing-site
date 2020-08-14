<template>
  <v-navigation-drawer
    v-model="drawer"
    :clipped="$vuetify.breakpoint.lgAndUp"
    app
    class="grey lighten-4"
  >
    <v-list flat>
      <v-list-item nuxt link color="primary" to="/docs">
        <v-list-item-icon>
          <v-icon>mdi-home</v-icon>
        </v-list-item-icon>
        <v-list-item-title>Top</v-list-item-title>
      </v-list-item>
      <v-list-item
        v-for="(item, index) in navLists"
        :key="index"
        nuxt
        link
        color="primary"
        :to="'/docs/' + item.slug"
      >
        <v-list-item-icon>
          <v-icon>mdi-home</v-icon>
        </v-list-item-icon>
        <v-list-item-title>
          {{ item.title }}
        </v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>
<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  name: 'DocNavList',
  props: {
    navLists: {
      type: Array,
      required: false,
    },
  },
})
</script>
