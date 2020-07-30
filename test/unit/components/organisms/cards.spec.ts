import { mount, createLocalVue } from '@vue/test-utils'
import Vuetify from 'vuetify'

import AuthCard from '@/components/organisms/cards/AuthCard.vue'
import BaseCard from '@/components/organisms/cards/BaseCard.vue'
// import IntroCard from "@/components/organisms/cards/user/IntroCard.vue"
// import AuthContent from '@/components/organisms/lists/auth/AuthContent.vue'

let vuetify: any
const localVue = createLocalVue()
describe('カードのテスト', () => {
  beforeAll(() => {
    vuetify = new Vuetify()
  })
  it.each([
    ['BaseCard', BaseCard],
    ['AuthCard', AuthCard],
  ])('%s のテスト', (componentName, component) => {
    const wrapper = mount(component, {
      localVue,
      vuetify,
      propsData: {
        cardTitle: componentName,
      },
    })
    const cardTitle = wrapper.find('.v-toolbar__title')
    const toolbar = wrapper.find('.v-toolbar')
    // flat であるかどうかのテスト
    expect(toolbar.classes()).toContain('v-toolbar--flat')
    expect(cardTitle.text()).toBe(componentName)

    // TODO: 他に追加すべきことがあれば後で実装
  })
  // describe('IntroCard のテスト', () => {})
})
