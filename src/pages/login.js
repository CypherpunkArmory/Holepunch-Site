import React from 'react'
import _ from 'lodash'

import SEO from '../components/seo'

import LoginForm from '../components/Login/LoginForm'
import StatusModal from '../components/Modal/StatusModal'

class Login extends React.Component {
  render() {
    const { location } = this.props
    const signupSuccess = _.has(location, 'state.signupSuccess')
      ? location.state.signupSuccess
      : false
    const errorMessage = _.has(location, 'state.errorMessage')
      ? location.state.errorMessage
      : false
      
    return (
      <>
        <SEO title="Holepunch Login" />
        {signupSuccess && (
          <StatusModal
            title="Your registration was successful!"
            description="Your registration was successful, you can now login and start punching holes."
          />
        )}
        {errorMessage && (
          <StatusModal
            title="Sorry"
            description={errorMessage}
            failure
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
