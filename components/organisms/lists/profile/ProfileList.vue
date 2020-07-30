<template>
  <v-list two-line>
    <v-list-item>
      <v-list-item-icon>
        <v-icon color="indigo">mdi-email</v-icon>
      </v-list-item-icon>
      <v-list-item-content>
        <v-list-item-title>aliconnors@example.com</v-list-item-title>
        <v-list-item-subtitle>Personal</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
    <v-list-item>
      <v-list-item-icon>
        <v-icon color="indigo">mdi-twitter</v-icon>
      </v-list-item-icon>
      <v-list-item-content>
        <v-list-item-title>OkaKyo</v-list-item-title>
        <v-list-item-subtitle>@31415O_Kyo</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
    <v-list-item>
      <v-list-item-icon>
        <v-icon color="indigo">mdi-facebook</v-icon>
      </v-list-item-icon>
      <v-list-item-content>
        <v-list-item-title>Oka Kyohei</v-list-item-title>
        <v-list-item-subtitle>@31415</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
    <v-list-item>
      <v-list-item-icon>
        <v-icon color="indigo">mdi-github</v-icon>
      </v-list-item-icon>
      <v-list-item-content>
        <v-list-item-title>Oka Kyohei</v-list-item-title>
        <v-list-item-subtitle>@okakyo</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
  </v-list>
</template>
<script lang="ts">
import { defineComponent } from '@vue/composition-api'
export default defineComponent({
  name: 'ProfileList',
  props: {
    chatAccount: {
      type: Object,
    },
  },
})
</script>
