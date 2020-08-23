<template>
  <v-container fluid>Logout Success</v-container>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  fetch({ app, redirect }) {
    const token = app.$cookies.get('acccess_token')
    if (token) {
      redirect('/')
    }
  },
})
</script>
