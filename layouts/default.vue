<template>
  <v-app app>
    <index-header />
    <v-main id="contents">
      <v-slide-y-reverse-transition>
        <nuxt />
      </v-slide-y-reverse-transition>
    </v-main>
    <v-footer id="footer">
      Oka Kyohei has All Rights Reserved
    </v-footer>
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import IndexHeader from '@/components/organisms/header/IndexHeader.vue'
export default defineComponent({
  name: 'Land',
  components: {
    IndexHeader,
  },
})
</script>
