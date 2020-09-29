import { firebase } from '@/plugins/firebase.config'
import 'firebase/auth'
import { NuxtCookies } from 'cookie-universal-nuxt'
import { ParseAuthError } from '@/interfaces'

export type ResponseHttp = {
  result: boolean
  error?: string
}

export const loginService = async (typeProvider: 'GitHub' | 'Google') => {
  try {
    const provider =
      typeProvider === 'GitHub'
        ? new firebase.auth.GithubAuthProvider()
        : new firebase.auth.GoogleAuthProvider()
    const getUserInfo = await firebase.auth().signInWithPopup(provider)
    const setUser = getUserInfo.user
    if (setUser) {
      // ここに、Firestore の情報を追加する
      const userInfo = {
        id: setUser.uid,
        name: setUser.displayName ? setUser.displayName : '',
        email: setUser.email ? setUser.email : '',
        emailVerified: setUser.emailVerified,
        photoUrl: setUser.photoURL ? setUser.photoURL : '',
      }
      // TODO: ここでFirebaseの取得したState情報を登録する
      return {
        result: true,
        error:
          userInfo.email === '' || userInfo.name === ''
            ? '個人情報を入力してください'
            : undefined,
      }
    }
  } catch (e) {
    return { result: false, error: ParseAuthError(e) }
  }
}

export const logoutService = async (
  cookies: NuxtCookies
): Promise<void | ResponseHttp> => {
  try {
    await firebase.auth().signOut()
  } catch (e) {
    return { result: false, error: ParseAuthError(e) }
  }
}

export const signupService = () => {
  return ''
}
