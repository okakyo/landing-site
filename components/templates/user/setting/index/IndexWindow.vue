<template>
  <div>
    <v-list subheader>
      <v-subheader>Profile</v-subheader>
      <v-list-item to="/user/profile/edit">
        <v-list-item-content>
          <v-list-item-title>Edit Profile</v-list-item-title>
        </v-list-item-content>
        <v-spacer />
        <v-list-item-icon>
          <v-icon>mdi-chevron-right</v-icon>
        </v-list-item-icon>
      </v-list-item>
      <v-list-item to="/user/profile/edit">
        <v-list-item-content>
          <v-list-item-title>Password</v-list-item-title>
        </v-list-item-content>
        <v-spacer />
        <v-list-item-icon>
          <v-icon>mdi-chevron-right</v-icon>
        </v-list-item-icon>
      </v-list-item>
    </v-list>
    <v-divider />
    <v-list subheader>
      <v-subheader>General</v-subheader>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>Dark Mode</v-list-item-title>
        </v-list-item-content>
        <v-spacer />
        <v-switch />
      </v-list-item>

      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>Color</v-list-item-title>
        </v-list-item-content>
        <v-spacer />
        <v-btn text small> </v-btn>
      </v-list-item>
    </v-list>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api'
export default defineComponent({
  name: 'Settingwindow',
  components: {},
  setup() {
    const isDark = ref(false)
    const color = ref('primary')
    return {
      isDark,
      color,
    }
  },
  mounted() {},
  // Dark Mode, Color 情報は Local Storage,Cookie に保存（これくらいなら消えても問題ない）
})
</script>
