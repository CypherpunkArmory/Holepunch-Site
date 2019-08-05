import React, { Component } from 'react'
import {
  CardNumberElement,
  CardExpiryElement,
  CardCVCElement,
  injectStripe,
} from 'react-stripe-elements'
import { Form, Row, Col } from 'reactstrap'

import BillingAddress from './BillingAddress'
import Button from '../Button'

class CheckoutForm extends Component {
  state = {
    street1: '',
    street2: '',
    city: '',
    state: '',
    zip: '',
  }

  handleUpdate = event => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  handleSubmit = async event => {
    event.preventDefault()
    const billingAddress = this.state

    const billing_details = {
      billing_details: {
        address: {
          city: billingAddress.city,
          country: billingAddress.country,
          line1: billingAddress.street1,
          line2: billingAddress.street1,
          postal_code: billingAddress.zip,
          state: billingAddress.state,
        },
        name: this.state.name,
      },
    }

    const tokenData = {
      name: this.state.name,
      address_line1: billingAddress.street1,
      address_line2: billingAddress.street2,
      address_country: billingAddress.country,
      address_city: billingAddress.city,
      address_state: billingAddress.state,
      address_zip: billingAddress.zip,
    }

    let { token } = await this.props.stripe.createToken(tokenData)
    let { paymentMethod } = await this.props.stripe.createPaymentMethod(
      'card',
      billing_details
    )
    /*
      This token alongside the plan information need to be sent to the server using the saga.
    */
    await console.log(token)
    await console.log(paymentMethod)
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <h3 className="mb-3">Billing Details</h3>
        <BillingAddress handleUpdate={this.handleUpdate} />
        <h3 className="mb-3">Card Details</h3>
        <Row form>
          <Col className="form-group" xs={7}>
            <div className="form-control">
              <CardNumberElement className="mt-1" />
            </div>
          </Col>
          <Col className="form-group" xs={3}>
            <div className="form-control">
              <CardExpiryElement className="mt-1" />
            </div>
          </Col>
          <Col className="form-group" xs={2}>
            <div className="form-control">
              <CardCVCElement className="mt-1" />
            </div>
          </Col>
        </Row>
        <Button type="submit" round className="mt-4">
          Send
        </Button>
      </Form>
    )
  }
}

export default injectStripe(CheckoutForm)
// export default CheckoutForm
