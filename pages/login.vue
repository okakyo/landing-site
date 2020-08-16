<template>
  <v-row justify="center">
    <v-col cols="10" sm="8" md="6" xl="4" class="mt-3">
      <v-card card-title="ログイン" class="pa-3">
        <v-row justify="center">
          <v-card-title>Login Form</v-card-title>
        </v-row>
        <v-divider />
        <v-row justify="center">
          <v-col cols="10">
            <login-form />
          </v-col>
        </v-row>
      </v-card>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import LoginForm from '@/components/molecules/forms/LoginForm.vue'

// TODO: SNS認証は今後実装することにする（まずはメール認証だけで大まかな部分を実装することを考える）;

// import AuthContent from '@/components/organisms/lists/auth/AuthContent.vue'
export default defineComponent({
  layout: 'land',
  components: {
    LoginForm,
  },
})
</script>
