<template>
  <v-container fluid style="background-color: #00cba9;" class="pa-5">
    <div class="mt-9">
      <v-card id="main-top" flat color="#00cba9">
        <v-row wrap justify="center" align="center">
          <v-col cols="10" sm="10" md="6" class="mb-5">
            <v-card transition="fade-transition" flat color="#00cba9">
              <v-img
                class="text-center"
                :lazy-src="heroImg"
                :src="heroImg"
              ></v-img>
            </v-card>
          </v-col>
          <v-col cols="12" sm="10" md="4">
            <v-card outlined color="transparent" class="white--text">
              <h1 class="mb-6 text-center">Hello World</h1>
              <v-row justify="center">
                <p>
                  Adod Morningd fgasdfgsdfgsfdgsdfgs gfgsdfgsdfg gsdfgsdfd
                </p>
                <p>
                  Hogehogehoge hogehogehogehogehogehoge geadgasdgfad
                </p>
                <p>
                  gegasdgadga dgadsgasdgasd gadsgasdgasdgasd gasdgasdg
                </p>
              </v-row>

              <v-row justify="center" class="mt-3">
                <v-col cols="8">
                  <v-btn
                    color="#373b3e"
                    class="white--text"
                    block
                    nuxt
                    rounded
                    to="/user/login"
                    >Login</v-btn
                  >
                </v-col>
              </v-row>
            </v-card>
          </v-col>
        </v-row>
      </v-card>
    </div>
  </v-container>
</template>

<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api'
export default defineComponent({
  setup() {
    const heroImg = ref(require('@/assets/img/index.svg'))

    return {
      heroImg,
    }
  },
})
</script>
