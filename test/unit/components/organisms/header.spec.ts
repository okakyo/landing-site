import { mount, createLocalVue, RouterLinkStub } from '@vue/test-utils'
import Vuetify from 'vuetify'

import IndexHeader from '@/components/organisms/header/IndexHeader.vue'
import Headers from '@/components/organisms/header/Headers.vue'

const localVue = createLocalVue()

describe('ヘッダーのテスト', () => {
  let vuetify: any

  beforeEach(() => {
    vuetify = new Vuetify()
  })
  it('インデックスヘッダーにおけるテスト', () => {
    const wrapper = mount(IndexHeader, {
      localVue,
      vuetify,
      stubs: {
        NuxtLink: RouterLinkStub,
      },
    })
    const buttonLink = wrapper.findAllComponents(RouterLinkStub)
    expect(buttonLink.at(0).text()).toBe('Kivitz')
    expect(buttonLink.at(0).props().to).toBe('/')
    expect(buttonLink.at(1).text()).toBe('ログイン')
    expect(buttonLink.at(1).props().to).toBe('/user/login')
  })

  // TODO: ユーザー画面でのヘッダー(＋NavLists)のテスト

  it('ログインヘッダー', () => {
    const wrapper = mount(Headers, {
      localVue,
      vuetify,
      stubs: {
        NuxtLink: RouterLinkStub,
      },
    })
    const buttonLink = wrapper.find('#logoutButton')
    expect(buttonLink.text()).toBe('ログアウト')
    /*
    console.log("チェック；",buttonLink.props().to);
    expect(buttonLink.props().to).toBe('/user/login')
    */
  })
})
