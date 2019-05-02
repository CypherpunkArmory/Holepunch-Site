import React, { Component } from 'react'
import { connect } from 'react-redux'

import './account.module.scss'

import { updateAccount, deleteAccount } from '../../redux/ducks/account/actions'

import SettingField from './SettingField'
import DeleteAccount from './DeleteAccount'

class AccountOverview extends Component {
  state = {
    updatePasswordError: '',
    updateEmailError: '',
  }
  updatePasswordFields = [
    {
      label: 'Old Password',
      type: 'password',
      field: 'oldPassword',
      id: 'oldPassword',
      placeholder: 'Old Password',
    },
    {
      label: 'New Password',
      type: 'password',
      field: 'newPassword',
      id: 'newPassword',
      placeholder: 'New Password',
    },
  ]
  updateEmailFields = [
    {
      label: 'Current Email',
      type: 'email',
      field: 'email',
      id: 'currentEmail',
      placeholder: 'Current Email',
    },
    {
      label: 'New Email',
      type: 'email',
      field: 'newEmail',
      id: 'newEmail',
      placeholder: 'New Email',
    },
  ]

  updatePassword = payload => {
    this.props.updateAccount({
      new_password: payload.newPassword,
      old_password: payload.oldPassword,
    })
    return true
  }

  updateEmail = ({ email, newEmail }) => {
    if (email === newEmail) {
      this.setState({
        updateEmailError: "New Email Can't be the same",
      })
      return false
    } else {
      this.setState({
        updateEmailError: '',
      })
      this.props.updateAccount({ email: newEmail })
      return true
    }
  }

  render() {
    const { account, deleteAccount } = this.props

    return (
      <div styleName="pannel">
        <h2 className="mb-4">Account Overview</h2>
        <div styleName="pannel__body">
          <SettingField
            label="Email"
            fieldText={account.email}
            onSubmit={this.updateEmail}
            submitError={this.state.updateEmailError}
            fields={this.updateEmailFields}
          />
          <SettingField
            label="Password"
            fieldText="●●●●●●●●●●●●●"
            onSubmit={this.updatePassword}
            submitError={this.state.updatePasswordError}
            fields={this.updatePasswordFields}
          />
          <hr />
          <DeleteAccount
            onSubmit={deleteAccount}
            fields={this.deleteAccountFields}
          />
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateAccount: newDetails => {
      dispatch(updateAccount.request(newDetails))
    },
    deleteAccount: password => {
      dispatch(deleteAccount.request(password))
    },
  }
}

export default connect(
  null,
  mapDispatchToProps
)(AccountOverview)
