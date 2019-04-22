import React, { Component } from 'react'
import { Form } from 'reactstrap'

import './settingField.module.scss'

import Button from '../Button'
import TextFieldGroup from '../TextFieldGroup'

import { validateEmail } from '../../utils/validation'

export default class SettingFieldEmail extends Component {
  state = {
    email: '',
    errors: {},
    submited: false,
  }

  isValid = () => {
    const { errors, isValid } = validateEmail(this.state)
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
    }, 4400)
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
          label="Email"
          type="email"
          field="email"
          onChange={this.handleUpdate}
          id="changeEmail"
          placeholder="Enter Email"
          error={errors.email}
        />
        {submited && errors.email && <span styleName="field__error">{errors.email}</span>}
        <Button>Change email</Button>
      </Form>
    )
  }
}
