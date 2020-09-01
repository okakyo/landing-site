import 'firebase/firestore'
import { firebase } from '@/plugins/firebase.config'
const db = firebase.app().firestore()

export class UserStore {
  user: firebase.firestore.CollectionReference
  constructor() {
    this.user = db.collection('user')
  }

  findAllAccouts() {
    return this.user.get().then((snapshot) =>
      snapshot.docs.map((data) => {
        return { id: data.id, data: data.data() }
      })
    )
  }

  findOneAccountById(userId: string) {
    return this.user
      .doc(userId)
      .get()
      .then((res) => {
        return {
          id: res.id,
          data: res.data(),
        }
      })
  }
}
