import * as firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: 'AIzaSyCKgZgLAbUrDOo1OjNDTMw94maM7RkKXRc',
  authDomain: 'practicevue-f4261.firebaseapp.com',
  databaseURL: 'https://practicevue-f4261.firebaseio.com',
  projectId: 'practicevue-f4261',
  storageBucket: 'practicevue-f4261.appspot.com',
  messagingSenderId: '793614033992',
  appId: '1:793614033992:web:513c6ee34a3d2c7369247d',
}

if (!firebase.apps.length) {
  const config = firebaseConfig
  firebase.initializeApp(config)
}

export { firebase }
