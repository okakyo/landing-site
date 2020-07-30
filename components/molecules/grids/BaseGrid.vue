<template>
  <v-row justify="center">
    <v-col cols="12" sm="10" md="8" lg="6">
      <slot />
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
export default defineComponent({})
</script>
