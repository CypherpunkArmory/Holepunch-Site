import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import './settingField.module.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTimes } from '@fortawesome/free-solid-svg-icons'
import SettingEditor from './SettingEditor';

export default class SettingField extends Component {
  static propTypes = {
    className: PropTypes.string,
    label: PropTypes.string,
    fieldText: PropTypes.string,
    fields: PropTypes.arrayOf(PropTypes.object),
    onSubmit: PropTypes.func,
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

  handleSubmit = (payload) => {
    this.toggleCollapse()
    this.props.onSubmit(payload)
  }

  render() {
    const { collapsed } = this.state
    const { label, fieldText, fields } = this.props

    return (
      <div styleName={classnames('field', {
        field_open: collapsed
      })}>
        {!collapsed ? (
          <div onClick={this.toggleCollapse} styleName="field__link">
            <span>{label}</span>
            <span>{fieldText}</span>
            <span>
              <FontAwesomeIcon icon={faEdit} />
            </span>
          </div>
        ) : (
          <>
            <span styleName="field__close" onClick={this.toggleCollapse}>
              <FontAwesomeIcon icon={faTimes} />
            </span>
            <SettingEditor onSubmit={this.handleSubmit} fields={fields}/>
          </>
        )}
      </div>
    )
  }
}
