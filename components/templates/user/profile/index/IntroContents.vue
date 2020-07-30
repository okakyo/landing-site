<template>
  <v-row align="center" justify="center">
    <v-col cols="4" sm="3" xl="2">
      <v-img :src="props.userPicture" alt="Sunny image" width="128"></v-img>
    </v-col>
    <v-col cols="8" sm="9" xl="10">
      <v-card-title>
        {{ props.userName }}
      </v-card-title>
      <v-card-subtitle> @{{ props.userId }} </v-card-subtitle>
      <v-card-text>
        TODO: ここに自己紹介文を乗せる必要がある.
      </v-card-text>
    </v-col>
  </v-row>
</template>
<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  name: 'IntroContents',
  props: {
    userName: {
      type: String,
      require: true,
    },
    userId: {
      type: String,
      require: true,
    },
    userPicture: {
      type: String,
      require: false,
      default: '/online_cat.png',
    },
  },
  setup(props) {
    return {
      props,
    }
  },
})
</script>
