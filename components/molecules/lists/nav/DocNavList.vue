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
      <v-list-group
        v-for="(list, i) in sidebarLists"
        :key="i"
        :prepend-icon="list.icon"
      >
        <template v-slot:activator>
          <v-list-item-title>{{ list.name }}</v-list-item-title>
        </template>
        <v-list-item
          v-for="(item, index) in navLists"
          :key="index"
          nuxt
          link
          color="primary"
          :to="list.slug + '/' + item.slug"
        >
          <v-list-item-icon>
            <v-icon></v-icon>
          </v-list-item-icon>
          <v-list-item-title>
            {{ item.title }}
          </v-list-item-title>
        </v-list-item>
      </v-list-group>
    </v-list>
  </v-navigation-drawer>
</template>
<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api'

export default defineComponent({
  name: 'DocNavList',
  props: {
    navLists: {
      type: Array,
      required: false,
    },
  },
  setup() {
    const sidebarLists = ref([
      { name: 'プロジェクト', icon: 'mdi-folder', subIcon: '', slug: '/docs' },
      {
        name: 'サンプル',
        icon: 'mdi-folder',
        subIcon: '',
        slug: '/docs/example',
      },
      {
        name: 'エニグマ',
        icon: 'mdi-account-group',
        subIcon: 'mdi-account',
        slug: '/docs/enigma',
      },
      {
        name: 'コード',
        icon: 'mdi-newspaper-variant-multiple',
        subIcon: 'mdi-newspaper-variant',
        slug: '/docs/specification',
      },
    ])
    return {
      sidebarLists,
    }
  },
})
</script>
