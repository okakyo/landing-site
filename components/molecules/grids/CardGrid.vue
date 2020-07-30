<template>
  <v-container fluid class="fill-height">
    <v-row class="my-5" justify="center" align="center">
      <v-col xs="12" sm="9" md="6" lg="4">
        <slot />
      </v-col>
    </v-row>
  </v-container>
</template>
<script lang="ts">
import { defineComponent } from '@vue/composition-api'
export default defineComponent({})
</script>
