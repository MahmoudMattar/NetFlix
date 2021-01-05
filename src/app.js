import React, { useState } from 'react'
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import {
  Home,
  Browse,
  SignIn,
  SignUp,
  Account,
  Plans,
  Terms,
  Privacy,
  Original,
  Legal,
  FAQ,
  Corporate,
  Contact,
} from './pages'
import * as ROUTES from './constants/routes'
import { IsUserRedirect, ProtectedRoute } from './helpers/routes'
import { useAuthListener } from './hooks'

export default function App() {
  const { user } = useAuthListener()

  let [userEmail, setUserEmail] = useState('')

  function handelSet(data) {
    setUserEmail(data)
  }

  return (
    <Router>
      <Switch>
        <ProtectedRoute user={user} path={ROUTES.ACCOUNT}>
          <Account />
        </ProtectedRoute>
        <ProtectedRoute user={user} path={ROUTES.CONTACT_US}>
          <Contact />
        </ProtectedRoute>
        <ProtectedRoute user={user} path={ROUTES.CORPORATE_INFO}>
          <Corporate />
        </ProtectedRoute>
        <ProtectedRoute user={user} path={ROUTES.FAQ}>
          <FAQ />
        </ProtectedRoute>
        <ProtectedRoute user={user} path={ROUTES.LEGAL}>
          <Legal />
        </ProtectedRoute>
        <ProtectedRoute user={user} path={ROUTES.NETFLIX_ORIGINAL}>
          <Original />
        </ProtectedRoute>
        <ProtectedRoute user={user} path={ROUTES.PRIVACY}>
          <Privacy />
        </ProtectedRoute>
        <ProtectedRoute user={user} path={ROUTES.TERMS}>
          <Terms />
        </ProtectedRoute>
        <ProtectedRoute user={user} path={ROUTES.PLANS}>
          <Plans />
        </ProtectedRoute>
        <IsUserRedirect
          user={user}
          loggedInPath={ROUTES.PLANS}
          path={ROUTES.SIGN_UP}
        >
          <SignUp userEmail={userEmail} />
        </IsUserRedirect>
        <IsUserRedirect
          user={user}
          loggedInPath={ROUTES.BROWSE}
          path={ROUTES.PLANS}
        >
          <Plans />
        </IsUserRedirect>
        <IsUserRedirect
          user={user}
          loggedInPath={ROUTES.BROWSE}
          path={ROUTES.SIGN_IN}
        >
          <SignIn />
        </IsUserRedirect>

        <IsUserRedirect loggedInPath={ROUTES.ACCOUNT} path={ROUTES.ACCOUNT}>
          <Account />
        </IsUserRedirect>
        <ProtectedRoute user={user} path={ROUTES.BROWSE}>
          <Browse />
        </ProtectedRoute>
        <IsUserRedirect
          user={user}
          loggedInPath={ROUTES.BROWSE}
          path={ROUTES.HOME}
        >
          <Home setUserEmail={handelSet} />
        </IsUserRedirect>
      </Switch>
    </Router>
  )
}
