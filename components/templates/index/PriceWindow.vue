<template>
  <v-container>
    <v-lazy
      v-model="isOn"
      :options="{
        threshold: 0.5,
      }"
      transition="fade-transition"
    >
      <v-row justify="center">
        <v-col v-for="i in 3" :key="i" cols="8" md="4" xl="3">
          <v-card min-height="400px">
            <v-card-title></v-card-title>
          </v-card>
        </v-col>
      </v-row>
    </v-lazy>
  </v-container>
</template>
<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api'
export default defineComponent({
  name: 'PriceWindow',
  setup() {
    const isOn = ref(false)
    return {
      isOn,
    }
  },
})
</script>
