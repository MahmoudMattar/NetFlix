import React, { useContext } from 'react'
import { Route, Redirect } from 'react-router-dom'
import { FirebaseContext } from '../context/firebase'

export function IsUserRedirect({ user, loggedInPath, children, ...rest }) {
  return (
    <Route
      {...rest}
      render={() => {
        if (!user) {
          return children
        }

        if (user) {
          return (
            <Redirect
              to={{
                pathname: loggedInPath,
              }}
            />
          )
        }

        return null
      }}
    />
  )
}

export function ProtectedRoute({ user, children, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) => {
        if (user) {
          return children
        }

        if (!user) {
          return (
            <Redirect
              to={{
                pathname: 'signin',
                state: { from: location },
              }}
            />
          )
        }

        return null
      }}
    />
  )
}

//  export function ProtectedStripe({  children, ...rest }) {

//   const {firebase} =useContext(FirebaseContext);
//    const user = firebase.auth().currentUser  ;
//    console.log(user)
//    let StripeData;
//     const db = firebase.firestore();
//     const stripeID = db.collection('stripe').doc("5GbDcbLsSrP4lEKepJdbo22wVfW2").get()
//       .then(function(doc) {
//         if (doc.exists) {
//              console.log("Document data:", doc.data());
//              StripeData = doc.data().StripeId;
//         } else {
//             // doc.data() will be undefined in this case
//             console.log("No such document!");
//         }
//     }).catch(function(error) {
//         console.log("Error getting document:", error);
//     });

//    return (
//     <Route
//       {...rest}
//       render={({ location }) => {
//         if (user && StripeData) {
//           return children;
//         }

//         if (!user) {
//           return (
//             <Redirect
//               to={{
//                 pathname: 'signin',
//                 state: { from: location },
//               }}
//             />
//           );
//         }

//         return null;
//       }}
//     />
//   );
//  }
