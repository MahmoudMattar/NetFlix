import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { seedDatabase } from '../seed';

const config = {
  apiKey: 'AIzaSyAR4XcUDz8e6VgyOjrzuWL_A1NKfuHA6eU',
  authDomain: 'netflix-baff3.firebaseapp.com',
  databaseURL: 'https://netflix-baff3.firebaseio.com',
  projectId: 'netflix-baff3',
  storageBucket: 'netflix-baff3.appspot.com',
  messagingSenderId: '210400097325',
  appId: '1:210400097325:web:162cf88cb074af5411b4a4',
};
const firebase = Firebase.initializeApp(config);

//just call one time for intialize the data
//seedDatabase(firebase);
export { firebase };
