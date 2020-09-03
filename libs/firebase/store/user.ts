import 'firebase/firestore'
import { firebase } from '@/plugins/firebase.config'
import { UserInterface } from '@/interfaces'

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
      .catch((e) => {
        return {
          status: e.code,
          message: e.details,
        }
      })
  }

  createAccount(AccountInfo: UserInterface) {
    return this.user
      .add(AccountInfo)
      .then((res) => {
        return {
          status: 'CREATE_SUCCESS',
          data: {
            ...AccountInfo,
            id: res.id,
          },
        }
      })
      .catch((e) => {
        return {
          code: e.code,
          message: e.detail,
        }
      })
  }

  updateAccount(AccountInfo: UserInterface) {
    return this.user
      .doc(AccountInfo.id)
      .update(AccountInfo)
      .then(() => {
        return {
          status: 'UPDATE_SUCCESS',
          data: AccountInfo,
        }
      })
      .catch((e) => {
        return {
          code: e.code,
          message: e.detail,
        }
      })
  }

  deleteAccount(accountId: string) {
    return this.user
      .doc(accountId)
      .delete()
      .then(() => {
        return {
          status: 'DELETE_SUCCESS',
        }
      })
      .catch((e) => {
        return {
          code: e.code,
          message: e.detail,
        }
      })
  }
}
