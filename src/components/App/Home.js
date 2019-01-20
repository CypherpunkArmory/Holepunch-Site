import React, { Component } from 'react'
import { connect } from 'react-redux'
import classnammes from 'classnames'

import './app.module.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopy } from '@fortawesome/free-solid-svg-icons'

import { getAccountDetails } from '../../redux/ducks/account/selectors'

class Home extends Component {
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
    const { account } = this.props

    return (
      <>
        <div className="container page__header">
          <h2>Your api key:</h2>
        </div>
        <div className="container">
          <div styleName="api-key">
            <span
              styleName={classnammes('api-key__code', {
                'api-key__code_active': this.state.copied,
              })}
            >
              <input
                ref={this.clipAreaRef}
                type="text"
                value={account.access_token}
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
      </>
    )
  }
}

const mapStateToProps = state => {
  return {
    account: getAccountDetails(state),
  }
}

export default connect(
  mapStateToProps,
  null
)(Home)
