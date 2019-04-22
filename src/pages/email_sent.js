import React, { Component } from 'react'
import { connect } from 'react-redux'

import content from '../content/email_sent'

import { getAccountDetails } from '../redux/ducks/account/selectors'
import { sendEmailConfirmation } from '../redux/ducks/account/actions'
import SEO from '../components/seo'
import Button from '../components/Button'

class emailSentPage extends Component {
  state = {
    time: 0,
    timerOn: false,
  }

  countDown = time => {
    if (time === 0) {
      this.setState({
        timerOn: false,
      })
      return
    }

    this.setState({
      timerOn: true,
      time: time,
    })

    setTimeout(() => {
      this.countDown(time - 1)
    }, 1000)
  }

  handlesOnClick = () => {
    const { account, resendEmailConfirmation } = this.props

    resendEmailConfirmation(account.email)
    this.countDown(60)
  }
  render() {
    const { time, timerOn } = this.state

    return (
      <>
        <SEO title="Holepunch Confirmation Email Sent" />
        <div className="container page__header">
          <h2>{content.pageTitle}</h2>
          <p>{content.pageSubtitle}</p>

          {timerOn ? (
            <p className="text-danger">You can resend again in {time}s</p>
          ) : (
            <Button onClick={this.handlesOnClick}>Resend email</Button>
          )}
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

const mapDispatchToProps = dispatch => {
  return {
    resendEmailConfirmation: email => {
      dispatch(sendEmailConfirmation.request(email))
    },
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(emailSentPage)
