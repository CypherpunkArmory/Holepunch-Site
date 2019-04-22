import React, { Component } from 'react'
import { Table } from 'reactstrap'

import './app.module.scss'

class AccountBilling extends Component {
  render() {
    return (
      <div styleName="pannel billing">
        <h2 className="mb-4">Billing</h2>
        <div styleName="pannel__body">
          <h3 className="mb-4">Plans</h3>
          <ul styleName="plan-list">
            <li styleName="plan plan_active">
              <h4>Beta</h4>
              <div className="plan__body">Totally free</div>
            </li>
            <li styleName="plan plan_disabled">
              <h4>Free</h4>
              <div className="plan__body">Totally free</div>
            </li>
            <li styleName="plan plan_disabled">
              <h4>Premium</h4>
              <div className="plan__body">Only $29.90</div>
            </li>
          </ul>
          <h3 className="mb-4">Billing History</h3>
          <Table styleName="billing-history" striped borderless>
            <thead>
              <tr>
                <th>Date</th>
                <th>Description</th>
                <th>Amount</th>
                <th />
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Mar 5, 2019</td>
                <td>Beta (Mar 5, 2019 - Apr 4, 2019)</td>
                <td>$0</td>
                <td>
                  <a href="https://google.com">View Invoice</a>
                </td>
              </tr>
              <tr>
                <td>May 5, 2019</td>
                <td>Premium (May 5, 2019 - Jun 4, 2019)</td>
                <td>$29.90</td>
                <td>
                  <a href="https://google.com">View Invoice</a>
                </td>
              </tr>
              <tr>
                <td>Jun 5, 2019</td>
                <td>Premium (Jun 5, 2019 - Jul 4, 2019)</td>
                <td>$29.90</td>
                <td>
                  <a href="https://google.com">View Invoice</a>
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    )
  }
}

export default AccountBilling
