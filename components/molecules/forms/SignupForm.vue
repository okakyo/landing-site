<template>
  <v-form ref="form" v-model="valid">
    <v-alert v-if="errorMessage" dense type="error">
      {{ errorMessage }}
    </v-alert>
    <v-text-field
      v-model="email"
      required
      label="メールアドレス"
      name="email"
      autocomplete="email"
      :rules="emailRules"
      prepend-icon="mdi-email"
      type="email"
    />
    <v-text-field
      id="new-password"
      v-model="newPassword"
      autocomplete="new-password"
      required
      label="パスワード"
      name="newPassword"
      :rules="passwordRules"
      prepend-icon="mdi-lock"
      type="password"
    />
    <v-text-field
      id="verify-password"
      v-model="verifyPassword"
      required
      autocomplete="verify-password"
      label="Verify Password"
      name="パスワード（確認用）"
      :rules="[...passwordRules, verifiedPasswordRules]"
      prepend-icon="mdi-lock"
      type="password"
    />
    <v-checkbox
      v-model="acceptConsensus"
      required
      label="利用規約に同意する"
      :rules="[(v) => !!v || 'You must agree to continue!']"
    />
    <div class="pb-3">
      <a> 利用規約について</a>
    </div>

    <v-btn
      :disabled="!valid"
      class="my-3 mb-6"
      nuxt
      block
      outlined
      @click="signupAccount"
      >仮登録</v-btn
    >
  </v-form>
</template>
<script lang="ts">
import { defineComponent, ref, SetupContext } from '@vue/composition-api'
import {
  validatePassword,
  validateEmail,
  createAccount,
  ResponseHttp,
} from '@/functions'

export default defineComponent({
  name: 'SignUpForm',
  setup(props: any, { root }: SetupContext) {
    const email = ref('')
    const newPassword = ref('')
    const verifyPassword = ref('')
    const emailRules = ref(validateEmail)
    const passwordRules = ref(validatePassword)
    const acceptConsensus = ref(false)
    const valid = ref(true)
    const errorMessage = ref<string | null>(null)
    /*
    const isAbleClick=()=>{
      newPassword.value === verifyPassword.value && acceptConsensus.value
    } */
    const verifiedPasswordRules = () => {
      return (
        newPassword.value === verifyPassword.value || 'Input the same password'
      )
    }

    // NOTE: 以下、methods, Computed を実装
    const signupAccount = () => {
      createAccount(email.value, newPassword.value, root.$cookies).then(
        (res: ResponseHttp) => {
          if (!res.result && res.error) {
            errorMessage.value = res.error
          } else {
            root.$router.push('/user/sendEmail')
          }
        }
      )
    }

    return {
      email,
      newPassword,
      verifyPassword,
      acceptConsensus,
      emailRules,
      passwordRules,
      verifiedPasswordRules,
      errorMessage,
      signupAccount,
      valid,
    }
  },
})
</script>
