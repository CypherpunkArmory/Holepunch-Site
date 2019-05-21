import React, { Component } from 'react'
import { connect } from 'react-redux'
import SEO from '../seo'

import '../Login/login.module.scss'

import { Form } from 'reactstrap'
import Button from '../Button'
import TextFieldGroup from '../TextFieldGroup'

import { validateInput } from '../../utils/validation'
import {
  getConfirmationToken,
  resetPassword,
} from '../../redux/ducks/account/actions'
import { accountIsLoading } from '../../redux/ducks/account/selectors'
import PageSpinner from '../Spinner/PageSpinner'

class ResetPassword extends Component {
  componentDidMount = () => {
    const { getConfirmationToken, token } = this.props
    getConfirmationToken(token)
  }

  state = {
    newPassword: '',
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
    const { updatePassword } = this.props
    const { newPassword } = this.state

    if (this.isValid()) {
      updatePassword(newPassword)
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
    const { isLoading } = this.props

    return (
      <>
        <SEO title="Holepunch Reset Password" />
        <PageSpinner isLoading={isLoading}>
          <div className="container page__header">
            <h2>Reset Password</h2>
          </div>
          <div className="container" style={{ marginBottom: '7rem' }}>
            <Form
              onSubmit={this.handleSubmit}
              className="mx-auto"
              styleName="form"
            >
              <TextFieldGroup
                label="New Password"
                type="password"
                field="newPassword"
                onChange={this.handleUpdate}
                id="newPassword"
                placeholder="New Password"
                styleName="form__input"
                error={errors.newPassword}
              />
              {errors.newPassword && submited && (
                <span styleName="form__alert">{errors.newPassword}</span>
              )}
              <Button styleName="form__btn" round>submit</Button>
            </Form>
          </div>
        </PageSpinner>
      </>
    )
  }
}

const mapStateToProps = state => {
  return {
    isLoading: accountIsLoading(state),
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getConfirmationToken: token => {
      dispatch(getConfirmationToken.request(token))
    },
    updatePassword: new_password => {
      dispatch(resetPassword.request(new_password))
    },
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ResetPassword)
