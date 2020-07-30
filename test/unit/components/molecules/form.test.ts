import { mount, createLocalVue } from '@vue/test-utils'
import Vuetify from 'vuetify'
import LoginForm from '@/components/molecules/forms/LoginForm.vue'

const localVue = createLocalVue()

describe('フォームのテスト', () => {
  let vuetify: any

  beforeEach(() => {
    vuetify = new Vuetify()
  })
  it('ログインフォームにおけるテスト', () => {
    const wrapper = mount(LoginForm, {
      localVue,
      vuetify,
    })
    expect(wrapper.html).toBe('')
  })
})
