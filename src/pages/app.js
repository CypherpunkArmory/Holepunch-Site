import React, { Component } from 'react'
import { navigate } from 'gatsby'
import { Router } from '@reach/router'
import { connect } from 'react-redux'

import Home from '../components/App/Home'
import PrivateRoute from '../components/PrivateRoute'

import {
  getIsLoggedIn,
  getAccountDetails,
  getIsAccountDetailLoaded,
  accountIsLoading,
} from '../redux/ducks/account/selectors'

class App extends Component {
  componentDidMount = () => {
    if (this.props.isLoggedIn) {
      navigate('/app/home')
    }
  }

  render() {
    const { isLoggedIn } = this.props
    return (
      <Router>
        <PrivateRoute
          path="/app/home"
          component={Home}
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
