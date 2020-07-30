<template>
  <div>
    <v-app-bar app flat>
      <v-app-bar-nav-icon
        :value="value"
        class="hidden-md-and-up"
        @click.stop="$emit('input', !value)"
      >
      </v-app-bar-nav-icon>
      <v-spacer />
      <v-btn id="logoutButton" text @click.stop="logout">
        ログアウト
      </v-btn>
    </v-app-bar>
    <v-navigation-drawer
      :value="value"
      app
      dark
      :permanent="$vuetify.breakpoint.mdAndUp"
      @input="$emit('input', $event)"
    >
      <nav-lists />
    </v-navigation-drawer>
  </div>
</template>
<script lang="ts">
import { defineComponent, SetupContext } from '@vue/composition-api'
import firebase from 'firebase'
import NavLists from '@/components/organisms/lists/nav/NavLists.vue'
export default defineComponent({
  components: { NavLists },

  props: {
    value: {
      type: Boolean,
      default: false,
    },
  },
  setup(props: any, { root }: SetupContext) {
    const logout = () => {
      firebase
        .auth()
        .signOut()
        .then(() => {
          root.$cookies.remove('set-token')
          root.$router.push('/user/login')
        })
    }
    return {
      logout,
    }
  },
})
</script>
