<template>
  <v-list></v-list>
</template>
<script lang="ts">
import { defineComponent } from '@vue/composition-api'
export default defineComponent({
  name: 'resultList',
  props: {
    results: {
      type: Array,
      require: true,
    },
  },
})
</script>
