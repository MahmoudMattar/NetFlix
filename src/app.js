import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { Home, Browse, SignIn, SignUp, Account,Contact,FAQ,Corporate,Original,Terms ,Privacy ,Legal} from './pages';
import * as ROUTES from './constants/routes';
import { IsUserRedirect, ProtectedRoute } from './helpers/routes';
import { useAuthListener } from './hooks';

export function App() {
  const { user } = useAuthListener();

  return (
    <Router>
      <Switch>
      <ProtectedRoute user={user} loggedInPath={ROUTES.NETFLIX_ORIGINAL} path={ROUTES.NETFLIX_ORIGINAL}>
          <Original />
        </ProtectedRoute>
      <ProtectedRoute user={user} loggedInPath={ROUTES.LEGAL} path={ROUTES.LEGAL}>
          <Legal />
        </ProtectedRoute>
      <ProtectedRoute user={user} loggedInPath={ROUTES.PRIVACY} path={ROUTES.PRIVACY}>
          <Privacy />
        </ProtectedRoute>
      <ProtectedRoute user={user} loggedInPath={ROUTES.TERMS} path={ROUTES.TERMS}>
        <Terms/>
        </ProtectedRoute>
      <ProtectedRoute user={user} loggedInPath={ROUTES.CORPORATE_INFO} path={ROUTES.CORPORATE_INFO}>
          <Corporate />
        </ProtectedRoute>
      <ProtectedRoute user={user} loggedInPath={ROUTES.FAQ} path={ROUTES.FAQ}>
          <FAQ />
        </ProtectedRoute>
        <ProtectedRoute user={user} loggedInPath={ROUTES.CONTACT_US} path={ROUTES.CONTACT_US}>
          <Contact />
        </ProtectedRoute>
        <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.SIGN_IN}>
          <SignIn />
        </IsUserRedirect>
        <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.SIGN_UP}>
          <SignUp />
        </IsUserRedirect>
        
        <ProtectedRoute user={user} loggedInPath={ROUTES.ACCOUNT} path={ROUTES.ACCOUNT}>
          <Account />
        </ProtectedRoute>
        <ProtectedRoute user={user} path={ROUTES.BROWSE}>
          <Browse />
        </ProtectedRoute>
        <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.HOME}>
          <Home />
        </IsUserRedirect>

      </Switch>
    </Router>
  );
}
