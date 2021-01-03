import { Header } from '../components';
import React, { useState, useEffect, useContext } from 'react';
import * as ROUTES from '../constants/routes';
import { FirebaseContext } from '../context/firebase';
import { Link } from 'react-router-dom';
// import { Corpinfo } from '../components';

export default function Corporate() {
  const [category, setCategory] = useState('series');
  const [profile, setProfile] = useState({});
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [slideRows, setSlideRows] = useState([]);

  const { firebase } = useContext(FirebaseContext);
  const user = firebase.auth().currentUser || {};
    return (
      <>
        <html dir="LTR" lang="en">
        <head>
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

          <script
            src="https://cdn.cookielaw.org/scripttemplates/otSDKStub.js"
            type="text/javascript"
            charset="UTF-8"
            data-domain-script="87b6a5c0-0104-4e96-a291-092c11350111"
          ></script>
          <script type="text/javascript">function OptanonWrapper() {}</script>

          <meta name="robots" content="nofollow,noindex,noarchive" />
        </head>
        <body className="page-article legal-document">
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
                <div className="breadcrumb-container multi-crumbs">
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

                  <div className="breadcrumb text-right">
                    {/* <button
                      className="btn btn-med btn-lightgrey open-print-dialog"
                      alt="Print"
                    >
                      <svg
                        width="24px"
                        height="24px"
                        viewBox="0 0 24 24"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g
                          stroke="none"
                          stroke-width="1"
                          fill="none"
                          fill-rule="evenodd"
                        >
                          <path
                            d="M19,8 L5,8 C3.34,8 2,9.34 2,11 L2,17 L6,17 L6,21 L18,21 L18,17 L22,17 L22,11 C22,9.34 20.66,8 19,8 Z M16,19 L8,19 L8,14 L16,14 L16,19 Z M19,12 C18.45,12 18,11.55 18,11 C18,10.45 18.45,10 19,10 C19.55,10 20,10.45 20,11 C20,11.55 19.55,12 19,12 Z M18,3 L6,3 L6,7 L18,7 L18,3 Z"
                            id="Shape"
                            fill="#221f1f"
                            fill-rule="nonzero"
                          ></path>
                        </g>
                      </svg>
                      <span className="hidden-mobile">Print</span>
                    </button> */}
                  </div>
                </div>

                <h1 className="kb-title">Netflix Corporate Information</h1>

                <div className="pane-wrapper">
                  <div className="left-pane">
                    <section
                      dir="LTR"
                      className="kb-article kb-article-variant gradient"
                      data-countries=",PR,PS,PT,PW,PY,QA,AD,AE,AF,AG,AI,AL,AM,AN,AO,AQ,AR,AS,RE,AU,AW,AX,AZ,RO,BA,BB,RS,BD,BF,BG,RW,BH,BI,BJ,BL,BM,BN,BO,SA,BQ,SB,BR,SC,BS,SD,SE,BT,SG,BV,SH,BW,SI,SJ,BY,BZ,SK,SL,SM,SN,SO,CA,SR,CC,SS,ST,CD,SV,CF,CG,SX,CH,SY,CI,SZ,CK,CL,CM,CN,CO,TC,CR,TD,CU,TF,TG,CV,CW,TH,CX,CY,TJ,CZ,TK,TL,TM,TN,TO,TR,TT,TV,TW,TZ,DJ,DK,DM,DO,UA,UG,DZ,UM,EC,US,EE,EG,EH,UY,UZ,VA,VC,ER,ES,VE,ET,VG,VI,VN,VU,FI,FJ,FK,FM,FO,FR,WF,GA,GB,WS,GD,GE,GF,GG,GH,GI,GL,GM,GN,GP,GQ,GR,GS,GT,GU,GW,GY,HK,HM,HN,HR,HT,YE,HU,ID,YT,IE,IL,IM,IN,IO,ZA,IQ,IR,IS,IT,ZM,JE,ZW,JM,JO,JP,KE,KG,KH,KI,KM,KN,KP,KW,KY,KZ,LA,LB,LC,LI,LK,LR,LS,LT,LU,LV,LY,MA,MC,MD,ME,MF,MG,MH,MK,ML,MM,MN,MO,MP,MQ,MR,MS,MT,MU,MV,MW,MX,MY,MZ,NA,NC,NE,NF,NG,NI,NO,NP,NR,NU,NZ,OM,PA,PE,PF,PG,PH,PK,PL,PM,PN,"
                    >
                      <div className="page-block">
                        <div className="c-wrapper">
                          <div>
                            <p>
                              Netflix serves members in many different
                              countries. The Netflix entity that provides you
                              with access to the Netflix service and qualifies
                              as your data controller depends on your country of
                              membership, and will be listed in your membership
                              or payment confirmation email.
                            </p>
                            <p>
                              Netflix, Inc.
                              <br />
                              100 Winchester Circle
                              <br />
                              Los Gatos, CA 95032, USA
                            </p>
                            <p>
                              Netflix International B.V.
                              <br />
                              Karperstraat 8-10
                              <br />
                              1075 KZ Amsterdam, the Netherlands
                              <br />
                              KvK: 62266519
                              <br />
                              VAT: NL853746333B01
                              <br />
                              Share Capital: 12,500 Euros
                            </p>
                            <p>
                              Netflix Entretenimento Brasil, Ltda.
                              <br />
                              Alameda Xingu, 350 - 14º andar - Alphaville
                              Industrial
                              <br />
                              Barueri, CEP 06455-911 - SP - Brazil
                              <br />
                              CNPJ: ​13.590.585/0002-70
                            </p>
                            <p>
                              Netflix Entertainment Services India LLP
                              <br />
                              Level 7, 4th North Avenue, Maker Maxity
                              <br />
                              Bandra Kurla Complex, Bandra (East)
                              <br />
                              Mumbai - 400051
                              <br />
                              Maharashtra, India
                            </p>
                            <p>
                              Netflix G.K.
                              <br />
                              Shin-Aoyama Tokyu Building 10F
                              <br />
                              3-11-13 Minami-Aoyama
                              <br />
                              Minato-ku
                              <br />
                              Tokyo 107-0062 Japan
                            </p>
                            <p>
                              Netflix Services Korea Ltd.
                              <br />
                              20F, Tower A, Centropolis Building
                              <br />
                              26, Ujeongguk-ro, Jongno-gu, Seoul, 03161,
                              Republic of Korea
                            </p>
                            <p></p>
                          </div>
                        </div>
                      </div>
                    </section>
                  </div>

                  <div className="right-pane">
                    <div className="wrapper page-block"></div>
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
      </>
    );
  }