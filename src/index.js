<<<<<<< HEAD
import React from 'react'
import { render } from 'react-dom'
import 'normalize.css'
import { GlobalStyles } from './global-styles'
import { App } from './app'
import { firebase } from './lib/f.prod'
import { FirebaseContext } from './context/firebase'

render(
  <React.StrictMode>
    <FirebaseContext.Provider value={{ firebase }}>
      <GlobalStyles />
      <App />
    </FirebaseContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
=======
import React from 'react'
import { render } from 'react-dom'
import 'normalize.css'
import { GlobalStyles } from './global-styles'
import { App } from './app'
import { firebase } from './lib/f.prod'
import { FirebaseContext } from './context/firebase'

render(
  <React.StrictMode>
    <FirebaseContext.Provider value={{ firebase }}>
      <GlobalStyles />
      <App />
    </FirebaseContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
>>>>>>> mattar