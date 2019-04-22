import React, { Component } from 'react'
import { Form } from 'reactstrap'

import './settingField.module.scss'

import Button from '../Button'
import TextFieldGroup from '../TextFieldGroup'

import { validatePassword } from '../../utils/validation'

export default class SettingFieldPass extends Component {
  state = {
    oldPassword: '',
    newPassword: '',
    errors: {},
    submited: false,
  }

  isValid = () => {
    const { errors, isValid } = validatePassword(this.state)
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
    this.setState({
      submited: true,
    })

    setTimeout(() => {
      this.setState({
        submited: false,
      })
    }, 3400)

    if (this.isValid()) {
      //   this.props.signup(this.state.email, this.state.password)
      this.props.toggleCollapse()
    }
  }

  render() {
    const { errors, submited } = this.state

    return (
      <Form onSubmit={this.handleSubmit} styleName="field__form">
        <TextFieldGroup
          label="Old Password"
          type="password"
          field="oldPassword"
          onChange={this.handleUpdate}
          id="oldPassword"
          placeholder="Old Password"
          error={errors.oldPassword}
        />
        {submited && errors.oldPassword && (
          <span styleName="field__error">{errors.oldPassword}</span>
        )}
        <TextFieldGroup
          label="New Password"
          type="password"
          field="newPassword"
          onChange={this.handleUpdate}
          id="newPassword"
          placeholder="New Password"
          error={errors.newPassword}
        />
        {submited && errors.newPassword && (
          <span styleName="field__error">{errors.newPassword}</span>
        )}
        <Button>Change Password</Button>
      </Form>
    )
  }
}
