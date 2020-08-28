<template>
  <v-app-bar
    app
    flat
    color="#00cba9"
    :clipped-left="$vuetify.breakpoint.lgAndUp"
    :clipped-right="$vuetify.breakpoint.mdAndUp"
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
      color="text--white"
      @click="logout"
    >
      <h3>ログアウト</h3>
    </v-btn>
    <v-btn
      v-else
      text
      depressed
      dark
      nuxt
      :href="
        'https://github.com/login/oauth/authorize?client_id=' +
        clientId +
        '&scope=repo'
      "
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

    const clientId = ref(process.env.GITHUB_CLIENT_ID)
    const authToken = ref(root.$cookies.get('access_token'))
    const isLogin = ref(authToken.value && authToken.value !== '')
    const logout = () => {
      root.$cookies.remove('access_token')
      root.$nextTick(() => (isLogin.value = false))
      root.$router.push('/logout')
    }
    return {
      smallBtn,
      isLogin,
      logout,
      clientId,
    }
  },
})
</script>
