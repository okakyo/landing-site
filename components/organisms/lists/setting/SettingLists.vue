<template>
  <v-list>
    <setting-list />
  </v-list>
</template>
<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import SettingList from '@/components/molecules/lists/listComponent/SettingListContent.vue'
export default defineComponent({
  name: 'SettingLists',
  components: {
    SettingList,
  },
})
</script>
