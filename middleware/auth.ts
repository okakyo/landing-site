import { Middleware } from '@nuxt/types'
import { firebase } from '@/plugins/firebase.config'
const middlewareAuth: Middleware = ({ app, redirect }) => {
  firebase.auth().onAuthStateChanged((user) => {
    if (!user) {
      return redirect('/')
    }
  })
}

export default middlewareAuth
