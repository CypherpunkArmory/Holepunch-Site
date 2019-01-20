import React from 'react'
import PropTypes from 'prop-types'

import './button.module.scss'

function Button(props) {
  let { children, icon, tag: Tag, className, ...attributes } = props

  if (attributes.href && Tag === 'button') {
    Tag = 'a'
  }

  return (
    <Tag styleName="btn btn_round btn_blue" className={className} type={(Tag === 'button' && attributes.onClick) ? 'button' : undefined} {...attributes}>
      {children}
      {icon && <span styleName="icon" />}
    </Tag>
  )
}

Button.propTypes = {
  active: PropTypes.bool,
  'aria-label': PropTypes.string,
  disabled: PropTypes.bool,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string, PropTypes.object]),
  innerRef: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.func,
    PropTypes.string,
  ]),
  onClick: PropTypes.func,
  children: PropTypes.node,
  className: PropTypes.string,
}

Button.defaultProps = {
  tag: 'button',
}

export default Button