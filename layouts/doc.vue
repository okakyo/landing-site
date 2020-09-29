<template>
  <v-app app>
    <div v-if="isLoading" class="text-center">
      <v-main class="fill-height grey lighten-4">
        <v-container class="fill-height">
          <v-layout>
            <v-row justify="center" align="center">
              <v-col>
                <v-progress-circular
                  indeterminate
                  color="primary"
                  value="100"
                />
              </v-col>
            </v-row>
          </v-layout>
        </v-container>
      </v-main>
    </div>
    <div v-else>
      <index-header />
      <v-container fluid class="fill-height">
        <v-main id="contents" class="fill-height">
          <nuxt />
        </v-main>
      </v-container>
    </div>
  </v-app>
</template>

<script lang="ts">
import { defineComponent, ref, SetupContext } from '@vue/composition-api'
import IndexHeader from '@/components/organisms/header/IndexHeader.vue'
import { firebase } from '@/plugins/firebase.config'

export default defineComponent({
  name: 'Land',
  components: {
    IndexHeader,
  },
  setup(props: any, { root }: SetupContext) {
    const isLoading = ref<boolean>(true)
    firebase.auth().onAuthStateChanged((user) => {
      if (!user) {
        root.$router.push('/')
      } else {
        isLoading.value = false
      }
    })
    return {
      isLoading,
    }
  },
})
</script>
