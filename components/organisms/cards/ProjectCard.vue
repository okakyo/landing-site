<template>
  <v-container>
    <v-row>
      <v-col
        v-for="(card, i) in docLists"
        :key="i"
        cols="6"
        md="4"
        lg="3"
        xl="2"
      >
        <v-card :to="'/docs' + card.dir + '/' + card.slug">
          <v-img
            :src="
              card.thumbnail === '' ? '/images/404-min.png' : card.thumbnail
            "
          />
          <v-card-subtitle>{{ card.title }}</v-card-subtitle>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script lang="ts">
import { defineComponent } from '@vue/composition-api'
export default defineComponent({
  name: 'ProjectCard',
  props: {
    docLists: {
      type: Object,
      required: true,
    },
  },
})
</script>
