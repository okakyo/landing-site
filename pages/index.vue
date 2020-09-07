<template>
  <div>
    <illust-window />
    <description-window
      :service-descriptions="serviceDescriptions[0].contents"
    />
    <price-window />
  </div>
</template>
<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import DescriptionWindow from '@/components/templates/index/Description.vue'
import IllustWindow from '@/components/templates/index/IllustWindow.vue'
import PriceWindow from '@/components/templates/index/PriceWindow.vue'
export default defineComponent({
  name: 'Index',
  components: {
    DescriptionWindow,
    IllustWindow,
    PriceWindow,
  },
  async asyncData({ $content }) {
    const serviceDescriptions = await $content('index')
      .only(['contents'])
      .sortBy('path')
      .fetch()
    return {
      serviceDescriptions,
    }
  },
})
</script>
