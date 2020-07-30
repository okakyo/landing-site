<template>
  <base-grid>
    <v-card>
      <h2>Hello World</h2>
    </v-card>
  </base-grid>
</template>
<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import BaseGrid from '@/components/molecules/grids/BaseGrid.vue'
export default defineComponent({
  name: 'Settingwindow',
  components: {
    BaseGrid,
  },
})
</script>
