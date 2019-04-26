import React, { Component } from 'react'

import './app.module.scss'

import SettingField from './SettingField'
import DeleteAccount from './DeleteAccount'

class AccountOverview extends Component {
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
      label: 'Current Password',
      type: 'password',
      field: 'password',
      id: 'currPassword',
      placeholder: 'Current Password',
    },
    {
      label: 'New Email',
      type: 'email',
      field: 'email',
      id: 'newEmail',
      placeholder: 'New Email',
    },
  ]

  updatePassword(payload) {
    alert(`Password Updated to ${payload.newPassword}`)
  }

  updateEmail(payload) {
    alert(`Email Updated to ${payload.email}`)
  }

  render() {
    const { account } = this.props

    return (
      <div styleName="pannel">
        <h2 className="mb-4">Account Overview</h2>
        <div styleName="pannel__body">
          <SettingField
            label="Email"
            fieldText={account.email}
            onSubmit={this.updateEmail}
            fields={this.updateEmailFields}
          />
          <SettingField
            label="Password"
            fieldText="●●●●●●●●●●●●●"
            onSubmit={this.updatePassword}
            fields={this.updatePasswordFields}
          />
          <hr />
          <DeleteAccount fields={this.deleteAccountFields} />
        </div>
      </div>
    )
  }
}

export default AccountOverview
