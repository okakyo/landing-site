<template>
  <LoginForm />
</template>

<script>
import { defineComponent } from '@vue/composition-api'
import { LoginForm } from '@/components/molecules/forms/LoginForm.vue'
export default defineComponent({
  name: 'createAccount',
  components: { LoginForm },
})
</script>
