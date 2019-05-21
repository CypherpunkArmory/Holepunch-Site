import React from 'react'
import SEO from '../components/seo'

import _ from 'lodash'

import LoginForm from '../components/Login/LoginForm'
import StatusModal from '../components/Modal/StatusModal'

class Login extends React.Component {
  render() {
    const { location } = this.props
    const signupSuccess = _.has(location, 'state.signupSuccess')
      ? location.state.signupSuccess
      : false

    return (
      <>
        <SEO title="Holepunch Login" />
        {signupSuccess && (
          <StatusModal
            title="Your registration was successful!"
            description="You may now Login."
          />
        )}
        <div className="container page__header">
          <h2>Login</h2>
        </div>
        <div className="container mb-5">
          <LoginForm />
        </div>
      </>
    )
  }
}

export default Login
