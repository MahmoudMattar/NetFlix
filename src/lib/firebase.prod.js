import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
//import { seedDatabase } from "../seed";

var firebaseConfig = {
  apiKey: "AIzaSyA6qRgHE8NpRr6BTB5bgBweAH3UC2a8Vt8",
    authDomain: "netflix-new-5cb11.firebaseapp.com",
    projectId: "netflix-new-5cb11",
    storageBucket: "netflix-new-5cb11.appspot.com",
    messagingSenderId: "318573788997",
    appId: "1:318573788997:web:27db65d23c7cdc6d9a082c",
    measurementId: "G-8Q69X0WD6C"
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)
//just call one time for intialize the data
 //seedDatabase(firebase);

export { firebase }
