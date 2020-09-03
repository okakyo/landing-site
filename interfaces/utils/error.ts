import firebase from 'firebase'

export const ParseAuthError = (e: firebase.auth.Error): string => {
  const code = e.code
  switch (code) {
    case 'auth/email-already-in-use':
      return 'このメールアドレスは既に使われてます。'
    case 'auth/email-not-verification':
      return 'このアカウントはメール認証が完了していません。'
    case 'auth/invalid-email':
      return 'このメールアドレスは無効です。'

    case 'auth/user-disabled':
      return 'このアカウントは使えません。'

    case 'auth/user-not-found' || 'auth/wrong-password':
      return '入力されたメール、又はパスワードが違います。'
    case 'auth/wrong-account-plan':
      return 'このアカウントは間違っています。'

    default:
      return '想定外のエラーが発生しました。'
  }
}
