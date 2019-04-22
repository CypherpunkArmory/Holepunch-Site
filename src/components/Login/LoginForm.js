import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'gatsby'
import { Form } from 'reactstrap'

import './login.module.scss'

import Button from '../Button'
import TextFieldGroup from '../TextFieldGroup'

import { validateInput } from '../../utils/validation'
import { performEmailLogin } from '../../redux/ducks/account/actions'
import {
  getIsLoggedIn,
  accountIsLoading,
} from '../../redux/ducks/account/selectors'
import { getError } from '../../redux/ducks/account/selectors'

class LoginForm extends Component {
  state = {
    email: '',
    password: '',
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
      this.props.login(this.state.email, this.state.password)
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
    const { loginError } = this.props

    return (
      <Form
        onSubmit={event => {
          this.handleSubmit(event)
        }}
        className="mx-auto"
        styleName="form"
      >
        <TextFieldGroup
          label="Email"
          type="email"
          field="email"
          onChange={this.handleUpdate}
          id="loginEmail"
          placeholder="Enter Email"
          styleName="form__input"
          error={errors.email}
        />
        <TextFieldGroup
          label="Password"
          type="password"
          field="password"
          onChange={this.handleUpdate}
          id="loginPassword"
          placeholder="Password"
          styleName="form__input"
          error={errors.password}
        />
        {loginError && submited && (
          <span styleName="form__alert">{loginError.attributes.detail}</span>
        )}
        <Button styleName="form__btn">Login</Button>
        <span styleName="form__signup">
          Don't have an account? <Link to="/signup">Sign up</Link>
        </span>
        <span styleName="form__signup" className="mt-1">
          Forgot Your Password? <Link to="/reset">Reset</Link>
        </span>
      </Form>
    )
  }
}

const mapStateToProps = state => {
  return {
    loginError: getError(state),
    isLoggedIn: getIsLoggedIn(state),
    accountIsLoading: accountIsLoading(state),
  }
}

const mapDispatchToProps = dispatch => {
  return {
    login: (email, password) => {
      dispatch(performEmailLogin.request(email, password))
    },
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm)
