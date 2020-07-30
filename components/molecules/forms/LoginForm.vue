<template>
  <v-form>
    <v-alert v-if="errorMessage" dense type="error">
      {{ errorMessage }}
    </v-alert>
    <v-text-field
      v-model="email"
      :rules="emailRules"
      label="email Address"
      name="email"
      prepend-icon="mdi-email"
      type="email"
    />
    <v-text-field
      id="password"
      v-model="password"
      :rules="passwordRules"
      label="Password"
      name="password"
      prepend-icon="mdi-lock"
      type="password"
    />

    <v-divider />
    <v-btn class="my-6" nuxt block outlined @click="loginForm">ログイン</v-btn>
  </v-form>
</template>

<script lang="ts">
import { defineComponent, ref, SetupContext } from '@vue/composition-api'
import {
  validatePassword,
  validateEmail,
  loginAccountWithEmailAndPassword,
  ResponseHttp,
} from '@/functions'
import { ParseError } from '../../../functions/util/error'
export default defineComponent({
  name: 'LoginForm',
  setup(props: any, { root }: SetupContext) {
    const email = ref('')
    const password = ref('')
    const emailRules = ref(validateEmail)
    const passwordRules = ref(validatePassword)
    const errorMessage = ref<string | null>(null)

    // TODO: ここにログイン認証を実装する
    const loginForm = () => {
      loginAccountWithEmailAndPassword(
        email.value,
        password.value,
        root.$cookies
      )
        .then((res: ResponseHttp) => {
          if (!res.result && res.error) {
            errorMessage.value = res.error
          } else {
            return res.error === ''
              ? root.$router.push('/user/profile/edit')
              : root.$router.push('/user')
          }
        })
        .catch((e) => {
          errorMessage.value = ParseError(e)
        })
    }
    return {
      email,
      password,
      emailRules,
      passwordRules,
      errorMessage,
      loginForm,
    }
  },
})
</script>
