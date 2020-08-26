<template>
  <v-container fluid>Waiting in login</v-container>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'Login',
  async fetch({ $axios, route, redirect, app }) {
    const code = route.query.code
    const clientId = process.env.GITHUB_CLIENT_ID
    const clientSecret = process.env.GITHUB_CLIENT_SECRET
    const sendData = {
      client_id: clientId,
      client_secret: clientSecret,
      code,
    }
    try {
      const res = await $axios.post(
        'https://github.com/login/oauth/access_token',

        sendData,
        {
          headers: {
            Accept: 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json;charset=utf-8',
          },
        }
      )
      if (res.status === 200) {
        app.$cookies.set('access_token', res.data.access_token)
        redirect('/')
      } else {
        console.log(res)
      }
    } catch (e) {
      console.error(e)
      throw e
    }
  },
})
</script>
