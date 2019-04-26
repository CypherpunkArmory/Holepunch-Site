import React, { Component } from 'react'

import './app.module.scss'

import SettingField from './SettingField'
import SettingFieldEmail from './SettingFieldEmail'
import SettingFieldPass from './SettingFieldPass'

class AccountOverview extends Component {
  render() {
    const { account } = this.props

    return (
      <div styleName="pannel">
        <h2 className="mb-4">Account Overview</h2>
        <div styleName="pannel__body">
          <SettingField
            label="Email"
            fieldText={account.email}
            content={SettingFieldEmail}
          />
          <SettingField
            label="Password"
            fieldText="●●●●●●●●●●●●●"
            content={SettingFieldPass}
          />
          <hr />
          <button className="btn text-danger bg-white pl-0 mt-2">Delete Account</button>
        </div>
      </div>
    )
  }
}

export default AccountOverview
