import { Header } from '../components';
import React, { useState, useEffect, useContext } from 'react';
import * as ROUTES from '../constants/routes';
import { FirebaseContext } from '../context/firebase';
import { Link } from 'react-router-dom';
// import { TermUse } from '../components';



export default function Terms() {
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

                <h1 className="kb-title">Netflix Terms of Use</h1>

                <div className="pane-wrapper">
                  <div className="left-pane">
                    <section
                      dir="LTR"
                      className="kb-article kb-article-variant gradient"
                      data-countries=",PS,HM,DJ,TZ,LR,LS,UA,YE,LY,QA,UG,MA,DZ,MD,ME,MG,MK,ML,EG,EH,IL,AE,AF,UZ,MR,IO,ZA,IQ,MU,IR,MW,AL,AM,ER,MZ,AO,ET,AQ,ZM,NA,NE,AZ,NG,ZW,BA,RS,BF,RW,JO,BH,BI,BJ,FO,SA,SC,SD,BV,BW,SH,BY,SJ,SL,GA,KE,SN,SO,KG,GE,OM,SS,CD,ST,GH,KM,CF,CG,GL,CI,GM,SZ,GN,CM,GQ,KW,KZ,TD,GW,TF,CV,TG,TJ,LB,TM,TN,PM,TR,"
                    >
                      <div className="page-block">
                        <div className="c-wrapper">
                          <div>
                            <p>
                              Netflix provides a personalized subscription
                              service that allows our members to access movies
                              and TV shows (“Netflix content”) streamed over the
                              Internet to certain Internet-connected TVs,
                              computers and other devices (&quot;Netflix ready
                              devices&quot;).
                            </p>
                            <p>
                              These Terms of Use govern your use of our service.
                              As used in these Terms of Use, &quot;Netflix
                              service&quot;, &quot;our service&quot; or
                              &quot;the service&quot; means the personalized
                              service provided by Netflix for discovering and
                              watching Netflix content, including all features
                              and functionalities, recommendations and reviews,
                              the website, and user interfaces, as well as all
                              content and software associated with our service.
                            </p>
                            <ol>
                              <li>
                                <p>
                                  <strong>Membership</strong> <br />
                                  <br />
                                  1.1. Your Netflix membership will continue
                                  until terminated. To use the Netflix service
                                  you must have Internet access and a Netflix
                                  ready device, and provide us with one or more
                                  Payment Methods. “Payment Method” means a
                                  current, valid, accepted method of payment, as
                                  may be updated from time to time, and which
                                  may include payment through your account with
                                  a third party. Unless you cancel your
                                  membership before your billing date, you
                                  authorize us to charge the membership fee for
                                  the next billing cycle to your Payment Method
                                  (see &quot;Cancellation&quot; below).
                                  <br />
                                  <br />
                                  1.2. We may offer a number of membership
                                  plans, including special promotional plans or
                                  memberships offered by third parties in
                                  conjunction with the provision of their own
                                  products and services. We are not responsible
                                  for the products and services provided by such
                                  third parties. Some membership plans may have
                                  differing conditions and limitations, which
                                  will be disclosed at your sign-up or in other
                                  communications made available to you. You can
                                  find specific details regarding your Netflix
                                  membership by visiting our website and
                                  clicking on the &quot;Account&quot; link
                                  available at the top of the pages of the
                                  Netflix website under your profile name.
                                </p>
                              </li>
                              <li>
                                <p>
                                  <strong>Free Trials</strong> <br />
                                  <br />
                                  2.1. Your Netflix membership may start with a
                                  free trial. The duration of the free trial
                                  period of your membership will be specified
                                  during sign-up and is intended to allow new
                                  members and certain former members to try the
                                  service. <br />
                                  <br />
                                  2.2. Free trial eligibility is determined by
                                  Netflix at its sole discretion and we may
                                  limit eligibility or duration to prevent free
                                  trial abuse. We reserve the right to revoke
                                  the free trial and put your account on hold in
                                  the event that we determine that you are not
                                  eligible. Members of households with an
                                  existing or recent Netflix membership are not
                                  eligible. We may use information such as
                                  device ID, method of payment or an account
                                  email address used with an existing or recent
                                  Netflix membership to determine eligibility.
                                  For combinations with other offers,
                                  restrictions may apply. <br />
                                  <br />
                                  2.3. We will charge the membership fee for the
                                  next billing cycle to your Payment Method at
                                  the end of the free trial period unless you
                                  cancel your membership prior to the end of the
                                  free trial period. To view the membership
                                  price and end date of your free trial period,
                                  visit our website and click the &quot;Billing
                                  details&quot; link on the &quot;Account&quot;
                                  page.
                                </p>
                              </li>
                              <li>
                                <p>
                                  <strong>Billing and Cancellation</strong>
                                  <br />
                                  <br />
                                  3.1.
                                  <span className="underline">
                                    Billing Cycle.
                                  </span>{' '}
                                  The membership fee for the Netflix service and
                                  any other charges you may incur in connection
                                  with your use of the service, such as taxes
                                  and possible transaction fees, will be charged
                                  to your Payment Method on the specific billing
                                  date indicated on your &quot;Account&quot;
                                  page. The length of your billing cycle will
                                  depend on the type of subscription that you
                                  choose when you sign-up for the service. In
                                  some cases your payment date may change, for
                                  example if your Payment Method has not
                                  successfully settled or if your paid
                                  membership began on a day not contained in a
                                  given month. Visit our website and click on
                                  the &quot;Billing details&quot; link on the
                                  &quot;Account&quot; page to see your next
                                  payment date. We may authorize your Payment
                                  Method in anticipation of membership or
                                  service-related charges through various
                                  methods, including authorizing it for up to
                                  approximately one month of service as soon as
                                  you register. In some instances, your
                                  available balance or credit limit may be
                                  reduced to reflect the authorization during
                                  your free trial period. <br />
                                  <br />
                                  3.2.
                                  <span className="underline">
                                    Payment Methods.
                                  </span>{' '}
                                  To use the Netflix service you must provide
                                  one or more Payment Methods. You authorize us
                                  to charge any Payment Method associated to
                                  your account in case your primary Payment
                                  Method is declined or no longer available to
                                  us for payment of your subscription fee. You
                                  remain responsible for any uncollected
                                  amounts. If a payment is not successfully
                                  settled, due to expiration, insufficient
                                  funds, or otherwise, and you do not cancel
                                  your account, we may suspend your access to
                                  the service until we have successfully charged
                                  a valid Payment Method. For some Payment
                                  Methods, the issuer may charge you certain
                                  fees, such as foreign transaction fees or
                                  other fees relating to the processing of your
                                  Payment Method. Local tax charges may vary
                                  depending on the Payment Method used. Check
                                  with your Payment Method service provider for
                                  details.
                                  <br />
                                  <br />
                                  3.3.
                                  <span className="underline">
                                    Updating your Payment Methods.
                                  </span>
                                  You can update your Payment Methods by going
                                  to the &quot;Account&quot; page. We may also
                                  update your Payment Methods using information
                                  provided by the payment service providers.
                                  Following any update, you authorize us to
                                  continue to charge the applicable Payment
                                  Method(s). <br />
                                  <br />
                                  3.4.
                                  <span className="underline">
                                    Cancellation.
                                  </span>{' '}
                                  You can cancel your Netflix membership at any
                                  time, and you will continue to have access to
                                  the Netflix service through the end of your
                                  billing period. To the extent permitted by the
                                  applicable law, payments are non-refundable
                                  and we do not provide refunds or credits for
                                  any partial membership periods or unwatched
                                  Netflix content. To cancel, go to the
                                  &quot;Account&quot; page and follow the
                                  instructions for cancellation. If you cancel
                                  your membership, your account will
                                  automatically close at the end of your current
                                  billing period. To see when your account will
                                  close, click &quot;Billing details&quot; on
                                  the &quot;Account&quot; page. If you signed up
                                  for Netflix using your account with a third
                                  party as a Payment Method and wish to cancel
                                  your Netflix membership, you may need to do so
                                  through such third party, for example by
                                  visiting your account with the applicable
                                  third party and turning off auto-renew, or
                                  unsubscribing from the Netflix service through
                                  that third party. You may also find billing
                                  information about your Netflix membership by
                                  visiting your account with the applicable
                                  third party. <br />
                                  <br />
                                  3.5.
                                  <span className="underline">
                                    Changes to the Price and Subscription Plans.
                                  </span>
                                  We may change our subscription plans and the
                                  price of our service from time to time;
                                  however, any price changes or changes to your
                                  subscription plans will apply no earlier than
                                  30 days following notice to you.
                                </p>
                              </li>
                              <li>
                                <p>
                                  <strong>Netflix Service</strong> <br />
                                  <br />
                                  4.1. You must be 18 years of age, or the age
                                  of majority in your province, territory or
                                  country, to become a member of the Netflix
                                  service. Minors may only use the service under
                                  the supervision of an adult.
                                  <br />
                                  <br />
                                  4.2. The Netflix service and any content
                                  viewed through the service are for your
                                  personal and non-commercial use only and may
                                  not be shared with individuals beyond your
                                  household. During your Netflix membership we
                                  grant you a limited, non-exclusive,
                                  non-transferable right to access the Netflix
                                  service and view Netflix content. Except for
                                  the foregoing, no right, title or interest
                                  shall be transferred to you. You agree not to
                                  use the service for public performances.{' '}
                                  <br />
                                  <br />
                                  4.3. You may view the Netflix content
                                  primarily within the country in which you have
                                  established your account and only in
                                  geographic locations where we offer our
                                  service and have licensed such content. The
                                  content that may be available to watch will
                                  vary by geographic location and will change
                                  from time to time. The number of devices on
                                  which you may simultaneously watch depends on
                                  your chosen subscription plan and is specified
                                  on the &quot;Account&quot; page. <br />
                                  <br />
                                  4.4. The Netflix service, including the
                                  content library, is regularly updated. In
                                  addition, we continually test various aspects
                                  of our service, including our website, user
                                  interfaces, promotional features and
                                  availability of Netflix content. You can turn
                                  off tests participation at any time by
                                  visiting the &quot;Account&quot; page and
                                  changing the &quot;Test participation&quot;
                                  settings. <br />
                                  <br />
                                  4.5. Some Netflix content is available for
                                  temporary download and offline viewing on
                                  certain supported devices (“Offline Titles”).
                                  Limitations apply, including restrictions on
                                  the number of Offline Titles per account, the
                                  maximum number of devices that can contain
                                  Offline Titles, the time period within which
                                  you will need to begin viewing Offline Titles
                                  and how long the Offline Titles will remain
                                  accessible. Some Offline Titles may not be
                                  playable in certain countries and if you go
                                  online in a country where you would not be
                                  able to stream that Offline Title, the Offline
                                  Title will not be playable while you are in
                                  that country. <br />
                                  <br />
                                  4.6. You agree to use the Netflix service,
                                  including all features and functionalities
                                  associated therewith, in accordance with all
                                  applicable laws, rules and regulations, or
                                  other restrictions on use of the service or
                                  content therein. You agree not to archive,
                                  reproduce, distribute, modify, display,
                                  perform, publish, license, create derivative
                                  works from, offer for sale, or use (except as
                                  explicitly authorized in these Terms of Use)
                                  content and information contained on or
                                  obtained from or through the Netflix service.
                                  You also agree not to: circumvent, remove,
                                  alter, deactivate, degrade or thwart any of
                                  the content protections in the Netflix
                                  service; use any robot, spider, scraper or
                                  other automated means to access the Netflix
                                  service; decompile, reverse engineer or
                                  disassemble any software or other products or
                                  processes accessible through the Netflix
                                  service; insert any code or product or
                                  manipulate the content of the Netflix service
                                  in any way; or use any data mining, data
                                  gathering or extraction method. In addition,
                                  you agree not to upload, post, e-mail or
                                  otherwise send or transmit any material
                                  designed to interrupt, destroy or limit the
                                  functionality of any computer software or
                                  hardware or telecommunications equipment
                                  associated with the Netflix service, including
                                  any software viruses or any other computer
                                  code, files or programs. We may terminate or
                                  restrict your use of our service if you
                                  violate these Terms of Use or are engaged in
                                  illegal or fraudulent use of the service.{' '}
                                  <br />
                                  <br />
                                  4.7. The quality of the display of the Netflix
                                  content may vary from device to device, and
                                  may be affected by a variety of factors, such
                                  as your location, the bandwidth available
                                  through and/or speed of your Internet
                                  connection. HD, Ultra HD and HDR availability
                                  is subject to your Internet service and device
                                  capabilities. Not all content is available in
                                  all formats, such as HD, Ultra HD or HDR and
                                  not all subscription plans allow you to
                                  receive content in all formats. Default
                                  playback settings on cellular networks exclude
                                  HD, Ultra HD and HDR content. The minimum
                                  connection speed for SD quality is 0.5 Mbps;
                                  however, we recommend a faster connection for
                                  improved video quality. A download speed of at
                                  least 5.0 Mbps per stream is recommended to
                                  receive HD content (defined as a resolution of
                                  720p or higher). A download speed of at least
                                  25.0 Mbps per stream is recommended to receive
                                  Ultra HD (defined as a resolution of 1080p or
                                  higher) and HDR content. You are responsible
                                  for all Internet access charges. Please check
                                  with your Internet provider for information on
                                  possible Internet data usage charges. The time
                                  it takes to begin watching Netflix content
                                  will vary based on a number of factors,
                                  including your location, available bandwidth
                                  at the time, the content you have selected and
                                  the configuration of your Netflix ready
                                  device. <br />
                                  <br />
                                  4.8. Netflix software is developed by, or for,
                                  Netflix and is designed to enable viewing of
                                  Netflix content through Netflix ready devices.
                                  This software may vary by device and medium,
                                  and functionalities and features may also
                                  differ between devices. You acknowledge that
                                  the use of the service may require third party
                                  software that is subject to third party
                                  licenses. You agree that you may automatically
                                  receive updated versions of the Netflix and
                                  related third-party software.
                                </p>
                              </li>
                              <li>
                                <p>
                                  <strong>Passwords and Account Access.</strong>{' '}
                                  The member who created the Netflix account and
                                  whose Payment Method is charged (the
                                  &quot;Account Owner&quot;) has access and
                                  control over the Netflix account and the
                                  Netflix ready devices that are used to access
                                  our service and is responsible for any
                                  activity that occurs through the Netflix
                                  account. To maintain control over the account
                                  and to prevent anyone from accessing the
                                  account (which would include information on
                                  viewing history for the account), the Account
                                  Owner should maintain control over the Netflix
                                  ready devices that are used to access the
                                  service and not reveal the password or details
                                  of the Payment Method associated with the
                                  account to anyone. You are responsible for
                                  updating and maintaining the accuracy of the
                                  information you provide to us relating to your
                                  account. We can terminate your account or
                                  place your account on hold in order to protect
                                  you, Netflix or our partners from identity
                                  theft or other fraudulent activity.
                                </p>
                              </li>
                              <li>
                                <p>
                                  <strong>
                                    Warranties and Limitations on Liability.
                                  </strong>
                                  The Netflix service is provided &quot;as
                                  is&quot; and without warranty or condition. In
                                  particular, our service may not be
                                  uninterrupted or error-free. You waive all
                                  special, indirect and consequential damages
                                  against us. These terms will not limit any
                                  non-waivable warranties or consumer protection
                                  rights that you may be entitled to under the
                                  laws of your country of residence.
                                </p>
                              </li>
                              <li>
                                <p>
                                  <strong>Class Action Waiver.</strong> WHERE
                                  PERMITTED UNDER THE APPLICABLE LAW, YOU AND
                                  NETFLIX AGREE THAT EACH MAY BRING CLAIMS
                                  AGAINST THE OTHER ONLY IN YOUR OR ITS
                                  INDIVIDUAL CAPACITY, AND NOT AS A PLAINTIFF OR
                                  CLASS MEMBER IN ANY PURPORTED CLASS OR
                                  REPRESENTATIVE PROCEEDING. Further, where
                                  permitted under the applicable law, unless
                                  both you and Netflix agree otherwise, the
                                  court may not consolidate more than one
                                  person&#x27;s claims with your claims, and may
                                  not otherwise preside over any form of a
                                  representative or className proceeding.
                                </p>
                              </li>
                              <li>
                                <p>
                                  <strong>Miscellaneous</strong> <br />
                                  <br />
                                  8.1.
                                  <span className="underline">
                                    Governing Law.
                                  </span>{' '}
                                  These Terms of Use shall be governed by and
                                  construed in accordance with the laws of the
                                  Netherlands.
                                  <br />
                                  <br />
                                  8.2.
                                  <span className="underline">
                                    Unsolicited Materials.
                                  </span>
                                  Netflix does not accept unsolicited materials
                                  or ideas for Netflix content and is not
                                  responsible for the similarity of any of its
                                  content or programming in any media to
                                  materials or ideas transmitted to Netflix.{' '}
                                  <br />
                                  <br />
                                  8.3.
                                  <span className="underline">
                                    Customer Support.
                                  </span>{' '}
                                  To find more information about our service and
                                  its features or if you need assistance with
                                  your account, please visit the Netflix Help
                                  Center on our website. In certain instances,
                                  Customer Service may best be able to assist
                                  you by using a remote access support tool
                                  through which we have full access to your
                                  computer. If you do not want us to have this
                                  access, you should not consent to support
                                  through the remote access tool, and we will
                                  assist you through other means. In the event
                                  of any conflict between these Terms of Use and
                                  information provided by Customer Support or
                                  other portions of our website, these Terms of
                                  Use will control.
                                  <br />
                                  <br />
                                  8.4.
                                  <span className="underline">Survival.</span> If
                                  any provision or provisions of these Terms of
                                  Use shall be held to be invalid, illegal, or
                                  unenforceable, the validity, legality and
                                  enforceability of the remaining provisions
                                  shall remain in full force and effect. <br />
                                  <br />
                                  8.5.
                                  <span className="underline">
                                    Changes to Terms of Use and Assignment.
                                  </span>
                                  Netflix may, from time to time, change these
                                  Terms of Use. We will notify you at least 30
                                  days before such changes apply to you. We may
                                  assign or transfer our agreement with you
                                  including our associated rights and
                                  obligations at any time and you agree to
                                  cooperate with us in connection with such an
                                  assignment or transfer. <br />
                                  <br />
                                  8.6.
                                  <span className="underline">
                                    Electronic Communications.
                                  </span>
                                  We will send you information relating to your
                                  account (e.g. payment authorizations,
                                  invoices, changes in password or Payment
                                  Method, confirmation messages, notices) in
                                  electronic form only, for example via emails
                                  to your email address provided during
                                  registration.
                                </p>
                              </li>
                            </ol>
                            <p></p>
                            <p></p>
                          </div>
                        </div>
                      </div>

                      <p>
                        <strong>Last Updated:</strong> December 31, 2019
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