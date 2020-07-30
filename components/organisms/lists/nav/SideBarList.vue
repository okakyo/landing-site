<template>
  <v-list-item-group>
    <v-list-item
      v-for="(item, i) in items"
      :key="i"
      :to="item.to"
      router
      exact
      nuxt
      color="#00cba9"
    >
      <v-list-item-icon>
        <v-icon>{{ item.icon }}</v-icon>
      </v-list-item-icon>
      <v-list-item-content>
        <v-list-item-title v-text="item.title" />
      </v-list-item-content>
    </v-list-item>
  </v-list-item-group>
</template>
<script lang="ts">
import { defineComponent } from '@vue/composition-api'
export default defineComponent({
  name: 'SidebarContnet',
  data() {
    return {
      items: [
        {
          icon: 'mdi-apps',
          title: 'Dashboard',
          to: '/user',
        },
        {
          icon: 'mdi-account',
          title: 'Profile',
          to: '/user/profile',
        },
        {
          icon: 'mdi-cog',
          title: 'Setting',
          to: '/user/setting',
        },
      ],
    }
  },
})
</script>
