import React, { Component } from 'react'
import { Table } from 'reactstrap'
import { Elements, StripeProvider } from 'react-stripe-elements'
import { Link } from 'gatsby'

import './account.module.scss'
import CheckoutForm from '../Form/CheckoutForm'

export default class AccountUpgrade extends Component {
  render() {
    return (
      <div styleName="pannel">
        <div className="upgrade__summary" style={{ maxWidth: '30rem' }}>
          <h3 className="mb-3">Plan Details</h3>
          <Table borderless>
            <tbody>
              <tr>
                <td className="p-0">
                  <h6>New plan:</h6>
                </td>
                <td className="text-right p-0">Basic</td>
              </tr>
              <tr>
                <td className="p-0">
                  <h6>New Monthly Total:</h6>
                </td>
                <td className="text-right p-0">$9.99</td>
              </tr>
              <tr>
                <td className="p-0">
                  <Link to="/pricing">Change plan</Link>
                </td>
              </tr>
            </tbody>
          </Table>
          <StripeProvider apiKey="pk_test_tNUQnHJMqXF2u0BVNhAK61U900q6CPg0pF">
            <Elements>
              <CheckoutForm />
            </Elements>
          </StripeProvider>
        </div>
      </div>
    )
  }
}
