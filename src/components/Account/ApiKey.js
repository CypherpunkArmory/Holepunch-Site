import React, { Component } from 'react'
import classnammes from 'classnames'

import './account.module.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopy } from '@fortawesome/free-solid-svg-icons'

class ApiKey extends Component {
  clipAreaRef = React.createRef()

  state = {
    copied: false,
  }

  handlesClipboardCopy = e => {
    this.clipAreaRef.current.select()
    document.execCommand('copy')
    e.target.focus()

    this.setState({
      copied: true,
    })

    setTimeout(() => {
      this.setState({
        copied: false,
      })
    }, 200)
  }

  render() {
    const { apiKey } = this.props

    return (
      <div styleName="pannel">
        <h2 className="mb-4">API Key</h2>
        <div styleName="api-key">
          <span
            styleName={classnammes('api-key__code', {
              'api-key__code_active': this.state.copied,
            })}
          >
            <input
              ref={this.clipAreaRef}
              type="text"
              value={apiKey}
              readOnly
            />
          </span>
          {document.queryCommandSupported('copy') && (
            <button
              onClick={this.handlesClipboardCopy}
              styleName="api-key__copy"
            >
              <FontAwesomeIcon icon={faCopy} />
              Copy key
            </button>
          )}
        </div>
      </div>
    )
  }
}

export default ApiKey
