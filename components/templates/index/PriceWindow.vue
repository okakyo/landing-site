<template>
  <v-container>
    <v-row justify="center">
      <v-col v-for="i in 3" :key="i" cols="8" md="4" xl="3">
        <v-lazy
          v-model="lazyDescript[index]"
          :options="{
            threshold: 1.0,
          }"
          transition="fade-transition"
        >
          <v-card min-height="400px">
            <v-card-title></v-card-title>
          </v-card>
        </v-lazy>
      </v-col>
    </v-row>
  </v-container>
</template>
<script lang="ts">
import { defineComponent, reactive } from '@vue/composition-api'
export default defineComponent({
  name: 'PriceWindow',
  setup() {
    const lazyDescript = reactive<boolean[]>([false, false, false])

    return {
      lazyDescript,
    }
  },
})
</script>
