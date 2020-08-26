import { Middleware } from '@nuxt/types'

const middlewareAuth: Middleware = ({ app, redirect }) => {
  const header = app.$cookies.get('access_token')
  if (!header) {
    return redirect('/')
  } else {
    // TODO : この部分に使用している人 の Store情報を取得する
  }
}

export default middlewareAuth
