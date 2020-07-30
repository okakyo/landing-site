<template>
  <v-list shaped>
    <top-sidebar />
    <v-divider />
    <side-bar-list />
  </v-list>
</template>
<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import SideBarList from './SideBarList.vue'
import TopSidebar from './TopSidebar.vue'
export default defineComponent({
  components: { SideBarList, TopSidebar },
})
</script>
