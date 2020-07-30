<template>
  <div>
    <intro-contents
      :user-id="userState.id"
      :user-name="userState.name"
      :user-picture="userState.photoUrl"
    />
    <v-divider />
    <profile-list />
  </div>
</template>
<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import ProfileList from '@/components/organisms/lists/profile/ProfileList.vue'

import { globalUserState } from '@/compositions'
import IntroContents from './IntroContents.vue'

export default defineComponent({
  name: 'Settingwindow',
  components: {
    ProfileList,
    IntroContents,
  },
  setup() {
    const { userState } = globalUserState()
    console.log('ID:', userState.id)
    return {
      ...userState,
    }
  },
})
</script>
