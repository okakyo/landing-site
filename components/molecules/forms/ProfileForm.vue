<template>
  <v-form>
    <v-alert v-if="errorMessage" dense type="error">
      {{ errorMessage }}
    </v-alert>
    <v-text-field id="name" v-model="name" />
    <v-text-field id="discription" v-model="discription" />
    <v-text-field id="img" v-model="imgUrl" />
    <v-text-field id="twitter" v-model="twitter" />
    <v-text-field id="facebook" v-model="facebook" />
  </v-form>
</template>
<script lang="ts">
import { defineComponent } from '@vue/composition-api'
export default defineComponent({
  setup() {
    return {}
  },
})
</script>
