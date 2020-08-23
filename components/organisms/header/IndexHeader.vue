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
    <div v-if="isLogin">
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
        >{{ btn.name }}
      </v-btn>
    </div>

    <v-btn
      v-if="isLogin"
      text
      depressed
      dark
      nuxt
      href="https://github.com/login/oauth/authorize?client_id=ae4906dca84e3aa4a21d&scope=repo"
      color="text--white"
    >
      <h3>ログアウト</h3>
    </v-btn>
    <v-btn
      v-else
      text
      depressed
      dark
      nuxt
      href="https://github.com/login/oauth/authorize?client_id=ae4906dca84e3aa4a21d&scope=repo"
      color="text--white"
    >
      <h3>ログイン</h3>
    </v-btn>
  </v-app-bar>
</template>

<script lang="ts">
import { defineComponent, ref, SetupContext } from '@vue/composition-api'

type SmallBtn = {
  name: string
  icon: string
  url: string
}
export default defineComponent({
  name: 'IndexHeader',
  setup(props: any, { root }: SetupContext) {
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
    const authToken = root.$cookies.get('access_token')
    const isLogin = ref(authToken && authToken !== '')
    return {
      smallBtn,
      isLogin,
    }
  },
})
</script>
