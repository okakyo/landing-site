import 'firebase/firestore'
import { firebase } from '@/plugins/firebase.config'

const store = firebase.app().firestore()

export class AuthStore {
  auth: firebase.firestore.CollectionReference
  constructor() {
    this.auth = store.collection('group')
  }

  findAllAuth() {
    return this.auth.get().then((snapshot) =>
      snapshot.docs.map((data) => {
        return { id: data.id, data: data.data() }
      })
    )
  }

  findOneAuth(groupId: string) {
    return this.auth
      .doc(groupId)
      .get()
      .then((res) => {
        return {
          id: res.id,
          data: res.data,
        }
      })
  }
}
