import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Router } from '@reach/router'

import './app.module.scss'

import { getAccountDetails } from '../../redux/ducks/account/selectors'

import AccountMenu from './AccountMenu'
import AccountBilling from './AccountBilling';
import ApiKey from './ApiKey'
import AccountOverview from './AccountOverview'

class AccountManagement extends Component {
  static propTypes = {
    className: PropTypes.string,
    account: PropTypes.object
  }

  render() {
    const { account } = this.props
    const routes = [
      { name: 'Account Overview', route: '/app/account/overview' },
      { name: 'Auth Key', route: '/app/account/key' },
      { name: 'Billing', route: '/app/account/billing' },
    ]
    return (
      <>
        <div styleName="main" className="container">
          <AccountMenu routes={routes} />
          <Router className="w-100">
            <ApiKey apiKey={account.access_token} path="/key" />
            <AccountOverview path="/overview" />
            <AccountBilling path="/billing" />
          </Router>
        </div>
      </>
    )
  }
}

const mapStateToProps = state => {
  return {
    account: getAccountDetails(state),
  }
}

export default connect(
  mapStateToProps,
  null
)(AccountManagement)
