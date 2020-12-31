import React, { useState, useEffect, useContext } from 'react';
import { FirebaseContext } from "../context/firebase";
import { Header, Account } from '../components';
import * as ROUTES from '../constants/routes';
import logo from '../logo.svg';
import { FooterContainer } from '../containers/footer';
import { Link } from 'react-router-dom';


export function SelectAccountContainer({ children, user }) {
  const [category, setCategory] = useState('series');
  const [searchTerm, setSearchTerm] = useState('');

  const [changeEmail, setchangeEmail] = useState('');
  const [changePassword, setchangePassword] = useState('');
  const [changePhone, setchangePhone] = useState('');
  const [changePayment, setchangePayment] = useState('');
  const [changeRedeem, setchangeRedeem] = useState('');

  const [EmailInput, setEmailInput] = useState(false);
  const [PasswordInput, setPasswordInput] = useState(false);
  const [PhoneInput, setPhoneInput] = useState(false);
  const [PaymentInput, setPaymentInput] = useState(false);
  const [RedeemInput, setRedeemInput] = useState(false);

  const { firebase } = useContext(FirebaseContext);
  user = firebase.auth().currentUser || {};

  useEffect(() => {
    console.log(changeEmail);

  }, [changeEmail]);

  useEffect(() => {

    console.log(changePassword);

  }, [changePassword]);

  useEffect(() => {

    console.log(changePhone);

  }, [changePhone]);

  useEffect(() => {

    console.log(changePayment);

  }, [changePayment]);

  useEffect(() => {

    console.log(changeRedeem);

  }, [changeRedeem]);

  return (
    <>

      <Header.Frame>
        <Header.Group>
          <Header.Logo to={ROUTES.HOME} src={logo} alt="Netflix" />
          <Header.TextLink active={category === 'series' ? 'true' : 'false'} onClick={() => setCategory('series')}>
            Series
            </Header.TextLink>
          <Header.TextLink active={category === 'films' ? 'true' : 'false'} onClick={() => setCategory('films')}>
            Films
            </Header.TextLink>
        </Header.Group>
        <Header.Group>
          <Header.Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          <Header.Profile>
            <Header.Picture src={user.photoURL} />
            <Header.Dropdown>
              <Header.Group>
                <Header.Picture src={user.photoURL} />
                <Header.TextLink>{user.displayName}</Header.TextLink>
              </Header.Group>
              <Header.Group>
                <Header.TextLink to={ROUTES.ACCOUNT}><Link style={{ color: "white", textDecoration: "none" }} to={ROUTES.ACCOUNT}>Account</Link></Header.TextLink>
              </Header.Group>
              <Header.Group>
                <Header.TextLink onClick={() => firebase.auth().signOut()}>Sign out</Header.TextLink>
              </Header.Group>
            </Header.Dropdown>
          </Header.Profile>
        </Header.Group>
      </Header.Frame>

      <Account.Main>
        <Account.Container>
          <Account.Title>Account</Account.Title>

          <Account.InnerContainer>
            <div>{" "}
              <div>
                <Account.Side_Title>Membership & Billing</Account.Side_Title>
                <Account.CancelBtn>Cancel Membership</Account.CancelBtn>
              </div>
            </div>
            <Account.Info_Details>
              <Account.SubContainer>
                <Account.Row>
                  {EmailInput ?
                    <Account.Input
                      defaultValue={user.email}
                      onChange={(e) => {
                        setchangeEmail(e.target.value);
                      }}
                      onBlur={(e) => {
                        setEmailInput(false);
                      }}
                    ></Account.Input> : <Account.Email >{changeEmail !== '' ? changeEmail : user.email}</Account.Email>}

                  {PasswordInput ?
                    <Account.Input
                      defaultValue=""
                      onChange={(e) => {
                        setchangePassword(e.target.value);
                      }}
                      onBlur={(e) => {
                        setPasswordInput(false);
                      }}
                    ></Account.Input> : <Account.Password>Password: *******</Account.Password>}

                  {PhoneInput ?
                    <Account.Input
                      defaultValue={user.phone}
                      onChange={(e) => {
                        setchangePhone(e.target.value);
                      }}
                      onBlur={(e) => {
                        setPhoneInput(false);
                      }}
                    ></Account.Input> : <Account.Phone >Phone:{changePhone !== '' ? changePhone : ` 01005632595`}</Account.Phone>}

                </Account.Row>
                <Account.Link>

                  <Account.Row>
                    <Account.Link_style onClick={() => setEmailInput(true)}>
                      Change account Email
                    </Account.Link_style>
                  </Account.Row>

                  <Account.Row>
                    <Account.Link_style onClick={() => setPasswordInput(true)}>
                      Change password
                      </Account.Link_style>
                  </Account.Row>
                  <Account.Row>
                    <Account.Link_style onClick={() => setPhoneInput(true)}>
                      Change phone number
                      </Account.Link_style>
                  </Account.Row>
                </Account.Link>
              </Account.SubContainer>
              <Account.InnerContainer>
                <Account.SubContainer>

                  <Account.Row>
                    {PaymentInput ?
                      <Account.Input
                        defaultValue={user.Payment}
                        onChange={(e) => {
                          setchangePayment(e.target.value);
                        }}
                        onBlur={(e) => {
                          setPaymentInput(false);
                        }}
                      ></Account.Input> : <div><i className={`fab fa-cc-visa  ${Account.VisaIcon}`}></i>
                        {changePayment !== '' ? `  ${changePayment}` : ` 1234 1234 1234 1234`}
                      </div>}
                  </Account.Row>

                  <Account.Link>
                    <Account.Row>
                      <Account.Link_style onClick={() => setPaymentInput(true)}>
                        Update Payment info
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
                  {RedeemInput ?
                    <Account.Input
                      defaultValue=''
                      onChange={(e) => {
                        setchangeRedeem(e.target.value);
                      }}
                      onBlur={(e) => {
                        setRedeemInput(false);
                      }}
                    ></Account.Input>
                    : ''}
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
              <Account.Side_Title>
                Plan Details
              </Account.Side_Title>

              <div>
                <Account.Row>
                  <Account.Link>
                    <Account.Link_style>
                      Change Plan
                    </Account.Link_style>
                  </Account.Link>
                </Account.Row>
              </div>
            </Account.SubContainer>
          </Account.InnerContainer>

          <Account.InnerContainer>
            <Account.Side_Title>
              Settings
            </Account.Side_Title>

            <Account.Link style={{ textAlign: "left" }}>
              <Account.Row><Account.Link_style>Parental controls</Account.Link_style></Account.Row>
              <Account.Row><Account.Link_style>Test participation</Account.Link_style></Account.Row>
              <Account.Row><Account.Link_style>Manage download devices</Account.Link_style></Account.Row>
              <Account.Row><Account.Link_style>Activate a device</Account.Link_style></Account.Row>
              <Account.Row><Account.Link_style>Recent device streaming activity</Account.Link_style></Account.Row>
              <Account.Row><Account.Link_style onClick={() => firebase.auth().signOut()}>Sign out of all devices</Account.Link_style></Account.Row>
            </Account.Link>

          </Account.InnerContainer>


          <Account.InnerContainer>
            <Account.Side_Title>
              My Profile
            </Account.Side_Title>

            <Account.Link style={{ textAlign: "left" }}>
              <Account.Row>
                <Account.Picture src={user.photoURL} alt="Profile Picture"></Account.Picture>
              </Account.Row>

              <Account.Row><Account.Link_style>Add profile email</Account.Link_style></Account.Row>
              <Account.Row><Account.Link_style>Language</Account.Link_style></Account.Row>
              <Account.Row><Account.Link_style>Playback settings</Account.Link_style></Account.Row>
              <Account.Row><Account.Link_style>Subtitle appearance</Account.Link_style></Account.Row>
              <Account.Row><Account.Link_style>Viewing activity</Account.Link_style></Account.Row>
              {/* <Account.Row><Account.Link_style>Ratings</Account.Link_style></Account.Row> */}

            </Account.Link>


          </Account.InnerContainer>

        </Account.Container>
      </Account.Main>












      <FooterContainer />
    </>
  );
}
