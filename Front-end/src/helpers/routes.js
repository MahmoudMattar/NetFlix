<<<<<<< HEAD:src/helpers/routes.js
import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export function IsUserRedirect({ user, loggedInPath, children, ...rest }) {
  return (
    <Route
      {...rest}
      render={() => {
        if (!user) {
          console.log('not a user');

          return children;
        }

        if (user) {
          console.log('yes a user');

          return (
            <Redirect
              to={{
                pathname: loggedInPath,
              }}
            />
          );
        }

        return null;
      }}
    />
  );
}

export function ProtectedRoute({ user, children, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) => {
        if (user) {
          return children;
        }

        if (!user) {
          return (
            <Redirect
              to={{
                pathname: 'signin',
                state: { from: location },
              }}
            />
          );
        }

        return null;
      }}
    />
  );
}
=======
import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export function IsUserRedirect({ user, loggedInPath, children, ...rest }) {
  return (
    <Route
      {...rest}
      render={() => {
        if (!user) {
          return children;
        }

        if (user) {
          return (
            <Redirect
              to={{
                pathname: loggedInPath,
              }}
            />
          );
        }

        return null;
      }}
    />
  );
}

export function ProtectedRoute({ user, children, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) => {
        if (user) {
          return children;
        }

        if (!user) {
          return (
            <Redirect
              to={{
                pathname: 'signin',
                state: { from: location },
              }}
            />
          );
        }

        return null;
      }}
    />
  );
}
>>>>>>> 9cdd1b3531e8f5ce69796381e3bfda5a96ce3392:Front-end/src/helpers/routes.js
