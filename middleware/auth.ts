import { Middleware } from '@nuxt/types'
import { firebase } from '@/plugins/firebase.config'
const middlewareAuth: Middleware = ({ app, redirect }) => {
  firebase.auth().onAuthStateChanged((user) => {
    console.log(user)
    if (!user) {
      return redirect('/')
    }
  })
}

export default middlewareAuth
