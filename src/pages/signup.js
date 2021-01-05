import React, { useState, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { FirebaseContext } from '../context/firebase'
import { Form } from '../components'
import { HeaderContainer } from '../containers/header'
import { FooterContainer } from '../containers/footer'
import * as ROUTES from '../constants/routes'
import axios from 'axios'

export default function SignUp(props) {
  const history = useHistory()
  const { firebase } = useContext(FirebaseContext)
  const [name, setName] = useState('')
  const [email, setEmail] = useState(props.userEmail ? props.userEmail : '')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const isInvalid = name === '' || password === '' || email === ''

  console.log(props.userEmail)

  const handleSignup = (event) => {
    event.preventDefault()

    //MongoDb Save
    axios
      .post('http://localhost:8080/api/auth/signup', {
        name,
        email,
        password,
      })
      .then((result) => {
        console.log('User Saved')
        history.push(ROUTES.SIGN_IN)
      })
      .catch((error) => {
        console.log(error)
      })

    return firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((result) =>
        result.user
          .updateProfile({
            displayName: name,
            photoURL: Math.floor(Math.random() * 5) + 1,
          })
          .then(() => {
            history.push(ROUTES.PLANS)
          })
      )
      .catch((error) => {
        setName('')
        setEmail('')
        setPassword('')
        setError(error.message)
      })
  }

  return (
    <>
      <HeaderContainer>
        <Form>
          <Form.Title>Sign Up</Form.Title>
          {error && <Form.Error>{error}</Form.Error>}

          <Form.Base onSubmit={handleSignup} method="POST">
            <Form.Input
              placeholder="First name"
              value={name}
              onChange={({ target }) => setName(target.value)}
            />
            <Form.Input
              placeholder="Email address"
              value={email}
              onChange={({ target }) => setEmail(target.value)}
            />
            <Form.Input
              type="password"
              value={password}
              autoComplete="off"
              placeholder="Password"
              onChange={({ target }) => setPassword(target.value)}
            />
            {/* <Form.Input
              type="password"
              value={password2}
              autoComplete="off"
              placeholder="Check Password"
              onChange={({ target }) => setPassword2(target.value)}
            /> */}
            <Form.Submit
              disabled={isInvalid}
              type="submit"
              data-testid="sign-up"
            >
              Sign Up
            </Form.Submit>
          </Form.Base>

          <Form.Text>
            Already a user? <Form.Link to="/signin">Sign in now.</Form.Link>
          </Form.Text>
          <Form.TextSmall>
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot. Learn more.
          </Form.TextSmall>
        </Form>
      </HeaderContainer>
      <FooterContainer />
    </>
  )
}
