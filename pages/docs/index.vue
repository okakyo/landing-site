<template>
  <div>
    <doc-nav-list />
    <v-row>
      <v-col cols="12" md="6" lg="4">
        <v-card>
          fdag:
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>
<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import DocNavList from '@/components/organisms/lists/nav/DocNavList.vue'
export default defineComponent({
  name: 'question',
  layout: 'doc',
  components: {
    DocNavList,
  },
  asyncData({ $content }) {
    const docList = ''
    return { docList }
  },
})
</script>
