import React, { Component } from 'react'
import { connect } from 'react-redux'
import SEO from '../seo'

import '../Login/login.module.scss'

import { Form } from 'reactstrap'
import Button from '../Button'
import TextFieldGroup from '../TextFieldGroup'

import { validateInput } from '../../utils/validation'
import { performUpdate } from '../../redux/ducks/account/actions'

class ResetPassword extends Component {
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
    const { token, updatePassword } = this.props
    const { newPassword } = this.state
    
    if (this.isValid()) {
      updatePassword(newPassword, token)
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
    
    return (
      <>
        <SEO title="Holepunch Reset Password" />
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
            <Button styleName="form__btn">submit</Button>
          </Form>
        </div>
      </>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updatePassword: (password, token) => {
      dispatch(performUpdate.request(password, token))
    },
  }
}

export default connect(
  null,
  mapDispatchToProps
)(ResetPassword)
