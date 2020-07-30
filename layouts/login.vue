<template>
  <v-app>
    <v-app-bar flat color="#00cba9"></v-app-bar>
    <v-content>
      <v-slide-y-reverse-transition>
        <nuxt />
      </v-slide-y-reverse-transition>
    </v-content>
  </v-app>
</template>

<script lang="ts">
// For Accounts Only
import { defineComponent } from '@vue/composition-api'

export default defineComponent({})
</script>
