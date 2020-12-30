import Firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
// import { seedDatabase } from '../seed'

//seed the database

//make config
const config = {
  //key from firebase
  apiKey: 'AIzaSyC6wVUZeaPhree8KyOoHQIVxJXDfan5TAg',
  authDomain: 'develop-netflix-2379c.firebaseapp.com',
  databaseURL: 'https://develop-netflix-2379c-default-rtdb.firebaseio.com',
  projectId: 'develop-netflix-2379c',
  storageBucket: 'develop-netflix-2379c.appspot.com',
  messagingSenderId: '504237360832',
  appId: '1:504237360832:web:2e218de91ee4121b09cf25',
}

const firebase = Firebase.initializeApp(config)
// seedDatabase(firebase)
export { firebase }
