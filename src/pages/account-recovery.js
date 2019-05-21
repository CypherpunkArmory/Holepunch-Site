import React, { Component } from 'react'
import { connect } from 'react-redux'
import SEO from '../components/seo'

import '../components/Login/login.module.scss'

import { Form } from 'reactstrap'
import Button from '../components/Button'
import TextFieldGroup from '../components/TextFieldGroup'

import { validateInput } from '../utils/validation'
import { sendResetEmail } from '../redux/ducks/account/actions'
import { getError } from '../redux/ducks/account/selectors'

class AccountRecovery extends Component {
  state = {
    email: '',
    errors: {},
    submited: false,
  }

  isValid = () => {
    const { errors, isValid } = validateInput(this.state)
    this.setState({
      errors,
    })
    return isValid
  }

  handleUpdate = event => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  handleSubmit = event => {
    event.preventDefault()

    if (this.isValid()) {
      this.props.sendResetEmail(this.state.email)
    }
    this.setState({
      submited: true,
    })

    setTimeout(() => {
      this.setState({
        submited: false,
      })
    }, 4400)
  }

  render() {
    const { errors, submited } = this.state
    const { sendingError } = this.props

    return (
      <>
        <SEO title="Holepunch Reset Password" />
        <div className="container page__header">
          <h2>Recover Password</h2>
        </div>
        <div className="container" style={{ marginBottom: '7rem' }}>
          <Form
            onSubmit={this.handleSubmit}
            className="mx-auto"
            styleName="form"
          >
            <TextFieldGroup
              label="Email"
              type="email"
              field="email"
              onChange={this.handleUpdate}
              id="resetEmail"
              placeholder="Enter Email"
              styleName="form__input"
              error={errors.email}
            />
            {errors.email && submited && (
              <span styleName="form__alert">{errors.email}</span>
            )}
            {sendingError && submited && (
              <span styleName="form__alert">Email not found</span>
            )}
            <Button styleName="form__btn" round>submit</Button>
          </Form>
        </div>
      </>
    )
  }
}

const mapStateToProps = state => {
  return {
    sendingError: getError(state),
  }
}

const mapDispatchToProps = dispatch => {
  return {
    sendResetEmail: email => {
      dispatch(sendResetEmail.request(email))
    },
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AccountRecovery)
