import { mount, createLocalVue, RouterLinkStub } from '@vue/test-utils'
import Vuetify from 'vuetify'

// import AuthContent from '@/components/organisms/lists/auth/AuthContent.vue'
import NavLists from '@/components/organisms/lists/nav/NavLists.vue'
// import ProfileLists from "@/components/organisms/lists/profile/ProfileLists.vue";
// import SettingLists from "@/components/organisms/lists/setting/SettingLists.vue";
// MEMO: ここの型については一度しか vuetifyを呼び出さないため、any型にしても問題ない

let vuetify: any
const localVue = createLocalVue()
describe('リスト周りのテスト', () => {
  beforeAll(() => {
    vuetify = new Vuetify()
  })
  // SNS のログインについての mock 関数を実装する必要あり
  /*
  describe('認証周りのコンポーネントテスト', () => {
    it('', () => {
      const wrapper = mount(AuthContent, {
        localVue,
        vuetify,
        stubs: {
          NuxtLink: RouterLinkStub
        }
      })
      console.log(wrapper)
    })
  }); */

  describe('ナビリストのコンポーネント', () => {
    const wrapper = mount(NavLists, {
      localVue,
      vuetify,
      stubs: {
        NuxtLink: RouterLinkStub,
      },
    })
    it('カードタイトルを取得', () => {
      const sidebarrTitle = wrapper.find('#sidebarTitle')
      expect(sidebarrTitle.element.tagName).toBe('H2')
      expect(sidebarrTitle.text()).toBe('Kivitz')
    })
    it.each([
      [0, 'mdi-apps', 'Dashboard', '/user'],
      [1, 'mdi-account', 'Profile', '/user/profile'],
      [2, 'mdi-cog', 'Setting', '/user/setting'],
    ])('ボタンを取得', (indexNum, iconName, buttonTitle, buttonUrl) => {
      const navLists = wrapper.findAllComponents(RouterLinkStub)
      const listIcons = wrapper.findAll('.v-icon')
      expect(listIcons.at(indexNum).classes()).toContain(iconName)
      expect(navLists.at(indexNum).text()).toBe(buttonTitle)
      expect(navLists.at(indexNum).props().to).toBe(buttonUrl)
    })
  })
})
