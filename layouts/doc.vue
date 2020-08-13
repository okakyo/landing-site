<template>
  <v-app app>
    <index-header />
    <v-container fluid class="fill-height">
      <v-main id="contents" class="fill-height">
        <v-slide-y-reverse-transition>
          <nuxt />
        </v-slide-y-reverse-transition>
      </v-main>
    </v-container>
  </v-app>
</template>

<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api'
import IndexHeader from '@/components/organisms/header/IndexHeader.vue'
export default defineComponent({
  name: 'Land',
  components: {
    IndexHeader,
  },
  setup() {
    const drawer = ref()
    return {
      drawer,
    }
  },
})
</script>
