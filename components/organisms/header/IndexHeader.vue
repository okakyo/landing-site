<template>
  <v-app-bar app flat color="#00cba9">
    <v-btn text exact depressed dark nuxt to="/" color="text--white">
      <h3>Kivitz</h3>
    </v-btn>
    <v-spacer />
    <v-btn text small depressed dark nuxt to="/news" color="text--white"
      >news</v-btn
    >
    <v-btn text small depressed dark nuxt to="/question" color="text--white"
      >faq</v-btn
    >
    <v-btn text depressed dark nuxt to="/user/login" color="text--white">
      <h3>ログイン</h3>
    </v-btn>
  </v-app-bar>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

// TODO: ヘッダーのメインカラーを後で統一できるように設定する
export default defineComponent({
  name: 'IndexHeader',
})
</script>
