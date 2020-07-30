<template>
  <v-card>
    <v-toolbar flat>
      <v-toolbar-title>
        {{ cardTitle }}
      </v-toolbar-title>
    </v-toolbar>
    <v-divider />
    <v-card-text>
      <slot />
    </v-card-text>
  </v-card>
</template>
<script lang="ts">
import { defineComponent } from '@vue/composition-api'
export default defineComponent({
  name: 'BaseCard',
  props: {
    cardTitle: {
      type: String,
      required: true,
    },
  },
})
</script>
