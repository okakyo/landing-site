<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="10" sm="9" md="8" lg="6" xl="4">
        <LoginForm />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { defineComponent } from '@vue/composition-api'
import { LoginForm } from '@/components/molecules/forms/LoginForm.vue'
export default defineComponent({
  name: 'createAccount',
  components: { LoginForm },
})
</script>
