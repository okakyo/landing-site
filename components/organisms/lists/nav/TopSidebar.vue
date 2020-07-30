<template>
  <v-list-item class="px-2">
    <v-list-item-avatar>
      <v-img />
    </v-list-item-avatar>
    <v-list-item-content>
      <v-list-item-title class="title mb-3">
        <h2 id="sidebarTitle">{{ title }}</h2>
      </v-list-item-title>
    </v-list-item-content>
  </v-list-item>
</template>
<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api'
export default defineComponent({
  name: 'TopContnet',
  setup() {
    const title = ref('Kivitz')
    return { title }
  },
})
</script>
