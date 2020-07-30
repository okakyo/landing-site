<template>
  <card-grid>
    <v-card>
      <v-toolbar flat>
        <v-spacer />
        <v-toolbar-title class="headline">
          {{ cardTitle }}
        </v-toolbar-title>
        <v-spacer />
      </v-toolbar>
      <v-divider />
      <v-card-text>
        <v-row justify="center">
          <v-col cols="10">
            <slot />
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </card-grid>
</template>
<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import CardGrid from '@/components/molecules/grids/CardGrid.vue'
export default defineComponent({
  components: {
    CardGrid,
  },
  props: {
    cardTitle: {
      type: String,
      required: true,
    },
  },
})
</script>
