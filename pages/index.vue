<template>
  <div>
    <illust-window />
    <description-window :service-descriptions="serviceDescriptions" />
    <price-window />
    <div>
      {{ status }}
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api'
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
    const serviceDescriptions = await $content('index/feature')
      .only(['title'])
      .fetch()
    return {
      serviceDescriptions,
    }
  },
  setup() {
    const status = ref(process.env)
    return { status }
  },
})
</script>
