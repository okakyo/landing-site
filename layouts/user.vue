<template>
  <v-app>
    <headers v-model="drawer" />
    <v-content
      v-touch="{
        right: () => swipe(),
      }"
      class="grey lighten-4"
    >
      <v-container fluid>
        <v-slide-y-reverse-transition>
          <nuxt />
        </v-slide-y-reverse-transition>
      </v-container>
    </v-content>
  </v-app>
</template>

<script lang="ts">
// For Accounts Only

import {
  defineComponent,
  ref,
  SetupContext,
  computed,
} from '@vue/composition-api'
import jwtDecode from 'jwt-decode'
import Headers from '@/components/organisms/header/Headers.vue'
import { globalUserState } from '@/compositions'
import { UserInterface } from '~/interfaces'
import { OauthUserInterface } from '~/interfaces/user'
export default defineComponent({
  components: {
    Headers,
  },

  setup(props: any, { root }: SetupContext) {
    // TODO: ここにGlobal Store の定義実装する

    const drawer = ref<boolean>(false)
    const swipe = () => {
      drawer.value = true
    }

    const { userState, setUserState } = globalUserState()
    // ここで、クッキーに保存されているToken をもとに情報を取得する
    const token = root.$cookies.get('set-token')
    if (token) {
      const userInfo: OauthUserInterface = jwtDecode(token)
      if (userInfo) {
        const parsedUserInfo: UserInterface = {
          id: userInfo.user_id,
          name: userInfo.name,
          email: userInfo.email ? userInfo.email : '',
          emailVerified: userInfo.email_verified,
          photoUrl: userInfo.picture,
        }
        computed(() => setUserState(parsedUserInfo))
        console.log(userState)
      } else if (root.$route.path !== '/user/login') {
        return root.$router.push('/user/login')
      }
    } else if (root.$route.path !== '/user/login') {
      return root.$router.push('/user/login')
    }
    return {
      drawer,
      swipe,
    }
  },
})
</script>
