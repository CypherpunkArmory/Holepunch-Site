import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './settingField.module.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-solid-svg-icons'

export default class SettingField extends Component {
  static propTypes = {
    className: PropTypes.string,
    label: PropTypes.string,
    fieldText: PropTypes.string,
    content: PropTypes.func,
  }

  static defaultProps = {
    label: 'email',
    fieldText: 'myemail@provider.com',
  }

  state = {
    collapsed: false,
  }

  toggleCollapse = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    })
  }

  render() {
    const { collapsed } = this.state
    const { label, fieldText, content: Content } = this.props

    return (
      <div className="field mb-4">
        {!collapsed ? (
          <div onClick={this.toggleCollapse} styleName="field__link">
            <span>{label}</span>
            <span>{fieldText}</span>
            <span>
              <FontAwesomeIcon icon={faEdit} />
            </span>
          </div>
        ) : (
          <Content toggleCollapse={this.toggleCollapse} />
        )}
      </div>
    )
  }
}
