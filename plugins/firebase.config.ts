import * as firebase from 'firebase'
import 'firebase/auth'
import 'firebase/storage'

const firebaseConfig = {}

const firebaseInit = firebase.initializeApp(firebaseConfig)

export default firebaseInit
