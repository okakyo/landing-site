<template>
  <div>
    <slot />
    <v-row justify="center">
      <v-col cols="10">
        <v-btn
          class="mt-3 mb-6"
          nuxt
          block
          rounded
          outlined
          color="#DD5144"
          @click="googleLogin()"
        >
          <v-icon left>
            mdi-google
          </v-icon>
          Google でログイン
        </v-btn>
        <v-btn
          class="mt-3 mb-6"
          nuxt
          block
          rounded
          outlined
          @click="githubLogin()"
        >
          <v-icon left>
            mdi-github
          </v-icon>
          GitHub でログイン
        </v-btn>
        <v-btn
          class="mt-3 mb-6"
          nuxt
          to="/user/login-email"
          block
          rounded
          outlined
          color="info"
        >
          <v-icon left>
            mdi-mail
          </v-icon>
          メールでログイン
        </v-btn>
      </v-col>
    </v-row>
  </div>
</template>
<script lang="ts">
import { defineComponent, SetupContext } from '@vue/composition-api'
import { snsAuth } from '@/functions/service/accountService'
export default defineComponent({
  // 入力されたEmail,Password 情報で認証を行うための関数を実装
  setup(props, { root }: SetupContext) {
    const router = root.$router
    function validateLogin() {
      console.log('Login Validating...')
    }
    async function githubLogin() {
      try {
        const result = await snsAuth('GitHub', root.$cookies)
        if (result) {
          console.log('Connect to the SNS')
          router.push('/user')
        } else {
          console.error(result)
        }
      } catch (e) {
        console.error(e)
      }
    }
    async function googleLogin() {
      try {
        const result = await snsAuth('Google', root.$cookies)
        if (result) {
          console.log('Connect to the SNS')
          router.push('/user')
        } else {
          console.error(result)
        }
      } catch (e) {
        console.error(e)
      }
    }
    return {
      googleLogin,
      githubLogin,
      validateLogin,
    }
  },
})
</script>
