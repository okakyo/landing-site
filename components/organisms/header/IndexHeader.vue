<template>
  <v-app-bar
    app
    flat
    color="#00cba9"
    :clipped-left="$vuetify.breakpoint.lgAndUp"
  >
    <v-btn text exact depressed dark nuxt to="/" color="text--white">
      <h3>DENX</h3>
    </v-btn>
    <v-spacer />
    <v-btn
      v-for="(btn, index) in smallBtn"
      :key="index"
      text
      small
      depressed
      dark
      nuxt
      :to="btn.url"
      color="text--white"
      >{{ btn.name }}</v-btn
    >
    <v-btn text depressed dark nuxt to="/user/login" color="text--white">
      <h3>ログイン</h3>
    </v-btn>
  </v-app-bar>
</template>

<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api'

type SmallBtn = {
  name: string
  icon: string
  url: string
}
export default defineComponent({
  name: 'IndexHeader',
  setup() {
    const smallBtn = ref<SmallBtn[]>([
      {
        name: 'about',
        url: '/about',
        icon: '',
      },

      {
        name: '仕様書',
        url: '/docs',
        icon: '',
      },
    ])
    return {
      smallBtn,
    }
  },
})
</script>
