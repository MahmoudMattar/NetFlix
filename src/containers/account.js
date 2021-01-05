import React, { useState, useEffect, useContext } from 'react'
import { FirebaseContext } from '../context/firebase'
import 'firebase/auth'
import { Header, Account } from '../components'
import * as ROUTES from '../constants/routes'
import logo from '../logo.svg'
import { FooterContainer } from '../containers/footer'
// import StripeCheckout from 'react-stripe-checkout';
// import axios from 'axios'
// import firebase from "firebase/app";
// import "firebase/database";

import { Link } from 'react-router-dom'
import StripeCheckout from 'react-stripe-checkout'
import axios from 'axios'
import { useAuthListener } from '../hooks/'

export function SelectAccountContainer({ children, user }) {
  const [category, setCategory] = useState('series')
  const [searchTerm, setSearchTerm] = useState('')

  const [changeEmail, setchangeEmail] = useState('')
  const [changePassword, setchangePassword] = useState('')
  const [changePhone, setchangePhone] = useState('')
  const [changePayment, setchangePayment] = useState('')
  const [changeRedeem, setchangeRedeem] = useState('')
  const [StripeData, setStripeData] = useState('')
  const [BillingDetails, setBilling] = useState('')
  const [Last4, setLast4] = useState('')
  const [stripeId, setstripeId] = useState('')

  const [EmailInput, setEmailInput] = useState(false)
  const [PasswordInput, setPasswordInput] = useState(false)
  const [PhoneInput, setPhoneInput] = useState(false)
  const [PaymentInput, setPaymentInput] = useState(false)
  const [RedeemInput, setRedeemInput] = useState(false)

  const { firebase } = useContext(FirebaseContext)
  // user = firebase.auth().currentUser || {};

  //payment visa card number
  //user.uid && stripeId
  // const stripeID =  db.collection('stripe').doc(Currentuser.uid).get()
  //      .then(function(doc) {​​​​​
  //        if (doc.exists) {​​​​​
  //             console.log("Document data:", doc.data());
  //             StripeData = doc.data().StripeId;
  //             // return flag = true;
  //        }​​​​​ else {​​​​​
  //            // doc.data() will be undefined in this case
  //            console.log("No such document!");
  //        }​​​​​
  //    }​​​​​).catch(function(error) {​​​​​
  //        console.log("Error getting document:", error);
  //    }​​​​​);

  // const { firebase } = useContext(FirebaseContext);
  user = firebase.auth().currentUser || {}
  let stripeUser = '';
  let userUid = '';
  if(user != null){
    stripeUser = user
    userUid = stripeUser.uid
  }
  
  const db = firebase.firestore()

  async function updateToken(token) {
    const response = await axios.post(
      `https://8xxlk.sse.codesandbox.io/customer/${stripeId}`,
      { token }
    )
    window.location.reload()
  }
  let stripeID ='';
  if(userUid != null){
   stripeID = db
    .collection('stripe')
    .doc(userUid)
    .get()
    .then(function (doc) {
      if (doc.exists) {
        console.log('Document data:', doc.data())
        setstripeId(doc.data().StripeId)
        return setStripeData(doc.data().subscriptionId)
      } else {
        // doc.data() will be undefined in this case
        console.log('No such document!')
      }
    })
    .catch(function (error) {
      console.log('Error getting document:', error)
    })
  }
  console.log(StripeData)

  async function getUser() {
    const requested = await axios.get(
      `https://8xxlk.sse.codesandbox.io/customer/${stripeId}`
    )
    console.log(requested.data.source)
    setLast4(requested.data.default_source.last4)
    // setBilling(requested.data.billing_details);
  }
  getUser()

  //update visa card number => 16 num

  useEffect(() => {
    // console.log(user.photoURL)
    try {
      //update the user Email
      if (changeEmail !== '' && EmailInput === false) {
        // changeEmail = user.email;
        // console.log(changeEmail)
        user
          .updateEmail(changeEmail)
          .then(function () {
            // Update successful.
            console.log(user.email)
          })
          .catch(function (error) {
            // An error happened.
          })
      }
    } catch (err) {}

    try {
      //update the user Password
      if (changePassword !== '' && PasswordInput === false) {
        // changeEmail = user.email;
        // console.log(changeEmail)
        user
          .updatePassword(changePassword)
          .then(function () {
            // Update successful.
            firebase.auth().signOut()
          })
          .catch(function (error) {
            // An error happened.
          })
      }
    } catch (err) {}
  })

  useEffect(() => {
    console.log(changePhone)
  }, [changePhone])

  useEffect(() => {
    console.log(changePayment)
  }, [changePayment])

  useEffect(() => {
    console.log(changeRedeem)
  }, [changeRedeem])

  return (
    <>
      <Header.Frame>
        <Header.Group>
          <Header.Logo to={ROUTES.HOME} src={logo} alt="Netflix" />
          <Header.TextLink
            active={category === 'series' ? 'true' : 'false'}
            onClick={() => setCategory('series')}
          >
            Series
          </Header.TextLink>
          <Header.TextLink
            active={category === 'films' ? 'true' : 'false'}
            onClick={() => setCategory('films')}
          >
            Films
          </Header.TextLink>
        </Header.Group>
        <Header.Group>
          <Header.Search
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
          />
          <Header.Profile>
              <Header.Picture src={user.photoURL} />
              <Header.Dropdown>
                <Header.Group>
                  <Header.Picture src={user.photoURL} />
                  <Header.TextLink to={ROUTES.ACCOUNT}>
                    <Link
                      style={{ color: 'white', textDecoration: 'none' }}
                      to={ROUTES.ACCOUNT}
                    >
                      {user.displayName}
                    </Link>
                  </Header.TextLink>
                </Header.Group>
                <Header.Group>
                  <Header.TextLink to={ROUTES.ACCOUNT}>
                    <Link
                      style={{ color: 'white', textDecoration: 'none' }}
                      to={ROUTES.ACCOUNT}
                    >
                      Settings
                    </Link>
                  </Header.TextLink>
                </Header.Group>
                <Header.Group>
                  <Header.TextLink onClick={() => firebase.auth().signOut()}>
                    Sign out
                  </Header.TextLink>
                </Header.Group>
              </Header.Dropdown>
            </Header.Profile>
        </Header.Group>
      </Header.Frame>

      <Account.Main>
        <Account.Container>
          <Account.Title>Account</Account.Title>

          <Account.InnerContainer>
            <div>
              {' '}
              <div>
                <Account.Side_Title>Membership & Billing</Account.Side_Title>
                <Account.CancelBtn>Cancel Membership</Account.CancelBtn>
              </div>
            </div>
            <Account.Info_Details>
              <Account.SubContainer>
                <Account.Row>
                  {EmailInput ? (
                    <Account.Input
                      defaultValue={user.email}
                      onChange={(e) => {
                        setchangeEmail(e.target.value)
                      }}
                      onBlur={(e) => {
                        setEmailInput(false)
                      }}
                    ></Account.Input>
                  ) : (
                    <Account.Email>
                      {changeEmail !== '' ? changeEmail : user.email}
                    </Account.Email>
                  )}

                  {PasswordInput ? (
                    <Account.Input
                      defaultValue=""
                      onChange={(e) => {
                        setchangePassword(e.target.value)
                      }}
                      onBlur={(e) => {
                        setPasswordInput(false)
                      }}
                    ></Account.Input>
                  ) : (
                    <Account.Password>Password: ******</Account.Password>
                  )}

                  {PhoneInput ? (
                    <Account.Input
                      defaultValue={user.phone}
                      onChange={(e) => {
                        setchangePhone(e.target.value)
                      }}
                      onBlur={(e) => {
                        setPhoneInput(false)
                      }}
                    ></Account.Input>
                  ) : (
                    <Account.Phone>
                      Phone:{changePhone !== '' ? changePhone : ` 01005632595`}
                    </Account.Phone>
                  )}
                </Account.Row>
                <Account.Link>
                  <Account.Row>
                    <Account.Link_style onClick={() => setEmailInput(true)}>
                      Change account Email
                    </Account.Link_style>
                  </Account.Row>

                  <Account.Row>
                    <Account.Link_style
                      onClick={() => {
                        setPasswordInput(true)
                        // firebase.auth().sendPasswordResetEmail('zredo100@gmail.com');
                        // alert('A Reset Password email has sent to your email')
                      }}
                    >
                      Reset your password
                    </Account.Link_style>
                    <Account.Row>
                      <Account.Link_style onClick={() => setPhoneInput(true)}>
                        Change phone number
                      </Account.Link_style>
                    </Account.Row>
                  </Account.Row>
                </Account.Link>
              </Account.SubContainer>
              <Account.InnerContainer>
                <Account.SubContainer>
                  <Account.Row>
                    <i className={`fab fa-cc-visa  ${Account.VisaIcon}`}></i>
                    {` **** **** **** ${Last4}`}
                    {/* {PaymentInput ?
                      <Account.Input
                        defaultValue={user.Payment}
                        onChange={(e) => {
                          setchangePayment(e.target.value);
                        }}
                        onBlur={(e) => {
                          setPaymentInput(false);
                        }}
                      ></Account.Input> : <div><i className={`fab fa-cc-visa  ${Account.VisaIcon}`}></i>
                        {changePayment !== '' ? `  ${changePayment}` : ` **** **** **** 1234`}
                      </div>} */}
                  </Account.Row>

                  <Account.Link>
                    <Account.Row>
                      <Account.Link_style onClick={() => setPaymentInput(true)}>
                        <StripeCheckout
                          stripeKey="pk_test_51I2KqVDroAwyxUrvfv1kGqUC7rXjKA13OjpO6Gos7rNEb4I3Y0ABch6g60NIxC9ahkJc53MvUTOlmTwryd0WflL000SMwfaNwh"
                          token={updateToken}
                          name="Update Visa"
                          currency="EGP"
                          email={user.email}
                          label="Update Card"
                          panelLabel="Update"
                        />
                      </Account.Link_style>
                    </Account.Row>
                    <Account.Row>
                      <Account.Link_style>Billing details</Account.Link_style>
                    </Account.Row>
                  </Account.Link>
                </Account.SubContainer>
              </Account.InnerContainer>
              <Account.InnerContainer>
                <Account.Link>
                  <Account.Row>
                    <Account.Link_style onClick={() => setRedeemInput(true)}>
                      Redeem gift card or promo code
                    </Account.Link_style>
                    {RedeemInput ? (
                      <Account.Input
                        defaultValue=""
                        onChange={(e) => {
                          setchangeRedeem(e.target.value)
                        }}
                        onBlur={(e) => {
                          setRedeemInput(false)
                          alert(`Promo code: ${e.target.value} is generated`)
                        }}
                      ></Account.Input>
                    ) : (
                      ''
                    )}
                  </Account.Row>

                  <Account.Row>
                    <Account.Link_style>
                      Where to buy gift cards
                    </Account.Link_style>
                  </Account.Row>
                </Account.Link>
              </Account.InnerContainer>
            </Account.Info_Details>
          </Account.InnerContainer>

          <Account.InnerContainer>
            <Account.SubContainer>
              <Account.Side_Title>Plan Details</Account.Side_Title>

              <div>
                <Account.Row>
                  <Account.Link>
                    <Account.Link_style>Change Plan</Account.Link_style>
                  </Account.Link>
                </Account.Row>
              </div>
            </Account.SubContainer>
          </Account.InnerContainer>

          <Account.InnerContainer>
            <Account.Side_Title>Settings</Account.Side_Title>

            <Account.Link style={{ textAlign: 'left' }}>
              <Account.Row>
                <Account.Link_style>Parental controls</Account.Link_style>
              </Account.Row>
              <Account.Row>
                <Account.Link_style>Test participation</Account.Link_style>
              </Account.Row>
              <Account.Row>
                <Account.Link_style>Manage download devices</Account.Link_style>
              </Account.Row>
              <Account.Row>
                <Account.Link_style>Activate a device</Account.Link_style>
              </Account.Row>
              <Account.Row>
                <Account.Link_style>
                  Recent device streaming activity
                </Account.Link_style>
              </Account.Row>
              <Account.Row>
                <Account.Link_style onClick={() => firebase.auth().signOut()}>
                  Sign out of all devices
                </Account.Link_style>
              </Account.Row>
            </Account.Link>
          </Account.InnerContainer>

          <Account.InnerContainer>
            <Account.Side_Title>My Profile</Account.Side_Title>

            <Account.Link style={{ textAlign: 'left' }}>
              <Account.Row>
                <Account.Picture
                  src={user.photoURL}
                  alt="Profile Picture"
                ></Account.Picture>
              </Account.Row>

              <Account.Row>
                <Account.Link_style>Add profile email</Account.Link_style>
              </Account.Row>
              <Account.Row>
                <Account.Link_style>Language</Account.Link_style>
              </Account.Row>
              <Account.Row>
                <Account.Link_style>Playback settings</Account.Link_style>
              </Account.Row>
              <Account.Row>
                <Account.Link_style>Subtitle appearance</Account.Link_style>
              </Account.Row>
              <Account.Row>
                <Account.Link_style>Viewing activity</Account.Link_style>
              </Account.Row>
              {/* <Account.Row><Account.Link_style>Ratings</Account.Link_style></Account.Row> */}
            </Account.Link>
          </Account.InnerContainer>
        </Account.Container>
      </Account.Main>

      <FooterContainer />
    </>
  )
}
