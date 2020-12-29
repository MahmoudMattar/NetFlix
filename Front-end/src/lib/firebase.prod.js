<<<<<<< HEAD
import Firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
//production version [prod]
// 1) when seeding the database you'll have to uncomment this!
// import { seedDatabase } from '../seed';

const config = {
  apiKey: 'AIzaSyAR4XcUDz8e6VgyOjrzuWL_A1NKfuHA6eU',
  authDomain: 'netflix-baff3.firebaseapp.com',
  databaseURL: 'https://netflix-baff3.firebaseio.com',
  projectId: 'netflix-baff3',
  storageBucket: 'netflix-baff3.appspot.com',
  messagingSenderId: '210400097325',
  appId: '1:210400097325:web:162cf88cb074af5411b4a4',
}

const firebase = Firebase.initializeApp(config)
// 2) when seeding the database you'll have to uncomment this!
// seedDatabase(firebase);
// 3) once you have populated the database (only run once!), re-comment this so you don't get duplicate data

export { firebase }
=======
import Firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
//production version [prod]
// 1) when seeding the database you'll have to uncomment this!
// import { seedDatabase } from '../seed';

const config = {
  apiKey: 'AIzaSyAR4XcUDz8e6VgyOjrzuWL_A1NKfuHA6eU',
  authDomain: 'netflix-baff3.firebaseapp.com',
  databaseURL: 'https://netflix-baff3.firebaseio.com',
  projectId: 'netflix-baff3',
  storageBucket: 'netflix-baff3.appspot.com',
  messagingSenderId: '210400097325',
  appId: '1:210400097325:web:162cf88cb074af5411b4a4',
}

const firebase = Firebase.initializeApp(config)
// 2) when seeding the database you'll have to uncomment this!
// seedDatabase(firebase);
// 3) once you have populated the database (only run once!), re-comment this so you don't get duplicate data

export { firebase }
>>>>>>> mattar
