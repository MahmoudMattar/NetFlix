import React from 'react'
import { Feature, OptForm } from '../components'
import { HeaderContainer } from '../containers/header'
import { JumbotronContainer } from '../containers/jumbotron'
import { FaqContainers } from '../containers/faqs'
import { FooterContainer } from '../containers/footer'
import { Link, useHistory } from 'react-router-dom'
import * as ROUTES from '../constants/routes'
import { useState } from 'react'

export default function Home() {
  let history = useHistory()

  let [email, setEmail] = useState('email')

  function handelEmailChange(e) {
    setEmail(e.target.value)
  }
  return (
    <>
      <HeaderContainer>
        <Feature>
          <Feature.Title>
            Unlimited films, TV programmes and more.
          </Feature.Title>
          <Feature.SubTitle>
            Watch anywhere. Cancel at any time.
          </Feature.SubTitle>
          <OptForm>
            <OptForm.Input
              placeholder="Email address"
              onChange={handelEmailChange}
            />

            <OptForm.Button to={{ pathname: ROUTES.SIGN_UP }} userEmail={email}>
              Try it now
            </OptForm.Button>

            <OptForm.Break />
            <OptForm.Text>
              Ready to watch? Enter your email to create or restart your
              membership.
            </OptForm.Text>
          </OptForm>
        </Feature>
      </HeaderContainer>

      <JumbotronContainer />
      <FaqContainers />
      <FooterContainer />
    </>
  )
}
