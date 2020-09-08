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
      <v-list-group
        v-if="publicLists.length > 0"
        prepend-icon="mdi-folder"
        value="true"
      >
        <template v-slot:activator>
          <v-list-item-title>プロジェクト</v-list-item-title>
        </template>
        <v-list-item
          v-for="(list, i) in publicLists"
          :key="i"
          :prepend-icon="list.icon"
          nuxt
          link
          :to="'/docs' + list.path"
        >
          <v-list-item-icon>
            <v-icon></v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ list.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-group>
      <v-list-group v-if="draftLists.length > 0" prepend-icon="mdi-folder">
        <template v-slot:activator>
          <v-list-item-title>下書き</v-list-item-title>
        </template>
        <v-list-item
          v-for="(list, i) in draftLists"
          :key="i"
          :prepend-icon="list.icon"
          nuxt
          link
          :to="'/docs' + list.path"
        >
          <v-list-item-icon>
            <v-icon></v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ list.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
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
    publicLists: {
      type: Array,
      required: false,
    },
    draftLists: {
      type: Array,
      required: false,
    },
  },
})
</script>
