import React, { useState, useEffect, useContext } from 'react';
import { FirebaseContext } from "../context/firebase";
import { Header, Account } from '../components';
import * as ROUTES from '../constants/routes';
import logo from '../logo.svg';
import { FooterContainer } from '../containers/footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes,faChevronRight } from '@fortawesome/free-solid-svg-icons'

export function SelectAccountContainer({ children, user }) {
  const [category, setCategory] = useState('series');
  const [profile, setProfile] = useState({});
  // const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  // const [slideRows, setSlideRows] = useState([]);

  const { firebase } = useContext(FirebaseContext);
  user = firebase.auth().currentUser || {};
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
                <Header.Account path={ROUTES.ACCOUNT} />
              </Header.Group>
              <Header.Group>
                <Header.TextLink onClick={() => firebase.auth().signOut()}>Sign out</Header.TextLink>
              </Header.Group>
            </Header.Dropdown>
          </Header.Profile>
        </Header.Group>
      </Header.Frame>

      {/* <Account.Background>
          <Account.Frame>
            <Account.Title>Account</Account.Title>
          </Account.Frame>
          <Account.Frame>
              <Account.Frame>
                <Account.Side_Title>Membership & Billing</Account.Side_Title>
                <Account.CancelBtn>Cancel Membership</Account.CancelBtn>
              </Account.Frame>       
            <Account.Frame>
              <Account.SubContainer>
                  <Account.Frame>
                    <Account.Name>Zredo100</Account.Name>
                    <Account.Password>Password: *******</Account.Password>
                    <Account.Phone>Phone: 0123 123 123</Account.Phone>
                  </Account.Frame>
                  <Account.Link>
                      <Account.Link>Change account Email</Account.Link>
                      <Account.Link>Change password</Account.Link>
                      <Account.Link>Change phone number</Account.Link>
                  </Account.Link>
                </Account.SubContainer>
              
                <Account.SubContainer>
                  <Account.Frame>
                    <Account.Text>1234 1234 1234 1234</Account.Text>
                    <Account.Link>Update Payment info</Account.Link>
                    <Account.Link>Billing details</Account.Link>
                    <Account.Link>Redeem gift card or promo code</Account.Link>
                    <Account.Link>Where to buy gift cards</Account.Link>
                  </Account.Frame>
                </Account.SubContainer>
            </Account.Frame> */}


      {/* <Account.Frame>
              <Account.SubContainer>
                  <Account.Title>Plan Details</Account.Title>
                  <Account.Row>
                    <Account.Link>Change Plan</Account.Link>
                  </Account.Row>
                </Account.SubContainer>
            </Account.Frame> */}


      {/* <Account.Frame>
              <Account.Side_Title>Settings</Account.Side_Title>
              <Account.Link>
                <Account.Row>Parental controls</Account.Row>
                <Account.Row>Test participation</Account.Row>
                <Account.Row>Manage download devices</Account.Row>
                <Account.Row>Activate a device</Account.Row>
                <Account.Row>Recent device streaming activity</Account.Row>
                <Account.Row>Sign out of all devices</Account.Row>
              </Account.Link>
            </Account.Frame> */}


      {/* <Account.Frame>
              <Account.Side_Title>My Profile</Account.Side_Title>
              <Account.Link>
                <Account.Row><Account.Picture></Account.Picture></Account.Row>
                <Account.Row>Add profile email</Account.Row>
                <Account.Row>Language</Account.Row>
                <Account.Row>Playback settings</Account.Row>
                <Account.Row>Side_Title appearance</Account.Row>
                <Account.Row>Viewing activity</Account.Row>
                <Account.Row>Ratings</Account.Row>
              </Account.Link>
            </Account.Frame> */}
      {/* </Account.Frame> */}
      {/* </Account.Background> */}

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
                <Account.Name>{user.displayName}</Account.Name>
                  <Account.Password>Password: *******</Account.Password>
                  <Account.Phone>Phone: 0123 123 123</Account.Phone>
                </Account.Row>
                <Account.Link>
                  <Account.Row><Account.Link_style>Change account Email</Account.Link_style></Account.Row>
                  <Account.Row><Account.Link_style>Change password</Account.Link_style></Account.Row>
                  <Account.Row><Account.Link_style>Change phone number</Account.Link_style></Account.Row>
                </Account.Link>
              </Account.SubContainer>
              <Account.InnerContainer>
              <Account.SubContainer>

                  <Account.Row>1234 1234 1234 1234</Account.Row>
                  <Account.Link>
                    <Account.Row><Account.Link_style>Update Payment info</Account.Link_style></Account.Row>
                    <Account.Row><Account.Link_style>Billing details</Account.Link_style></Account.Row>
                  </Account.Link>

              </Account.SubContainer>
              </Account.InnerContainer>
              <Account.InnerContainer>
              <Account.Row>
                <Account.Link>
                  <Account.Link_style>
                    Redeem gift card or promo code
                  </Account.Link_style>
                  <Account.Link_style>
                  Where to buy gift cards
                  </Account.Link_style>
                  {/* <Account.CancelBtnMobile>
                    Cancel Membership  
                  </Account.CancelBtnMobile> */}
                </Account.Link>
              </Account.Row>
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
            
            <Account.Link style={{textAlign: "left"}}>
              <Account.Row><Account.Link_style>Parental controls</Account.Link_style></Account.Row>
              <Account.Row><Account.Link_style>Test participation</Account.Link_style></Account.Row>
              <Account.Row><Account.Link_style>Manage download devices</Account.Link_style></Account.Row>
              <Account.Row><Account.Link_style>Activate a device</Account.Link_style></Account.Row>
              <Account.Row><Account.Link_style>Recent device streaming activity</Account.Link_style></Account.Row>
              <Account.Row><Account.Link_style>Sign out of all devices</Account.Link_style></Account.Row>
            </Account.Link>

          </Account.InnerContainer> 
            

          <Account.InnerContainer>
            <Account.Side_Title>
              My Profile
            </Account.Side_Title>

            <Account.Link style={{textAlign: "left"}}>
              <Account.Row>
                <Account.Picture src={user.photoURL} alt="Profile Picture"></Account.Picture>
              </Account.Row>
            
              <Account.Row><Account.Link_style>Add profile email</Account.Link_style></Account.Row>
              <Account.Row><Account.Link_style>Language</Account.Link_style></Account.Row>
              <Account.Row><Account.Link_style>Playback settings</Account.Link_style></Account.Row>
              <Account.Row><Account.Link_style>Subtitle appearance</Account.Link_style></Account.Row>
              <Account.Row><Account.Link_style>Viewing activity</Account.Link_style></Account.Row>
              <Account.Row><Account.Link_style>Ratings</Account.Link_style></Account.Row>

            </Account.Link>


          </Account.InnerContainer>
        
        </Account.Container>
      </Account.Main>












      <FooterContainer />
    </>
  );
}
