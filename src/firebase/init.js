import firebase from 'firebase/app'
import 'firebase/firestore'

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: 'AIzaSyCGawgcO3HmnCvEQMFgVrKhGGAcV-cjpvc',
  authDomain: 'ninja-smoothies-25843.firebaseapp.com',
  databaseURL: 'https://ninja-smoothies-25843.firebaseio.com',
  projectId: 'ninja-smoothies-25843',
  storageBucket: 'ninja-smoothies-25843.appspot.com',
  messagingSenderId: '520727538025',
  appId: '1:520727538025:web:01ae63703f9f824e71b5f8'
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)

// Export firestore database
export const db = firebase.firestore()
