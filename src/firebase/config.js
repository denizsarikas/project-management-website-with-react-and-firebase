import firebase from 'firebase/app'

import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyAABmXoqwT_Q04S4WgpRIdLBlGlq45gy40",
    authDomain: "thedojosite-393ba.firebaseapp.com",
    projectId: "thedojosite-393ba",
    storageBucket: "thedojosite-393ba.appspot.com",
    messagingSenderId: "628450983559",
    appId: "1:628450983559:web:f092c77acafb36abd44222"
  }

  //init firebase

  firebase.initializeApp(firebaseConfig)

  //init services

  const projectFirestore = firebase.firestore()
  const projectAuth = firebase.auth()
  const projectStorage = firebase.storage()

  //timestamp

  const timestamp = firebase.firestore.Timestamp

  export { projectFirestore, projectAuth, projectStorage, timestamp }