<template>
  <v-navigation-drawer
    :value="drawer"
    clipped
    app
    :permanent="$vuetify.breakpoint.lgAndUp"
    class="grey lighten-4"
    @input="$emit('input', $event)"
  >
    <v-list flat>
      <v-list-item nuxt link color="primary" to="/docs">
        <v-list-item-icon>
          <v-icon>mdi-home</v-icon>
        </v-list-item-icon>
        <v-list-item-title>Top</v-list-item-title>
      </v-list-item>
      <v-list-group prepend-icon="mdi-folder">
        <template v-slot:activator>
          <v-list-item-title>プロジェクト</v-list-item-title>
        </template>
        <v-list-group
          v-for="(list, i) in navLists"
          :key="i"
          :prepend-icon="list.icon"
          sub-group
        >
          <template v-slot:activator>
            <v-list-item-title>{{ list.title }}</v-list-item-title>
          </template>
          <v-list-item
            v-for="(item, index) in navLists"
            :key="index"
            nuxt
            link
            color="primary"
          >
            <v-list-item-icon>
              <v-icon></v-icon>
            </v-list-item-icon>
            <v-list-item-title>
              {{ item }}
            </v-list-item-title>
          </v-list-item>
        </v-list-group>
      </v-list-group>
    </v-list>
  </v-navigation-drawer>
</template>
<script lang="ts">
import { defineComponent } from '@vue/composition-api'
type Props = {
  drawer: boolean
}
export default defineComponent({
  name: 'DocNavList',
  props: {
    drawer: {
      type: Boolean,
      required: true,
    },
    navLists: {
      type: Array,
      required: false,
    },
  },
})
</script>
