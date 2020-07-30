<template>
  <v-footer id="footer">
    <p>
      <span>&copy; {{ new Date().getFullYear() }}</span>
      Oka Kyohei All Right Reserved
    </p>
  </v-footer>
</template>
<script lang="ts">
import { defineComponent } from '@vue/composition-api'

// TODO: ヘッダーのメインカラーを後で統一できるように設定する
export default defineComponent({})
</script>
