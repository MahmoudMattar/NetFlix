import React from 'react'
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import { Home, Browse, SignIn, SignUp, Account, Plans } from './pages'
import * as ROUTES from './constants/routes'
import { IsUserRedirect, ProtectedRoute } from './helpers/routes'
import { useAuthListener } from './hooks'

export default function App() {
  const { user } = useAuthListener()

  return (
    <Router>
      <Switch>
        <ProtectedRoute user={user} path={ROUTES.PLANS}>
          <Plans />
        </ProtectedRoute>
        <IsUserRedirect
          user={user}
          loggedInPath={ROUTES.BROWSE}
          path={ROUTES.SIGN_IN}
        >
          <SignIn />
        </IsUserRedirect>
        <IsUserRedirect
          user={user}
          loggedInPath={ROUTES.BROWSE}
          path={ROUTES.SIGN_UP}
        >
          <SignUp />
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
          <Home />
        </IsUserRedirect>
      </Switch>
    </Router>
  )
}
