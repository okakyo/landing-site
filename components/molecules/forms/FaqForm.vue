<template>
  <v-form>
    <v-text-field />
    <v-text-field />
    <v-text-field />
    <v-btn>送信する</v-btn>
  </v-form>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
export default defineComponent({
  name: 'faqForm',
})
</script>
