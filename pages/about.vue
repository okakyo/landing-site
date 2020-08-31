<template>
  <v-container>
    <v-row justify="center">
      <about-content />
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import AboutContent from '@/components/templates/specification/AboutContent.vue'

export default defineComponent({
  name: 'aboutIndexPage',
  components: {
    AboutContent,
  },
})
</script>
