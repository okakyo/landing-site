<template>
  <v-form>
    <v-alert v-if="errorMessage" dense type="error">
      {{ errorMessage }}
    </v-alert>
    <v-text-field
      v-model="email"
      label="email Address"
      name="email"
      prepend-icon="mdi-email"
      type="email"
    />
    <v-text-field
      id="password"
      v-model="password"
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
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  name: 'LoginForm',
})
</script>
