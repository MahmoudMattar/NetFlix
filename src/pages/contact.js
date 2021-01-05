import { Header } from '../components';
import React, { useState, useEffect, useContext } from 'react';
import * as ROUTES from '../constants/routes';
import { FirebaseContext } from '../context/firebase';
import { Link } from 'react-router-dom';
// import { Contactus } from '../components';



export default function Contact() {
  const [category, setCategory] = useState('series');
  const [profile, setProfile] = useState({});
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [slideRows, setSlideRows] = useState([]);

  const { firebase } = useContext(FirebaseContext);
  const user = firebase.auth().currentUser || {};
  return (
    <>
      <div>
      <html dir="LTR" lang="en">
        <head>
          <title>Contact Us</title>
          <meta charset="utf-8" />
          <meta name="_csrf" content="341f8555-69ad-4005-ad6d-84587ce2d1b9" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge;chrome=1" />

          <meta
            name="google-site-verification"
            content="GmHfooq7jctbhvRUSGtLpE_XImtIATNo0iLofqbb16I"
          />
          <meta
            name="google-site-verification"
            content="pmHhB6aGnjhY8K733ElVmlTDLHz7qzkA6NA__G40QUc"
          />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, viewport-fit=cover"
          />

          <link
            rel="shortcut icon"
            href="https://assets.nflxext.com/us/ffe/siteui/common/icons/nficon2016.ico"
          />
          <link
            rel="stylesheet"
            href="https://help.nflxext.com/helpcenter/common_88382c32b1788cfdf7886366dec81f83.css"
          />
          <link rel="stylesheet" href="contact.css" />

         

          <meta name="robots" content="noindex" />
        </head>

        <body className="page-contact-us">
          <div className="global-container">
            <div className="global-header">
              <div className="overlay"></div>

              
              <div className="container">
                <div className="inner-container">
                  <div className="branding">
                    <a
                      className="logo nf-logo-link netflix-logo"
                      href="/browse"
                      title="Netflix"
                    >
                      <svg
                        className="netflix-svg"
                        width="88px"
                        height="32px"
                        viewBox="0 0 111 30"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill="#e50914"
                          d="M105.062 14.28L111 30c-1.75-.25-3.499-.563-5.28-.845l-3.345-8.686-3.437 7.969c-1.687-.282-3.344-.376-5.031-.595l6.031-13.75L94.468 0h5.063l3.062 7.874L105.875 0h5.124l-5.937 14.28zM90.47 0h-4.594v27.25c1.5.094 3.062.156 4.594.343V0zm-8.563 26.937c-4.187-.281-8.375-.53-12.656-.625V0h4.687v21.875c2.688.062 5.375.28 7.969.405v4.657zM64.25 10.657v4.687h-6.406V26H53.22V0h13.125v4.687h-8.5v5.97h6.406zm-18.906-5.97V26.25c-1.563 0-3.156 0-4.688.062V4.687h-4.844V0h14.406v4.687h-4.874zM30.75 15.593c-2.062 0-4.5 0-6.25.095v6.968c2.75-.188 5.5-.406 8.281-.5v4.5l-12.968 1.032V0H32.78v4.687H24.5V11c1.813 0 4.594-.094 6.25-.094v4.688zM4.78 12.968v16.375C3.094 29.531 1.593 29.75 0 30V0h4.469l6.093 17.032V0h4.688v28.062c-1.656.282-3.344.376-5.125.625L4.78 12.968z"
                        ></path>
                      </svg>
                      <svg
                        className="n-svg"
                        focusable="true"
                        viewBox="225 0 552 1000"
                        height="32px"
                      >
                        <defs>
                          <radialGradient
                            id="54260309-7575-46f4-a806-31673acf60fe-a"
                            r="75%"
                            gradientTransform="matrix(.38 0 .5785 1 .02 0)"
                          >
                            <stop offset="60%" stop-opacity=".3"></stop>
                            <stop offset="90%" stop-opacity=".05"></stop>
                            <stop offset="100%" stop-opacity="0"></stop>
                          </radialGradient>
                        </defs>
                        <path
                          d="M225 0v1000c60-8 138-14 198-17V0H225"
                          fill="#b1060e"
                        ></path>
                        <path
                          d="M579 0v983c71 3 131 9 198 17V0H579"
                          fill="#b1060e"
                        ></path>
                        <path
                          d="M225 0v200l198 600V557l151 426c76 3 136 9 203 17V800L579 200v240L423 0H225"
                          fill="url(#54260309-7575-46f4-a806-31673acf60fe-a)"
                        ></path>
                        <path
                          d="M225 0l349 983c76 3 136 9 203 17L423 0H225"
                          fill="#e50914"
                        ></path>
                      </svg>
                    </a>
                    <a className="helpcenter-logo" href="/en">
                      Help Center
                    </a>
                  </div>

                  <Header.Group className="actions">
                      <Header.Search
                        searchTerm={searchTerm}
                        setSearchTerm={setSearchTerm}
                      />
                      <Header.Profile>
                        <Header.Picture src={user.photoURL} />
                        <Header.Dropdown>
                          <Header.Group>
                            <Header.Picture src={user.photoURL} />
                            <Header.TextLink>
                              {user.displayName}
                            </Header.TextLink>
                          </Header.Group>
                          <Header.Group>
                            <Header.TextLink to={ROUTES.ACCOUNT}>
                              <Link
                                style={{
                                  color: 'white',
                                  textDecoration: 'none',
                                }}
                                to={ROUTES.ACCOUNT}
                              >
                                Account
                              </Link>
                            </Header.TextLink>
                          </Header.Group>
                          <Header.Group>
                            <Header.TextLink
                              onClick={() => firebase.auth().signOut()}
                            >
                              Sign out
                            </Header.TextLink>
                          </Header.Group>
                        </Header.Dropdown>
                      </Header.Profile>
                    </Header.Group>
                </div>

                <div className="logo-wrapper">
                  <a className="helpcenter-logo" href="/en">
                    Help Center
                  </a>
                </div>
              </div>
            </div>

            <div className="notifications">
              <div id="notification-holder"></div>
            </div>

            <div id="personalization-placeholder"></div>

            <div className="global-content">
              <div className="container">
                <ul className="breadcrumb help-center-breadcrumb">
                  <li>
                    <a href="/en" href="/browse">
                      <svg
                        width="24px"
                        height="24px"
                        viewBox="0 0 24 24"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <polygon points="16.3515625 11.1015625 16.3515625 12.25 9.2421875 12.25 12.4960938 15.53125 11.6757812 16.3515625 7 11.6757812 11.6757812 7 12.4960938 7.8203125 9.2421875 11.1015625"></polygon>
                      </svg>
                      Back to Help Home
                    </a>
                  </li>
                </ul>

                <div className="pane-wrapper">
                  <div className="left-pane">
                    <section className="content no-border">
                      <h1>Contact Customer Service</h1>
                    </section>

                    <section className="content">
                      <h2>Call us from the Netflix app</h2>

                      <p>
                        Contacting Netflix is now easier than ever when you
                        contact us from the Netflix app on your Android or iOS
                        phone or tablet! Calling through the app is free - all
                        you need is an internet or cellular connection.
                      </p>

                      <p className="download-app-title">
                        <strong>Download the Netflix app:</strong>
                      </p>

                      <div className="badges">
                        <a
                          href="https://netflix.com/mobilehelp?platform=android"
                          className="beacon-event appstore-badge badge-android lang-en"
                          target="_blank"
                          data-beacon="action=androidAppStoreClicked"
                        ></a>
                        <a
                          href="https://netflix.com/mobilehelp?platform=ios"
                          className="beacon-event appstore-badge badge-ios lang-en"
                          target="_blank"
                          data-beacon="action=iosAppStoreClicked"
                        ></a>
                      </div>

                      <p>
                        Questions?
                        <a
                          className="beacon-event"
                          href="/en/node/33335"
                          data-beacon="action=contactFromAppClicked"
                        >
                          Learn how to contact us from the Netflix app!
                        </a>
                      </p>
                    </section>

                    <section className="content">
                      <h2>Call us from any phone</h2>

                      <p>
                        <strong>Phone is currently unavailable.</strong>
                      </p>
                      <p>
                        Call us using the Netflix app as we don&#39;t offer a
                        phone number in your country
                      </p>

                      <div id="phone-contact" className="channel popover-wrapper">
                        <a
                          href="#callus"
                          id="phoneContactTrigger"
                          className="btn btn-lightgrey popover-trigger"
                        >
                          Call Us
                        </a>

                        <div className="phonePopover phone-popover popover top lang-en">
                          <div className="popover-content"></div>

                          <button className="close popover-close">Close</button>
                        </div>
                      </div>
                    </section>

                    <section className="content mobile-enabled">
                      <h2>Live Chat</h2>
                      <p>
                        You will need an internet or mobile phone connection.
                      </p>

                      <div className="chat-contact-wrapper contact-chat">
                        <div
                          id="chat-contact"
                          className="popover-wrapper chat-btn-wrapper channel"
                          data-enablemobilechat="true"
                        >
                          <a
                            href="#startChat"
                            id="startChatTrigger"
                            className="btn btn-lightgrey start-chat-button beacon-event"
                            data-beacon="action=ChatButton"
                            data-locale="en"
                            data-country="EG"
                          >
                            Start Live Chat
                          </a>

                          <div className="channel-body">
                            <div
                              id="selfHelpPopover"
                              className="popover chat-popover selfHelp-popover-ltr popover-base-ltr top"
                            ></div>

                            <div
                              id="selfHelpDetailsPopover"
                              className="popover chat-popover selfHelpDetails-popover-ltr popover-base-ltr top"
                            >
                              <div className="popover-content selfHelp-details">
                                <div className="popover-title small">
                                  Describe your issue
                                </div>

                                <p>What can we help you with today?</p>

                                <div className="form-group flush">
                                  <textarea
                                    name="chatquestion"
                                    className="chatquestion form-control"
                                    maxlength="500"
                                    rows="4"
                                    placeholder="Describe your issue"
                                  ></textarea>
                                  <div
                                    className="charsleft"
                                    data-chars-text="[NUMBER] characters left"
                                  ></div>
                                </div>

                                <button className="btn btn-primary submit">
                                  Submit
                                </button>

                                <div className="empty-submission hidden">
                                  Please provide a short description of your
                                  issue
                                </div>
                              </div>

                              <button className="close popover-close">Close</button>
                            </div>

                            <div
                              id="start-chat-popover"
                              className="popover chat-popover popover-base-ltr top"
                              data-show-popover="true"
                            >
                              <div className="popover-content are-you-a-member chat-details">
                                <div className="popover-title small">
                                  Can you sign in?
                                </div>

                                <div className="form-group">
                                  <a
                                    href="https://netflix.com/Login?nextpage=https://help.netflix.com"
                                    className="btn btn-secondary btn-block btn-yes"
                                  >
                                    Yes
                                  </a>
                                </div>

                                <button className="btn btn-secondary btn-block btn-no">
                                  No
                                </button>
                              </div>

                              <button className="close popover-close">Close</button>
                            </div>

                            <div
                              id="chat-error-popover"
                              className="popover chat-popover popover-base-ltr top"
                            >
                              <div className="popover-content">
                                <h3 className="title popover-title">
                                  Chat is currently unavailable.
                                </h3>

                                <p className="chat-error-msg"></p>
                              </div>

                              <button className="close popover-close">Close</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>
                  </div>

                  <div className="right-pane">
                    <div className="wrapper">
                      <section className="content">
                        <p>
                          <strong>Popular Questions</strong>
                        </p>

                        <ul className="selfhelp-options">
                          <li className="help-option">
                            <a href="/en/node/365">
                              How do I reset my password?
                            </a>
                          </li>
                          <li className="help-option">
                            <a href="/en/titlerequest">
                              How can I request a TV show or movie?
                            </a>
                          </li>
                          <li className="help-option">
                            <a href="/en/node/407">
                              How do I cancel my account?
                            </a>
                          </li>
                          <li className="help-option">
                            <a href="/en/node/461">
                              Why isn&#39;t Netflix Working?
                            </a>
                          </li>
                          <li className="help-option">
                            <a href="/en/node/412">What is Netflix?</a>
                          </li>
                        </ul>
                      </section>

                      <p>
                        <strong>Find a different answer</strong>
                      </p>

                      <div
                        id="search-placeholder"
                        data-count="3"
                        data-placeholder="Search"
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="footer-push"></div>
          </div>

          <div id="footer" className="global-footer">
            <div className="dark-area container">
              <div id="lang-switcher-wrapper" className="select-wrapper">
                <div className="select select-grey">
                  <select
                    id="lang-switcher"
                    aria-label="Select your preferred language:"
                  >
                    <option value="id">Bahasa Indonesia</option>

                    <option value="ms">Bahasa Melayu</option>

                    <option value="cs">Čeština</option>

                    <option value="da">Dansk</option>

                    <option value="de">Deutsch</option>

                    <option value="en" selected="selected">
                      English
                    </option>

                    <option value="es">Español</option>

                    <option value="fr">Français</option>

                    <option value="hr">Hrvatski</option>

                    <option value="it">Italiano</option>

                    <option value="hu">Magyar</option>

                    <option value="nl">Nederlands</option>

                    <option value="nb">Norsk Bokmål</option>

                    <option value="pl">Polski</option>

                    <option value="pt">Português</option>

                    <option value="ro">Română</option>

                    <option value="fi">Suomi</option>

                    <option value="sv">Svenska</option>

                    <option value="vi">Tiếng Việt</option>

                    <option value="tr">Türkçe</option>

                    <option value="el">Ελληνικά</option>

                    <option value="ru">Русский</option>

                    <option value="he">עברית</option>

                    <option value="ar">العربية</option>

                    <option value="hi">हिन्दी</option>

                    <option value="th">ไทย</option>

                    <option value="zh-cn">中文</option>

                    <option value="ja">日本語</option>

                    <option value="ko">한국어</option>
                  </select>

                  <svg
                    width="24px"
                    height="24px"
                    viewBox="0 0 24 24"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.9416531,7.71264972 L17.9520258,15.2282087 C18.4421897,15.9634546 18.2435115,16.9568456 17.5082656,17.4470095 C17.2454376,17.6222282 16.9366253,17.715729 16.6207453,17.715729 L6.6,17.715729 C5.7163444,17.715729 5,16.9993846 5,16.115729 C5,15.799849 5.09350084,15.4910367 5.26871953,15.2282087 L10.2790922,7.71264972 C10.7692561,6.97740382 11.7626471,6.77872563 12.497893,7.26888957 C12.6736566,7.38606534 12.8244774,7.53688606 12.9416531,7.71264972 Z"
                      transform="translate(11.610458, 12.357865) scale(1, -1) translate(-11.610458, -12.357865) "
                    ></path>
                  </svg>
                </div>
              </div>

              <ul className="footer-links">
                <li className="legalese-item">
                  <a href="/en/legal/termsofuse">Terms of Use</a>
                </li>
                <li className="legalese-item">
                  <a href="/en/legal/privacy">Privacy</a>
                </li>
                <li className="legalese-item">
                  <a
                    href="/en/legal/privacy#cookies"
                    className="evidon-trigger toggle-cookie-info"
                  >
                    Cookie Preferences
                  </a>
                </li>

                <li className="legalese-item">
                  <a href="/en/legal/corpinfo">Corporate Information</a>
                </li>
              </ul>
            </div>
          </div>
        </body>
      </html>
      </div>
    </>
  );
}
