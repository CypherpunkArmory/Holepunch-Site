import React, { Component } from 'react'
import './app.module.scss'

import SettingField from './SettingField'
import SettingFieldEmail from './SettingFieldEmail'
import SettingFieldPass from './SettingFieldPass'

class AccountOverview extends Component {
  render() {
    return (
      <div styleName="pannel">
        <h2 className="mb-4">Account Overview</h2>
        <div className="pannel__body">
          <SettingField
            label="Email"
            fieldText="myemail@gmail.com"
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
