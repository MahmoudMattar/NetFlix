import { Header } from '../components';
import React, { useState, useEffect, useContext } from 'react';
import * as ROUTES from '../constants/routes';
import { FirebaseContext } from '../context/firebase';
import { Link } from 'react-router-dom';
// import { PrivacyInfo } from '../components';



export default function Privacy() {
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

                  </div>
                </div>

                <h1 className="kb-title">Privacy Statement</h1>

                <div className="pane-wrapper">
                  <div className="left-pane">
                    <section
                      dir="LTR"
                      className="kb-article kb-article-variant gradient"
                      data-countries=",PS,HM,DJ,TZ,LR,LS,UA,YE,LY,QA,UG,MA,DZ,MD,ME,MG,MK,ML,EG,EH,IL,AE,AF,UZ,MR,IO,ZA,IQ,MU,IR,MW,AL,AM,ER,MZ,AO,ET,AQ,ZM,NA,AU,NE,AZ,NG,ZW,BA,RS,BF,RW,JO,BH,BI,BJ,FO,SA,SC,SD,BV,BW,SH,BY,SJ,SL,GA,KE,SN,SO,KG,GE,OM,SS,CD,ST,KM,CF,CG,GL,CI,GM,SZ,GN,CM,GQ,KW,KZ,TD,GW,TF,CV,TG,TJ,LB,TM,TN,PM,TR,"
                    >
                      <div className="page-block">
                        <div className="c-wrapper">
                          <div>
                            <p>
                              This Privacy Statement explains our practices,
                              including your choices, regarding the collection,
                              use, and disclosure of certain information,
                              including your personal information, by the
                              <a href="https://help.netflix.com/legal/corpinfo">
                                Netflix family of companies
                              </a>
                              (&quot;Netflix&quot;) in connection with the
                              Netflix service.
                            </p>
                            <h3>Contacting Us</h3>
                            <p>
                              If you have general questions about your account
                              or how to contact customer service for assistance,
                              please visit our online help center at
                              <a href="https://help.netflix.com">
                                help.netflix.com
                              </a>
                              . For questions specifically about this Privacy
                              Statement, or our use of your personal
                              information, cookies or similar technologies,
                              please contact our Data Protection Officer/Privacy
                              Office by email at
                              <a href="mailto:privacy@netflix.com">
                                privacy@netflix.com
                              </a>
                              .
                            </p>
                            <p>
                              The data controller of your personal information
                              is Netflix International B.V. Please note that if
                              you contact us to assist you, for your safety and
                              ours we may need to authenticate your identity
                              before fulfilling your request.
                            </p>
                            <h3>Collection of Information</h3>
                            <p>
                              We receive and store information about you such
                              as:
                            </p>
                            <ul>
                              <li>
                                <p>
                                  <strong>
                                    Information you provide to us:
                                  </strong>{' '}
                                  We collect information you provide to us which
                                  includes:
                                </p>
                                <ul>
                                  <li>
                                    <p>
                                      your name, email address, address or
                                      postal code, payment method(s), and
                                      telephone number. In certain countries, we
                                      collect a government identification number
                                      for purposes such as billing and tax
                                      compliance. We collect this information in
                                      a number of ways, including when you enter
                                      it while using our service, interact with
                                      our customer service, or participate in
                                      surveys or marketing promotions;
                                    </p>
                                  </li>
                                  <li>
                                    <p>
                                      information when you choose to provide
                                      ratings, taste preferences, account
                                      settings (including preferences set in the
                                      &quot;Account&quot; section of our
                                      website), or otherwise provide information
                                      to us through our service or elsewhere.
                                    </p>
                                  </li>
                                </ul>
                              </li>
                              <li>
                                <p>
                                  <strong>
                                    Information we collect automatically:
                                  </strong>
                                  We collect information about you and your use
                                  of our service, your interactions with us and
                                  our advertising, as well as information
                                  regarding your network, network devices, and
                                  your computer or other Netflix capable devices
                                  you might use to access our service (such as
                                  gaming systems, smart TVs, mobile devices, set
                                  top boxes, and other streaming media devices).
                                  This information includes:
                                </p>
                                <ul>
                                  <li>
                                    <p>
                                      your activity on the Netflix service, such
                                      as title selections, shows you have
                                      watched, and search queries;
                                    </p>
                                  </li>
                                  <li>
                                    <p>
                                      your interactions with our emails and
                                      texts, and with our messages through push
                                      and online messaging channels;
                                    </p>
                                  </li>
                                  <li>
                                    <p>
                                      details of your interactions with our
                                      customer service, such as the date, time
                                      and reason for contacting us, transcripts
                                      of any chat conversations, and if you call
                                      us, your phone number and call recordings;
                                    </p>
                                  </li>
                                  <li>
                                    <p>
                                      device IDs or other unique identifiers,
                                      including for your network devices, and
                                      devices that are Netflix capable on your
                                      Wi-Fi network;
                                    </p>
                                  </li>
                                  <li>
                                    <p>
                                      resettable device identifiers (also known
                                      as advertising identifiers), such as those
                                      on mobile devices, tablets, and streaming
                                      media devices that include such
                                      identifiers (see the &quot;Cookies and
                                      Internet Advertising&quot; section below
                                      for more information);
                                    </p>
                                  </li>
                                  <li>
                                    <p>
                                      device and software characteristics (such
                                      as type and configuration), connection
                                      information including type (wifi,
                                      cellular), statistics on page views,
                                      referring source (for example, referral
                                      URLs), IP address (which may tell us your
                                      general location), browser and standard
                                      web server log information;
                                    </p>
                                  </li>
                                  <li>
                                    <p>
                                      information collected via the use of
                                      cookies, web beacons and other
                                      technologies, including ad data (such as
                                      information on the availability and
                                      delivery of ads, the site URL, as well as
                                      the date and time). (See our &quot;Cookies
                                      and Internet Advertising&quot; section for
                                      more details.)
                                    </p>
                                  </li>
                                </ul>
                              </li>
                              <li>
                                <p>
                                  <strong>Information from partners: </strong>We
                                  collect information from other companies with
                                  whom you have a relationship (“Partners”).
                                  These Partners might include (depending on
                                  what services you use): your TV or internet
                                  service provider, or other streaming media
                                  device providers who make our service
                                  available on their device; mobile phone
                                  carriers or other companies who provide
                                  services to you and collect payment for the
                                  Netflix service for distribution to us or
                                  provide pre-paid promotions for the Netflix
                                  service; and voice assistant platform
                                  providers who enable interaction with our
                                  service through voice commands. The
                                  information Partners provide us varies
                                  depending on the nature of the Partner
                                  services, and may include:
                                </p>
                                <ul>
                                  <li>
                                    <p>
                                      search queries and commands applicable to
                                      Netflix that you make through Partner
                                      devices or voice assistant platforms;
                                    </p>
                                  </li>
                                  <li>
                                    <p>
                                      service activation information such as
                                      your email address or other contact
                                      information;
                                    </p>
                                  </li>
                                  <li>
                                    <p>
                                      IP addresses, device IDs or other unique
                                      identifiers, as well as associated
                                      pre-paid promotion, billing and user
                                      interface information, that support user
                                      authentication, the Netflix service
                                      registration experience, Partner payment
                                      processing, and the presentation of
                                      Netflix content to you through portions of
                                      the Partner user interface.
                                    </p>
                                  </li>
                                </ul>
                              </li>
                              <li>
                                <p>
                                  <strong>
                                    Information from other sources:
                                  </strong>{' '}
                                  We also obtain information from other sources.
                                  We protect this information according to the
                                  practices described in this Privacy Statement,
                                  plus any additional restrictions imposed by
                                  the source of the data. These sources vary
                                  over time, but could include:
                                </p>
                                <ul>
                                  <li>
                                    <p>
                                      service providers that help us determine a
                                      location based on your IP address in order
                                      to customize our service and for other
                                      uses consistent with this Privacy
                                      Statement;
                                    </p>
                                  </li>
                                  <li>
                                    <p>
                                      security service providers who provide us
                                      with information to secure our systems,
                                      prevent fraud and help us protect the
                                      security of Netflix accounts;
                                    </p>
                                  </li>
                                  <li>
                                    <p>
                                      payment service providers who provide us
                                      with payment or balance information, or
                                      updates to that information, based on
                                      their relationship with you;
                                    </p>
                                  </li>
                                  <li>
                                    <p>
                                      online and offline data providers, from
                                      which we obtain aggregated demographic,
                                      interest based and online advertising
                                      related data;
                                    </p>
                                  </li>
                                  <li>
                                    <p>
                                      publicly-available sources such as
                                      publicly available posts on social media
                                      platforms and information available
                                      through public databases associating IP
                                      addresses with internet service providers
                                      (ISPs).
                                    </p>
                                  </li>
                                </ul>
                              </li>
                            </ul>
                            <h3>Use of Information</h3>
                            <p>
                              We use information to provide, analyze,
                              administer, enhance and personalize our services
                              and marketing efforts, to manage member referrals,
                              to process your registration, your orders and your
                              payments, and to communicate with you on these and
                              other topics. For example, we use such information
                              to:
                            </p>
                            <ul>
                              <li>
                                <p>
                                  determine your general geographic location,
                                  provide localized content, provide you with
                                  customized and personalized viewing
                                  recommendations for movies and TV shows we
                                  think will be of interest to you, determine
                                  your ISP to support network troubleshooting
                                  for you (we also use aggregated ISP
                                  information for operational and business
                                  purposes), and help us quickly and efficiently
                                  respond to inquiries and requests;
                                </p>
                              </li>
                              <li>
                                <p>
                                  coordinate with Partners on making the Netflix
                                  service available to members and providing
                                  information to non members about the
                                  availability of the Netflix service, based on
                                  the specific relationship you have with the
                                  Partner;
                                </p>
                              </li>
                              <li>
                                <p>
                                  secure our systems, prevent fraud and help us
                                  protect the security of Netflix accounts;
                                </p>
                              </li>
                              <li>
                                <p>
                                  prevent, detect and investigate potentially
                                  prohibited or illegal activities, including
                                  fraud, and to enforce our terms (such as
                                  determining whether and for which Netflix
                                  signup offers you are eligible and determining
                                  whether a particular device is permitted to
                                  use the account consistent with our Terms of
                                  Use);
                                </p>
                              </li>
                              <li>
                                <p>
                                  analyze and understand our audience, improve
                                  our service (including our user interface
                                  experiences and service performance) and
                                  optimize content selection, recommendation
                                  algorithms and delivery;
                                </p>
                              </li>
                              <li>
                                <p>
                                  communicate with you concerning our service so
                                  that we can send you news about Netflix,
                                  details about new features and content
                                  available on Netflix, special offers,
                                  promotional announcements, consumer surveys,
                                  and to assist you with operational requests
                                  such as password reset requests. These
                                  communications may be by various methods, such
                                  as email, push notifications, text message,
                                  online messaging channels, and matched
                                  identifier communications (described below).
                                  Please see the &quot;Your Choices&quot;
                                  section of this Privacy Statement to learn how
                                  to set or change your communications
                                  preferences.
                                </p>
                              </li>
                            </ul>
                            <h3>Disclosure of Information</h3>
                            <p>
                              We disclose your information for certain purposes
                              and to third parties, as described below:
                            </p>
                            <ul>
                              <li>
                                <p>
                                  <strong>
                                    The Netflix family of companies:
                                  </strong>{' '}
                                  We share your information among the Netflix
                                  family of companies (
                                  <a href="https://help.netflix.com/legal/corpinfo">
                                    help.netflix.com/legal/corpinfo
                                  </a>
                                  ) as needed for: data processing and storage;
                                  providing you with access to our services;
                                  providing customer support; making decisions
                                  about service improvements; content
                                  development; and for other purposes described
                                  in the Use of Information section of this
                                  Privacy Statement.
                                </p>
                              </li>
                              <li>
                                <p>
                                  <strong>Service Providers:</strong> We use
                                  other companies, agents or contractors
                                  (&quot;Service Providers&quot;) to perform
                                  services on our behalf or to assist us with
                                  the provision of services to you. For example,
                                  we engage Service Providers to provide
                                  marketing, advertising, communications,
                                  security, infrastructure and IT services, to
                                  customize, personalize and optimize our
                                  service, to provide bank account or balance
                                  information, to process credit card
                                  transactions or other payment methods, to
                                  provide customer service, to analyze and
                                  enhance data (including data about users&#x27;
                                  interactions with our service), and to process
                                  and administer consumer surveys. In the course
                                  of providing such services, these Service
                                  Providers may have access to your personal or
                                  other information. We do not authorize them to
                                  use or disclose your personal information
                                  except in connection with providing their
                                  services (which includes maintaining and
                                  improving their services).
                                </p>
                              </li>
                              <li>
                                <p>
                                  <strong>Partners:</strong> As described above,
                                  you may have a relationship with one or more
                                  of our Partners, in which case we may share
                                  certain information with them in order to
                                  coordinate with them on providing the Netflix
                                  service to members and providing information
                                  about the availability of the Netflix service.
                                  For example, depending on what Partner
                                  services you use, we may share information:
                                </p>
                                <ul>
                                  <li>
                                    <p>
                                      in order to facilitate Partner pre-paid
                                      promotions or collection of payment for
                                      the Netflix service for distribution to
                                      us;
                                    </p>
                                  </li>
                                  <li>
                                    <p>
                                      with Partners who operate voice assistant
                                      platforms that allow you to interact with
                                      our service using voice commands;
                                    </p>
                                  </li>
                                  <li>
                                    <p>
                                      so that content and features available in
                                      the Netflix service can be suggested to
                                      you in the Partner’s user interface. For
                                      members, these suggestions are part of the
                                      Netflix service and may include customized
                                      and personalized viewing recommendations.
                                    </p>
                                  </li>
                                </ul>
                              </li>
                              <li>
                                <p>
                                  <strong>Promotional offers:</strong> We may
                                  offer joint promotions or programs that, in
                                  order for your participation, will require us
                                  to share your information with third parties.
                                  In fulfilling these types of promotions, we
                                  may share your name and other information in
                                  connection with fulfilling the incentive.
                                  Please note that these third parties are
                                  responsible for their own privacy practices.
                                </p>
                              </li>
                              <li>
                                <p>
                                  <strong>
                                    Protection of Netflix and others:
                                  </strong>
                                  Netflix and its Service Providers may disclose
                                  and otherwise use your personal and other
                                  information where we or they reasonably
                                  believe such disclosure is needed to (a)
                                  satisfy any applicable law, regulation, legal
                                  process, or governmental request, (b) enforce
                                  applicable terms of use, including
                                  investigation of potential violations thereof,
                                  (c) detect, prevent, or otherwise address
                                  illegal or suspected illegal activities
                                  (including payment fraud), security or
                                  technical issues, or (d) protect against harm
                                  to the rights, property or safety of Netflix,
                                  its users or the public, as required or
                                  permitted by law.
                                </p>
                              </li>
                              <li>
                                <p>
                                  <strong>Business transfers:</strong> In
                                  connection with any reorganization,
                                  restructuring, merger or sale, or other
                                  transfer of assets, we will transfer
                                  information, including personal information,
                                  provided that the receiving party agrees to
                                  respect your personal information in a manner
                                  that is consistent with our Privacy Statement.
                                </p>
                              </li>
                            </ul>
                            <p>
                              Whenever in the course of sharing information we
                              transfer personal information to countries outside
                              of the European Economic Area and other regions
                              with comprehensive data protection laws, we will
                              ensure that the information is transferred in
                              accordance with this Privacy Statement and as
                              permitted by the applicable laws on data
                              protection.
                            </p>
                            <p>
                              You may also choose to disclose your information
                              in the following ways:
                            </p>
                            <ul>
                              <li>
                                <p>
                                  certain portions of our service may contain a
                                  tool which gives you the option to share
                                  information by email, text message and social
                                  or other sharing applications, using the
                                  clients and applications on your smart device;
                                </p>
                              </li>
                              <li>
                                <p>
                                  social plugins and similar technologies allow
                                  you to share information.
                                </p>
                              </li>
                            </ul>
                            <p>
                              Social plugins and social applications are
                              operated by the social networks themselves, and
                              are subject to their terms of use and privacy
                              policies.
                            </p>
                            <h3>Access to Account and Profiles</h3>
                            <ul>
                              <li>
                                <p>
                                  <strong>“Remember me” function:</strong> For
                                  ease of access to your account, you can use
                                  the &quot;Remember me on this device&quot;
                                  function when you log in to the website. This
                                  function uses technology that enables us to
                                  provide direct account access and to help
                                  administer the Netflix service without
                                  requiring reentry of any password or other
                                  user identification when your browser revisits
                                  the service.
                                </p>
                              </li>
                              <li>
                                <p>
                                  <strong>
                                    Giving others access to your account:
                                  </strong>
                                  If you share or otherwise allow others to have
                                  access to your account, they will be able to
                                  see shows you have watched, ratings, and
                                  account information (including your email
                                  address or other information in the
                                  &quot;Account&quot; area of our website). This
                                  remains true even if you use our profiles
                                  feature. You might have the option to use
                                  seamless account login through the Netflix
                                  mobile app, which enables login to the Netflix
                                  app on smart TVs, set top boxes, and other
                                  streaming media devices on the Wi-Fi network
                                  to which you are connected. If you use that
                                  feature, those devices will remain signed into
                                  your account unless you later log out of those
                                  devices.
                                </p>
                              </li>
                              <li>
                                <p>
                                  <strong>Profiles:</strong> Profiles allow
                                  users to have a distinct, personalized Netflix
                                  experience, built around the movies and shows
                                  of interest to them, as well as separate watch
                                  histories. Please note that profiles are
                                  available to everyone who uses your Netflix
                                  account, so that anyone with access to your
                                  Netflix account can navigate to and use, edit
                                  or delete profiles. You should explain this to
                                  others with access to your account, and if you
                                  do not wish them to use or change your
                                  profile, be sure to let them know. Profile
                                  users may be offered the opportunity to add an
                                  email address, phone number or other
                                  information to the profile and will be
                                  provided with notice of collection and use at
                                  the time such information is requested (the
                                  Profile Privacy Notice applies (
                                  <a href="https://help.netflix.com/legal/profileprivacy">
                                    help.netflix.com/legal/profileprivacy
                                  </a>
                                  )).
                                </p>
                              </li>
                              <li>
                                <p>
                                  <strong>
                                    Removing device access to your Netflix
                                    account:
                                  </strong>
                                  To remove access to your Netflix account from
                                  your devices: (a) visit the
                                  &quot;Account&quot; section of our website,
                                  choose &quot;Sign out of all devices,&quot;
                                  and follow the instructions to deactivate your
                                  devices (note, deactivation may not occur
                                  immediately) or (b) delete your Netflix
                                  settings from your device (steps vary by
                                  device and the option is not available on all
                                  devices). Where possible, users of public or
                                  shared devices should log out at the
                                  completion of each visit. If you sell or
                                  return a computer or Netflix ready device, you
                                  should log out and deactivate the device
                                  before doing so. If you do not maintain the
                                  security of your password or device, or fail
                                  to log out or deactivate your device,
                                  subsequent users may be able to access your
                                  account, including your personal information.
                                </p>
                              </li>
                            </ul>
                            <h3>Your Choices</h3>
                            <p>
                              <strong>Email and Text Messages.</strong> If you
                              no longer want to receive certain communications
                              from us via email or text message, simply access
                              the &quot;Communications Settings&quot; option in
                              the &quot;Account&quot; section of our website and
                              uncheck those items to unsubscribe. Alternatively,
                              click the &quot;unsubscribe&quot; link in the
                              email or reply STOP (or as otherwise instructed)
                              to the text message. Please note that you cannot
                              unsubscribe from service-related correspondence
                              from us, such as messages relating to your account
                              transactions.
                            </p>
                            <p>
                              <strong>Push Notifications.</strong> You can
                              choose to receive mobile push notifications from
                              Netflix. On some device operating systems, you
                              will be automatically enrolled in the
                              notifications. If you subsequently decide you no
                              longer wish to receive these notifications, you
                              can use your mobile device&#x27;s settings
                              functionality to turn them off. We also offer push
                              notifications on certain web browsers. If you
                              agree to receive those notifications and
                              subsequently decide you no longer wish to receive
                              these notifications, you can use your browser’s
                              settings to turn them off.
                            </p>
                            <p>
                              <strong>WhatsApp.</strong> If you have enabled
                              WhatsApp messages in connection with your Netflix
                              account or profile and no longer wish to receive
                              them, you can use your WhatsApp app settings to
                              block them.
                            </p>
                            <p>
                              <strong>Interest-Based Ads.</strong>{' '}
                              Interest-based ads are online ads that are
                              tailored to your likely interests based on your
                              use of various apps and websites across the
                              Internet. If you are using a browser, then cookies
                              and web beacons can be used to collect information
                              to help determine your likely interests. If you
                              are using a mobile device, tablet, or streaming
                              media device that includes a resettable device
                              identifier, then that identifier can be used to
                              help determine your likely interests. For your
                              choices about interest-based ads from Netflix,
                              please see the &quot;Cookies and Internet
                              Advertising&quot; section (below).
                            </p>
                            <p>
                              <strong>
                                Matched Identifier Communications.
                              </strong>{' '}
                              Some third party sites and apps allow us to reach
                              our users with online promotions about our titles
                              and services by sending a privacy protective
                              identifier to the third party. A privacy
                              protective identifier means we convert the
                              original information (such as an email address or
                              phone number) into a value to keep the original
                              information from being revealed. The third party
                              compares the privacy protective identifier to
                              identifiers in its database and there will be a
                              match only if you have used the same identifier
                              (such as an email address) with Netflix and the
                              third party. If there is a match, Netflix can then
                              choose whether or not to send a given promotional
                              communication to you on that third party site or
                              app, and can optimize and better measure the
                              effectiveness of online advertising. You can opt
                              out in the “Marketing Communications” section of
                              the “Account” section of our website.
                            </p>
                            <h3>Your Information and Rights</h3>
                            <p>
                              You can request access to your personal
                              information, or correct or update out-of-date or
                              inaccurate personal information we hold about you.
                              You may also request that we delete personal
                              information that we hold about you.
                            </p>
                            <p>
                              When you visit the &quot;Account&quot; portion of
                              our website, you have the ability to access and
                              update a broad range of information about your
                              account, including your contact information, your
                              Netflix payment information, and various related
                              information about your account (such as the
                              content you have viewed and rated). You must be
                              signed in to access the &quot;Account&quot;
                              section.
                            </p>
                            <p>
                              If you are the account owner, to download a copy
                              of your personal information go to:
                              <a
                                target="_blank"
                                href="https://www.netflix.com/account/getmyinfo"
                              >
                                www.netflix.com/account/getmyinfo
                              </a>
                              (you must be signed in to access the
                              &quot;Account&quot; section), and follow the
                              instructions.
                            </p>
                            <p>
                              For other requests, or if you have a question
                              regarding our privacy practices, please contact
                              our Data Protection Officer/Privacy Office at
                              <a href="mailto:privacy@netflix.com">
                                privacy@netflix.com
                              </a>
                              . For more information about how to access your
                              information, including our verification process,
                              please reference this help article:
                              <a href="https://help.netflix.com/en/node/100624">
                                help.netflix.com/node/100624
                              </a>
                              . For information about deletion, removal and
                              retention of information, please reference this
                              help article:
                              <a href="https://help.netflix.com/en/node/100625">
                                help.netflix.com/node/100625
                              </a>
                              . We respond to all requests we receive from
                              individuals wishing to exercise their data
                              protection rights in accordance with applicable
                              data protection laws. Please also see the
                              &quot;Your Choices&quot; section of this Privacy
                              Statement for additional choices regarding your
                              information.
                            </p>
                            <p>
                              We may reject requests that are unreasonable or
                              not required by law, including those that would be
                              extremely impractical, could require
                              disproportionate technical effort, or could expose
                              us to operational risks such as free trial fraud.
                              We may retain information as required or permitted
                              by applicable laws and regulations, including to
                              honor your choices, for our billing or records
                              purposes and to fulfill the purposes described in
                              this Privacy Statement. We take reasonable
                              measures to destroy or de-identify personal
                              information in a secure manner when it is no
                              longer required.
                            </p>
                            <h3>Security</h3>
                            <p>
                              We use reasonable administrative, logical,
                              physical and managerial measures to safeguard your
                              personal information against loss, theft and
                              unauthorized access, use and modification. These
                              measures are designed to provide a level of
                              security appropriate to the risks of processing
                              your personal information.
                            </p>
                            <h3>Other Websites, Platforms and Applications</h3>
                            <p>
                              The Netflix service may be provided through and/or
                              utilize features (such as voice controls) operated
                              by third party platforms, or contain links to
                              sites operated by third parties whose policies
                              regarding the handling of information may differ
                              from ours. For example, you may be able to access
                              the Netflix service through platforms such as
                              gaming systems, smart TVs, mobile devices, set top
                              boxes and a number of other Internet connected
                              devices. These websites and platforms have
                              separate and independent privacy or data policies,
                              privacy statements, notices and terms of use,
                              which we recommend you read carefully. In
                              addition, you may encounter third party
                              applications that interact with the Netflix
                              service.
                            </p>
                            <h3>Children</h3>
                            <p>
                              You must be 18 years of age or older to subscribe
                              to the Netflix service. In certain jurisdictions,
                              the age of majority may be older than 18, in which
                              case, you must satisfy that age in order to become
                              a member. While individuals under the age of 18
                              may utilize the service, they may do so only with
                              the involvement, supervision, and approval of a
                              parent or legal guardian.
                            </p>
                            <h3>Changes to This Privacy Statement</h3>
                            <p>
                              We will update this Privacy Statement from time to
                              time in response to changing legal, regulatory or
                              operational requirements. We will provide notice
                              of any such changes (including when they will take
                              effect) in accordance with law. Your continued use
                              of the Netflix service after any such updates take
                              effect will constitute acknowledgement and (as
                              applicable) acceptance of those changes. If you do
                              not wish to acknowledge or accept any updates to
                              this Privacy Statement, you may cancel your use of
                              the Netflix service. To see when this Privacy
                              Statement was last updated, please see the
                              &quot;Last Updated&quot; section below.
                            </p>
                            <h3>
                              <span id="cookies">
                                Cookies and Internet Advertising
                              </span>
                            </h3>
                            <p>
                              We and our Service Providers use cookies and other
                              technologies (such as web beacons), as well as
                              resettable device identifiers, for various
                              reasons. We want you to be informed about our use
                              of these technologies, so this section explains
                              the types of technologies we use, what they do,
                              and your choices regarding their use.
                            </p>
                            <p>
                              <strong>
                                Cookies and similar technologies, web beacons,
                                and resettable device identifiers
                              </strong>
                            </p>
                            <p>
                              Cookies are small data files that are commonly
                              stored on your device when you browse and use
                              websites and online services. We use other
                              technologies such as browser storage and plugins
                              (e.g., HTML5, IndexedDB, and WebSQL). Like
                              cookies, these other technologies may store small
                              amounts of data on your device. Web beacons (also
                              known as clear gifs or pixel tags) often work in
                              conjunction with cookies. In many cases, declining
                              cookies will impair the effectiveness of web
                              beacons associated with those cookies.
                            </p>
                            <p>
                              If you use the Netflix app on a mobile device,
                              tablet, or streaming media device, we may collect
                              a resettable device identifier from your device.
                              Resettable device identifiers (also known as
                              advertising identifiers) are similar to cookies
                              and are found on many mobile devices and tablets
                              (for example, the &quot;Identifier for
                              Advertisers&quot; (or IDFA) on Apple iOS devices
                              and the &quot;Google Advertising ID&quot; on
                              Android devices), and certain streaming media
                              devices. Like cookies, resettable device
                              identifiers are used to make online advertising
                              more relevant and for analytics and optimization
                              purposes.
                            </p>
                            <p>
                              <strong>
                                Why does Netflix use these technologies?
                              </strong>
                            </p>
                            <p>
                              We use these types of technologies for various
                              reasons, like making it easy to access our
                              services by remembering you when you return; to
                              provide, analyze, understand and enhance the use
                              of our services; to enforce our terms, prevent
                              fraud; to improve site performance, monitor
                              visitor traffic and actions on our site; and to
                              deliver and tailor our marketing or advertising,
                              and to understand interactions with our emails,
                              marketing, and online ads on third party sites.
                            </p>
                            <p>
                              To help you better understand how we use cookies
                              and resettable device identifiers, please see the
                              information below:
                            </p>
                            <ul>
                              <li>
                                <p>
                                  <strong>Essential cookies:</strong> These
                                  cookies are strictly necessary to provide our
                                  website or online service. For example, we and
                                  our Service Providers may use these cookies to
                                  authenticate and identify our members when
                                  they use our websites and applications so we
                                  can provide our service to them. They also
                                  help us to enforce our Terms of Use, prevent
                                  fraud and maintain the security of our
                                  service.
                                </p>
                              </li>
                              <li>
                                <p>
                                  <strong>
                                    Performance and functionality cookies:
                                  </strong>
                                  These cookies help us to customize and enhance
                                  your online experience with Netflix. For
                                  example, they help us to remember your
                                  preferences and prevent you from needing to
                                  re-enter information you previously provided
                                  (for example, during member sign up). We also
                                  use these cookies to collect information (such
                                  as popular pages, conversion rates, viewing
                                  patterns, click-through and other information)
                                  about our visitors&#x27; use of the Netflix
                                  service so that we can enhance and personalize
                                  our website and service and conduct market
                                  research. Deletion of these types of cookies
                                  may result in limited functionality of our
                                  service.
                                </p>
                              </li>
                              <li>
                                <p>
                                  <strong>
                                    Advertising cookies and resettable device
                                    identifiers:
                                  </strong>
                                  These cookies and resettable device
                                  identifiers use information about your use of
                                  this and other websites and apps, your
                                  response to ads and emails, and to deliver ads
                                  that are more relevant to you and for
                                  analytics and optimization purposes. These
                                  types of ads are called &quot;interest-based
                                  advertising.&quot; The advertising cookies
                                  associated with our service belong to our
                                  Service Providers.
                                </p>
                              </li>
                            </ul>
                            <p>
                              In connection with our use of these technologies,
                              some of the websites and apps where we advertise,
                              as well as advertising technology companies that
                              we use to purchase, deliver, optimize, and/or
                              measure our advertisements (collectively
                              “Advertising Partners”), may receive limited
                              information from us as part of our campaign
                              targeting, measurement, and optimization (e.g.,
                              steps completed in sign-up and site visit or app
                              open/install information).
                            </p>
                            <p>
                              Common uses of this type of information are to
                              judge the effectiveness of and optimize ad
                              campaigns, by allowing Advertising Partners to see
                              when someone who saw an ad later signed up for our
                              service. Another common use is to make sure we do
                              not serve ads trying to get individuals to sign up
                              for the Netflix service if they are already a
                              Netflix user.
                            </p>
                            <p>
                              Netflix uses contractual and technical measures
                              designed to prevent Advertising Partners from
                              accessing information regarding specific title
                              selections you make, URLs you land on, or shows
                              you have watched on our service. We do not share
                              information about title selections or your shows
                              you have watched on our service.
                            </p>
                            <p>
                              <strong>
                                How can I exercise choice regarding these
                                technologies?
                              </strong>
                            </p>
                            <p>
                              <strong>
                                To exercise choice regarding cookies
                              </strong>
                            </p>
                            <p>
                              For more information about cookies set through our
                              website, as well as other types of online tracking
                              (including the collection of information by third
                              parties about your online activities over time and
                              across third-party web sites or online services
                              for online interest based advertising), and to
                              exercise choices regarding them,
                              <a
                                target="_blank"
                                href="https://c.betrad.com/netflix/customlink.html?locale=en-EG"
                              >
                                click here
                              </a>
                              . At this time, we do not respond to web browser
                              &quot;do not track&quot; signals.
                            </p>
                            <p>
                              <strong>
                                To exercise choice regarding resettable device
                                identifiers
                              </strong>
                            </p>
                            <p>
                              To opt out of interest-based ads from Netflix in
                              connection with a resettable device identifier on
                              a mobile device, tablet, or streaming media
                              devices, please configure the appropriate setting
                              on your device (usually found under
                              &quot;privacy&quot; or &quot;ads&quot; in your
                              device&#x27;s settings). You may still see Netflix
                              ads on your device, but they will not be tailored
                              to your likely interests.
                            </p>
                            <p>
                              <strong>
                                To exercise choice using self-regulatory program
                                resources
                              </strong>
                            </p>
                            <p>
                              Netflix supports the following self-regulatory
                              programs, which provide additional privacy choices
                              for interest-based advertising:
                            </p>
                            <ul>
                              <li>
                                <p>
                                  In the US:
                                  <a
                                    target="_blank"
                                    href="http://www.aboutads.info/"
                                  >
                                    Digital Advertising Alliance (DAA)
                                  </a>
                                </p>
                              </li>
                              <li>
                                <p>
                                  In Europe:
                                  <a
                                    target="_blank"
                                    href="http://www.youronlinechoices.com/"
                                  >
                                    European Interactive Digital Advertising
                                    Alliance (EDAA)
                                  </a>
                                </p>
                              </li>
                              <li>
                                <p>
                                  In Canada:
                                  <a
                                    target="_blank"
                                    href="http://www.youradchoices.ca/"
                                  >
                                    AdChoices: Digital Advertising Alliance of
                                    Canada (DAAC)
                                  </a>
                                  /
                                  <a
                                    target="_blank"
                                    href="http://www.youradchoices.ca/fr"
                                  >
                                    Choix de Pub: l&#x27;Alliance de la
                                    publicité numérique du Canada (DAAC)
                                  </a>
                                </p>
                              </li>
                            </ul>
                            <p>
                              <strong>
                                To exercise choice regarding other technologies
                              </strong>
                            </p>
                            <p>
                              There are a number of ways to exercise choice
                              regarding technologies that are similar to
                              cookies, such as browser storage and plugins
                              (e.g., HTML5, IndexedDB, and WebSQL). For example,
                              many popular browsers provide the ability to clear
                              browser storage, commonly in the settings or
                              preferences area; see your browser&#x27;s help
                              function or support area to learn more. Other
                              technologies, such as Silverlight storage, may be
                              cleared from within the application.
                            </p>
                            <p>
                              To see the prior version of this document, please
                              go to
                              <a href="https://www.netflix.com/privacyupdates">
                                www.netflix.com/privacyupdates
                              </a>
                              .
                            </p>
                            <p></p>
                            <p></p>
                            <p></p>
                            <p></p>
                            <p></p>
                            <p></p>
                          </div>
                        </div>
                      </div>

                      <p>
                        <strong>Last Updated:</strong> July 31, 2020
                      </p>
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
                    <option value="en" selected="selected">
                      English
                    </option>

                    <option value="fr">Français</option>

                    <option value="tr">Türkçe</option>

                    <option value="ru">Русский</option>

                    <option value="he">עברית</option>

                    <option value="ar">العربية</option>
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