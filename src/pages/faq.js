// import { Faq } from '../components';
import { Header } from '../components';
import React, { useState, useEffect, useContext } from 'react';
import * as ROUTES from '../constants/routes';
import { FirebaseContext } from '../context/firebase';
import { Link } from 'react-router-dom';


export default function FAQ() {
  const [category, setCategory] = useState('series');
  const [profile, setProfile] = useState({});
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [slideRows, setSlideRows] = useState([]);

  const { firebase } = useContext(FirebaseContext);
  const user = firebase.auth().currentUser || {};
  return (
    <>
      {/* <Faq></Faq> */}
      <div>
        <html dir="LTR" lang="en">
          <head>
            <title>What is Netflix?</title>
            <meta charset="utf-8" />
            <meta name="_csrf" content="8ac01c44-76f4-48f9-a4fb-09fa0b0c16fe" />
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

            <script
              src="https://cdn.cookielaw.org/scripttemplates/otSDKStub.js"
              type="text/javascript"
              charset="UTF-8"
              data-domain-script="87b6a5c0-0104-4e96-a291-092c11350111"
            ></script>
            <script type="text/javascript">function OptanonWrapper() {}</script>

            <meta
              name="description"
              content="Learn about the Netflix service and how to become a member."
            />
            <meta
              property="og:description"
              content="Learn about the Netflix service and how to become a member."
            />

            <meta property="og:site_name" content="Help Center" />
            <meta property="og:type" content="website" />
            <meta property="og:title" content="What is Netflix?" />
            <meta
              property="og:url"
              content="https://help.netflix.com/en/node/412"
            />
            <link rel="shortlink" href="https://help.netflix.com/en/node/412" />
            <link rel="canonical" href="https://help.netflix.com/en/node/412" />

            <link
              rel="alternate"
              hreflang="de"
              href="https://help.netflix.com/de/node/412"
            />

            <link
              rel="alternate"
              hreflang="fi"
              href="https://help.netflix.com/fi/node/412"
            />

            <link
              rel="alternate"
              hreflang="ru"
              href="https://help.netflix.com/ru/node/412"
            />

            <link
              rel="alternate"
              hreflang="pt"
              href="https://help.netflix.com/pt/node/412"
            />

            <link
              rel="alternate"
              hreflang="hr"
              href="https://help.netflix.com/hr/node/412"
            />

            <link
              rel="alternate"
              hreflang="fr"
              href="https://help.netflix.com/fr/node/412"
            />

            <link
              rel="alternate"
              hreflang="zh-cn"
              href="https://help.netflix.com/zh-cn/node/412"
            />

            <link
              rel="alternate"
              hreflang="hu"
              href="https://help.netflix.com/hu/node/412"
            />

            <link
              rel="alternate"
              hreflang="id"
              href="https://help.netflix.com/id/node/412"
            />

            <link
              rel="alternate"
              hreflang="sv"
              href="https://help.netflix.com/sv/node/412"
            />

            <link
              rel="alternate"
              hreflang="ko"
              href="https://help.netflix.com/ko/node/412"
            />

            <link
              rel="alternate"
              hreflang="zh-tw"
              href="https://help.netflix.com/zh-tw/node/412"
            />

            <link
              rel="alternate"
              hreflang="ms"
              href="https://help.netflix.com/ms/node/412"
            />

            <link
              rel="alternate"
              hreflang="el"
              href="https://help.netflix.com/el/node/412"
            />

            <link
              rel="alternate"
              hreflang="en"
              href="https://help.netflix.com/en/node/412"
            />

            <link
              rel="alternate"
              hreflang="es-es"
              href="https://help.netflix.com/es-es/node/412"
            />

            <link
              rel="alternate"
              hreflang="it"
              href="https://help.netflix.com/it/node/412"
            />

            <link
              rel="alternate"
              hreflang="es"
              href="https://help.netflix.com/es/node/412"
            />

            <link
              rel="alternate"
              hreflang="fr-ca"
              href="https://help.netflix.com/fr-ca/node/412"
            />

            <link
              rel="alternate"
              hreflang="cs"
              href="https://help.netflix.com/cs/node/412"
            />

            <link
              rel="alternate"
              hreflang="ar"
              href="https://help.netflix.com/ar/node/412"
            />

            <link
              rel="alternate"
              hreflang="pt-pt"
              href="https://help.netflix.com/pt-pt/node/412"
            />

            <link
              rel="alternate"
              hreflang="vi"
              href="https://help.netflix.com/vi/node/412"
            />

            <link
              rel="alternate"
              hreflang="th"
              href="https://help.netflix.com/th/node/412"
            />

            <link
              rel="alternate"
              hreflang="nb"
              href="https://help.netflix.com/nb/node/412"
            />

            <link
              rel="alternate"
              hreflang="ja"
              href="https://help.netflix.com/ja/node/412"
            />

            <link
              rel="alternate"
              hreflang="pl"
              href="https://help.netflix.com/pl/node/412"
            />

            <link
              rel="alternate"
              hreflang="da"
              href="https://help.netflix.com/da/node/412"
            />

            <link
              rel="alternate"
              hreflang="he"
              href="https://help.netflix.com/he/node/412"
            />

            <link
              rel="alternate"
              hreflang="ro"
              href="https://help.netflix.com/ro/node/412"
            />

            <link
              rel="alternate"
              hreflang="nl"
              href="https://help.netflix.com/nl/node/412"
            />

            <link
              rel="alternate"
              hreflang="tr"
              href="https://help.netflix.com/tr/node/412"
            />
          </head>
          <body className="page-article has-related-articles">
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
                  <div className="breadcrumb-container">
                    <ul className="breadcrumb help-center-breadcrumb">
                      <li>
                        <a href="/en">
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
                  </div>

                  <h1 className="kb-title">What is Netflix?</h1>

                  <div className="pane-wrapper">
                    <div className="left-pane">
                      <section
                        dir="LTR"
                        className="kb-article kb-article-variant gradient"
                        data-countries=",PR,PS,PT,PW,PY,QA,AD,AE,AF,AG,AI,AL,AM,AN,AO,AQ,AR,AS,AT,RE,AU,AW,AX,AZ,RO,BA,BB,RS,BD,BE,RU,BF,BG,RW,BH,BI,BJ,BL,BM,BN,BO,SA,BQ,SB,BR,SC,BS,SD,SE,BT,SG,BV,SH,BW,SI,SJ,BY,BZ,SK,SL,SM,SN,SO,CA,SR,CC,SS,ST,CD,SV,CF,CG,SX,CH,SY,CI,SZ,CK,CL,CM,CN,CO,TC,CR,TD,CU,TF,TG,CV,CW,TH,CX,CY,TJ,CZ,TK,TL,TM,TN,TO,TR,TT,DE,TV,TW,TZ,DJ,DK,DM,DO,UA,UG,DZ,UM,EC,US,EE,EG,EH,UY,UZ,VA,VC,ER,ES,VE,ET,VG,VI,VN,VU,FI,FJ,FK,FM,FO,FR,WF,GA,GB,WS,GD,GE,GF,GG,GH,GI,GL,GM,GN,GP,GQ,GR,GS,GT,GU,GW,GY,HK,HM,HN,HR,HT,YE,HU,ID,YT,IE,IL,IM,IN,IO,ZA,IQ,IR,IS,IT,ZM,JE,ZW,JM,JO,JP,KE,KG,KH,KI,KM,KN,KP,KR,KW,KY,KZ,LA,LB,LC,LI,LK,LR,LS,LT,LU,LV,LY,MA,MC,MD,ME,MF,MG,MH,MK,ML,MM,MN,MO,MP,MQ,MR,MS,MT,MU,MV,MW,MX,MY,MZ,NA,NC,NE,NF,NG,NI,NL,NO,NP,NR,NU,NZ,OM,PA,PE,PF,PG,PH,PK,PL,PM,PN,"
                      >
                        <div className="page-block">
                          <div className="c-wrapper">
                            <div>
                              <p>
                                Netflix is a subscription-based
                                <a href="https://help.netflix.com/en/node/85">
                                  streaming service
                                </a>
                                that allows our members to watch TV shows and
                                movies without commercials on an
                                internet-connected device.
                              </p>
                              <p>
                                You can also
                                <a href="https://help.netflix.com/en/node/54816">
                                  download TV shows and movies
                                </a>
                                to your iOS, Android, or Windows 10 device and
                                watch without an internet connection.
                              </p>
                              <p>
                                If you&#x27;re already a member and would like
                                to learn more about using Netflix, visit
                                <a href="https://help.netflix.com/en/node/102377">
                                  Getting started with Netflix
                                </a>
                                .
                              </p>
                            </div>
                            <hr />
                            <div>
                              <h2>TV Shows &amp; Movies</h2>
                              <p>
                                Netflix content varies by region and may change
                                over time. You can watch from a wide variety of
                                <a href="https://media.netflix.com/">
                                  award-winning Netflix Originals, TV shows,
                                  movies, documentaries, and more
                                </a>
                                .
                              </p>
                              <p>
                                The more you watch, the better Netflix gets at
                                <a href="https://help.netflix.com/en/node/100639">
                                  recommending
                                </a>
                                TV shows and movies we think you’ll enjoy.
                              </p>
                              <p>
                                Before you sign up, you can
                                <a href="https://help.netflix.com/en/node/112132">
                                  watch some of the content
                                </a>
                                Netflix has to offer!
                              </p>
                            </div>
                            <hr />
                            <div>
                              <h2>Supported Devices</h2>
                              <p>
                                You can watch Netflix through any
                                <a
                                  target="_blank"
                                  href="https://devices.netflix.com/"
                                >
                                  internet-connected device
                                </a>
                                that offers the Netflix app, including smart
                                TVs, game consoles, streaming media players,
                                set-top boxes, smartphones, and tablets. You can
                                also watch Netflix on your computer using an
                                internet browser. You can review the
                                <a href="https://help.netflix.com/en/node/23742">
                                  system requirements
                                </a>
                                for web browser compatibility, and check our
                                <a href="https://help.netflix.com/en/node/306">
                                  internet speed recommendations
                                </a>
                                to achieve the best performance.
                              </p>
                              <p>
                                Need help getting set up? Search our
                                <a href="https://help.netflix.com/">
                                  Help Center
                                </a>{' '}
                                for the manufacturer of the device you&#x27;re
                                using.
                              </p>
                              <div className="note">
                                <div className="icon-wrap">
                                  <span className="hcicon-uma-info icon"></span>
                                  Note:
                                </div>
                                <div>
                                  The Netflix app may come pre-loaded on certain
                                  devices, or you may need to download the
                                  Netflix app onto your device. Netflix app
                                  functionality may differ between devices.
                                </div>
                              </div>
                            </div>
                            <hr />
                            <div>
                              <h2>Plans and Pricing</h2>
                              <p>
                                Each Netflix plan determines the number of
                                devices you can watch Netflix on
                                <strong>at the same time</strong> and if you
                                prefer to view in Standard Definition (SD), High
                                Definition (HD), or Ultra High Definition (UHD).
                              </p>
                              <p>
                                <a href="https://help.netflix.com/en/node/24926">
                                  Compare our plans and pricing
                                </a>
                                to decide which one is right for you. You can
                                easily
                                <a href="https://help.netflix.com/en/node/22">
                                  change your plan
                                </a>
                                or
                                <a href="https://help.netflix.com/en/node/407">
                                  cancel
                                </a>
                                online at any time.
                              </p>
                            </div>
                            <hr />
                            <div>
                              <h2>Get Started!</h2>
                              <p>
                                Follow these easy steps to start watching
                                Netflix today:
                              </p>
                              <ol>
                                <li>
                                  <p>
                                    Visit
                                    <a
                                      target="_blank"
                                      href="https://www.netflix.com/signup"
                                    >
                                      netflix.com/signup
                                    </a>
                                    .
                                  </p>
                                </li>
                                <li>
                                  <p>
                                    <a href="https://help.netflix.com/en/node/24926">
                                      Choose the plan
                                    </a>
                                    that’s right for you.
                                  </p>
                                </li>
                                <li>
                                  <p>
                                    Create an account by entering your email
                                    address and creating a password.
                                  </p>
                                </li>
                                <li>
                                  <p>
                                    Enter a
                                    <a href="https://help.netflix.com/en/node/116380">
                                      payment method
                                    </a>
                                    . As a Netflix member, you are charged once
                                    a month on the date you signed up.
                                  </p>
                                </li>
                              </ol>
                              <p>That&#x27;s it. Enjoy Netflix!</p>
                            </div>
                          </div>
                        </div>
                      </section>

                      <div id="article-feedback-container"></div>
                    </div>

                    <div className="right-pane">
                      <div className="wrapper page-block">
                        <h3>Suggested Articles</h3>
                        <ul
                          className="related-articles"
                          data-tracking-id="bcd16f22-a41e-4c4e-89ba-57ecf2557121"
                        >
                          <li className="related-article">
                            <a
                              target="_blank"
                              href="/en/node/102377"
                              data-id="102377"
                              data-index="1"
                            >
                              Getting started with Netflix
                            </a>
                          </li>
                          <li className="related-article">
                            <a
                              target="_blank"
                              href="/en/node/41049"
                              data-id="41049"
                              data-index="2"
                            >
                              Billing and Payments
                            </a>
                          </li>
                          <li className="related-article">
                            <a
                              target="_blank"
                              href="/en/node/32950"
                              data-id="32950"
                              data-index="3"
                            >
                              Netflix Gift Cards
                            </a>
                          </li>
                          <li className="related-article">
                            <a
                              target="_blank"
                              href="/en/node/470"
                              data-id="470"
                              data-index="4"
                            >
                              Can&#39;t sign in to Netflix
                            </a>
                          </li>
                          <li className="related-article">
                            <a
                              target="_blank"
                              href="/en/node/10421"
                              data-id="10421"
                              data-index="5"
                            >
                              How to create and edit profiles
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="footer-push"></div>
            </div>

            <div id="footer" className="global-footer">
              <div id="contact-bar" className="global-contactbar">
                <div className="container">
                  <h3 className="bar-title">Want to contact us?</h3>

                  <div className="contact-channels">
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

                    <div className="channel">
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
                                Please provide a short description of your issue
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
                  </div>
                </div>
              </div>

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
