import { firebase } from '@/plugins/firebase.config'
import 'firebase/auth'
import { NuxtCookies } from 'cookie-universal-nuxt'
import { ParseError } from '@/interfaces'

export type ResponseHttp = {
  result: boolean
  error?: string
}

export const loginService = async (
  typeProvider: 'GitHub' | 'Google',
  cookies: NuxtCookies,
  setUserState: any
) => {
  try {
    const provider =
      typeProvider === 'GitHub'
        ? new firebase.auth.GithubAuthProvider()
        : new firebase.auth.GoogleAuthProvider()
    const getUserInfo = await firebase.auth().signInWithPopup(provider)
    const setUser = getUserInfo.user
    if (setUser) {
      // Token をCookie に登録されるように実装する
      const token = await setUser.getIdToken(true)
      if (token) {
        cookies.set('set-token', token)
      }
      const userInfo = {
        id: setUser.uid,
        name: setUser.displayName ? setUser.displayName : '',
        email: setUser.email ? setUser.email : '',
        emailVerified: setUser.emailVerified,
        photoUrl: setUser.photoURL ? setUser.photoURL : '',
      }
      setUserState(userInfo)

      // TODO: ここでFirebaseの取得したState情報を登録する
      return {
        result: true,
        error: userInfo.email === '' || userInfo.name === '' ? '' : undefined,
      }
    } else {
      // NOTE: ここでメールが認証されていない場合、もう一度メールを再送信したうえで認証を要求する
      const currentUser = firebase.auth().currentUser
      if (currentUser !== null && !currentUser.emailVerified)
        await currentUser.sendEmailVerification({
          url: 'https://example.com/mypage/',
          handleCodeInApp: false,
        })
      return { result: false, error: 'メールの登録を先に済ませてください。' }
    }
  } catch (e) {
    return { result: false, error: e.message }
  }
}

export const logoutService = async (
  cookies: NuxtCookies
): Promise<void | ResponseHttp> => {
  try {
    await firebase
      .auth()
      .signOut()
      .then(() => {
        cookies.remove('set-token')
      })
  } catch (e) {
    return { result: false, error: ParseError(e) }
  }
}

export const signupService = () => {
  return ''
}
