import React, { Component } from 'react'
import { navigate } from 'gatsby'
import { Router } from '@reach/router'
import { connect } from 'react-redux'

import AccountManagement from '../components/App/AccountManagement'
import PrivateRoute from '../components/PrivateRoute'

import {
  getIsLoggedIn,
  getAccountDetails,
  getIsAccountDetailLoaded,
  accountIsLoading,
} from '../redux/ducks/account/selectors'

class App extends Component {
  componentDidMount = () => {
    const { location, isLoggedIn } = this.props

    if (isLoggedIn & !location.pathname.includes('/app/account')) {
      navigate('/app/account/overview')
    }
  }

  render() {
    const { isLoggedIn, location } = this.props

    return (
      <Router>
        <PrivateRoute
          path="/app/account/*"
          component={AccountManagement}
          isLoggedIn={isLoggedIn}
        />
      </Router>
    )
  }
}

const mapStateToProps = state => {
  return {
    accountDetailsLoaded: getIsAccountDetailLoaded(state),
    isLoggedIn: getIsLoggedIn(state),
    accountIsLoading: accountIsLoading(state),
    account: getAccountDetails(state),
  }
}

export default connect(
  mapStateToProps,
  null
)(App)
