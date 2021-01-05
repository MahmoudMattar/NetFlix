import React, { useState, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { FirebaseContext } from '../context/firebase'
import { HeaderContainer } from '../containers/header'
import { FooterContainer } from '../containers/footer'
import { Plan } from '../components'
import * as ROUTES from '../constants/routes'
import StripeCheckout from 'react-stripe-checkout'
import axios from 'axios'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useAuthListener } from '../hooks/'
// const stripe = require('stripe')(
//   'sk_test_51I2KqVDroAwyxUrvjNzUqyzm71UY0pyKqnIov2Xfox1TXz2EZUHkACIHPQMfc9RbrYkfRXke4jUF6uHMzeoRCLSU00FYHvx6Lm'
// )
toast.configure()

export default function Plans() {
  const history = useHistory()
  const { firebase } = useContext(FirebaseContext)
  const [product, setProduct] = React.useState({
    price: 120,
    name: 'Netflix Subscription',
  })
  const user = useAuthListener().user
  var userUid = user.uid
  console.log(userUid)
  let custId

  function handleToken(token, addresses) {
    axios
      .post('https://8xxlk.sse.codesandbox.io/checkout', { token, product })
      .then((response) => {
        if (response.data.status === 'success') {
          custId = response.data.customerinfo.id
          let chargeId = response.data.chargeinfo.id
          toast('Thanks for your subscription', { type: 'success' })
          var db = firebase.firestore()
          db.collection('stripe')
            .doc(userUid)
            .set({ StripeId: custId, subscriptionId: chargeId })
            .catch((err) => console.log(err.message))

          history.push(ROUTES.BROWSE)
        } else {
          toast('There was an error please try again', { type: 'error' })
        }
      })
      .catch((err) =>
        toast('There was an error please try again', { type: 'error' })
      )
  }

  function valueOne(event) {
    console.log(event)
    return product.price
  }

  return (
    <>
      <HeaderContainer>
        <Plan>
          <Plan.Title>
            Choose the plan that’s right for you Change or cancel whenever you
            want.
          </Plan.Title>
          <Plan.Text>
            <Plan.Table>
              <table>
                <tr>
                  <th></th>
                  <th></th>
                  <th></th>
                  <th></th>

                  <th>Basic</th>
                  <th>Standard</th>
                  <th>Premium</th>
                </tr>
                <tr>
                  <br />
                </tr>

                <tr>
                  <td>Monthly Price</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>EGP120</td>
                  <td>EGP165</td>
                  <td>EGP200</td>
                </tr>
                <tr>
                  <hr />
                </tr>
                <tr>
                  <td>Video Quality</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>Good</td>
                  <td>Better</td>
                  <td>Best</td>
                </tr>
                <tr>
                  <hr />
                </tr>

                <tr>
                  <td>Resolution</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>480p</td>
                  <td>1080p</td>
                  <td>4K+HDR</td>
                </tr>
                <tr>
                  <hr />
                </tr>

                <tr>
                  <td>Screens you can watch on at the same time</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>1</td>
                  <td>2</td>
                  <td>4</td>
                </tr>
                <tr>
                  <hr />
                </tr>

                <tr>
                  <td>Watch on your TV, computer, mobile phone and tablet</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>
                    <i class="fas fa-check"></i>
                  </td>
                  <td>
                    <i class="fas fa-check"></i>
                  </td>
                  <td>
                    <i class="fas fa-check"></i>
                  </td>
                </tr>
                <tr>
                  <hr />
                </tr>

                <tr>
                  <td>Unlimited movies and TV shows</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>
                    <i class="fas fa-check"></i>
                  </td>
                  <td>
                    <i class="fas fa-check"></i>
                  </td>
                  <td>
                    <i class="fas fa-check"></i>
                  </td>
                </tr>
                <tr>
                  <hr />
                </tr>

                <tr>
                  <td>Cancel anytime</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>
                    <i class="fas fa-check"></i>
                  </td>
                  <td>
                    <i class="fas fa-check"></i>
                  </td>
                  <td>
                    <i class="fas fa-check"></i>
                  </td>
                </tr>
                <tr>
                  <hr />
                </tr>

                <tr>
                  <td>Choose Your Plan</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>
                    {' '}
                    <StripeCheckout
                      stripeKey="pk_test_51I2KqVDroAwyxUrvfv1kGqUC7rXjKA13OjpO6Gos7rNEb4I3Y0ABch6g60NIxC9ahkJc53MvUTOlmTwryd0WflL000SMwfaNwh"
                      token={handleToken}
                      billingAddress
                      description="This is Netflix monthly subscription"
                      name={product.name}
                      amount={120 * 100}
                      currency="EGP"
                      email={user.email}
                    />
                  </td>
                  <td onClick={() => setProduct({ price: 200 })}>
                    {' '}
                    <StripeCheckout
                      stripeKey="pk_test_51I2KqVDroAwyxUrvfv1kGqUC7rXjKA13OjpO6Gos7rNEb4I3Y0ABch6g60NIxC9ahkJc53MvUTOlmTwryd0WflL000SMwfaNwh"
                      token={handleToken}
                      billingAddress
                      description="This is Netflix monthly subscription"
                      name={product.name}
                      amount={165 * 100}
                      currency="EGP"
                      email={user.email}
                    />
                  </td>
                  <td>
                    {' '}
                    <StripeCheckout
                      stripeKey="pk_test_51I2KqVDroAwyxUrvfv1kGqUC7rXjKA13OjpO6Gos7rNEb4I3Y0ABch6g60NIxC9ahkJc53MvUTOlmTwryd0WflL000SMwfaNwh"
                      token={handleToken}
                      billingAddress
                      description="This is Netflix monthly subscription"
                      name={product.name}
                      amount={200 * 100}
                      currency="EGP"
                      email={user.email}
                    />
                  </td>
                </tr>
              </table>
            </Plan.Table>
          </Plan.Text>
          <Plan.TextSmall>
            Full HD (1080p), Ultra HD (4K) and HDR availability subject to your
            internet service and device capabilities. Not all content available
            in HD, Full HD, Ultra HD or HDR. See Terms of Use for more details.
          </Plan.TextSmall>
        </Plan>
      </HeaderContainer>
      <FooterContainer />
    </>
  )
}
