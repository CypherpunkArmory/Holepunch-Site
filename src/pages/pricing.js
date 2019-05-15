import React, { Component } from 'react'

import '../styles/pricing.module.scss'

import SEO from '../components/seo'
import PricingTable from '../components/Table/PricingTable'
import Switch from '../components/Switch'

export default class PricingPage extends Component {
  state = {
    width: undefined,
    discountBase: 0,
  }

  toggleDiscount = () => {
    const { discountBase } = this.state

    discountBase === 0
      ? this.setState({ discountBase: 20 })
      : this.setState({ discountBase: 0 })
  }

  componentWillMount = () => {
    this.updateDimensions()
  }

  componentDidMount = () => {
    window.addEventListener('resize', this.updateDimensions)
  }

  componentWillUnmount = () => {
    window.removeEventListener('resize', this.updateDimensions)
  }

  updateDimensions = () => {
    var w = window,
      d = document,
      documentElement = d.documentElement,
      body = d.getElementsByTagName('body')[0],
      width = w.innerWidth || documentElement.clientWidth || body.clientWidth

    this.setState({ width })
  }

  render() {
    const { discountBase } = this.state
    const plans = [
      {
        title: 'Basic',
        price: '',
        handler: () => alert('basic'),
        features: [
          {
            name: 'HTTP/TCP tunnels on random URLs/ports',
            value: true,
          },
          {
            name: 'Custom Subdomains',
            value: true,
          },
          {
            name: 'Reserved Domains',
            value: true,
          },
          {
            name: 'Google Apps SSO',
            value: true,
          },
          {
            name: 'Whitelabel Domains',
            value: false,
          },
          {
            name: 'Priority Support',
            value: false,
          },
        ],
      },
      {
        title: 'Pro',
        price: 5,
        discountBase: discountBase,
        handler: () => alert('Pro'),
        features: [
          {
            name: 'HTTP/TCP tunnels on random URLs/ports',
            value: true,
          },
          {
            name: 'Custom Subdomains',
            value: true,
          },
          {
            name: 'Reserved Domains',
            value: true,
          },
          {
            name: 'Google Apps SSO',
            value: true,
          },
          {
            name: 'Whitelabel Domains',
            value: true,
          },
          {
            name: 'Priority Support',
            value: false,
          },
        ],
      },
      {
        title: 'Business',
        price: 8,
        discountBase: discountBase,
        handler: () => alert('Business'),
        features: [
          {
            name: 'HTTP/TCP tunnels on random URLs/ports',
            value: true,
          },
          {
            name: 'Custom Subdomains',
            value: true,
          },
          {
            name: 'Reserved Domains',
            value: true,
          },
          {
            name: 'Google Apps SSO',
            value: true,
          },
          {
            name: 'Whitelabel Domains',
            value: true,
          },
          {
            name: 'Priority Support',
            value: true,
          },
        ],
      },
    ]

    return (
      <>
        <SEO title="Holepunch Features" />
        <div className="container page__header">
          <h2>Pricing</h2>
          <p>
            Making it more productive is a no-brainer. <br /> All paid plans
            come with a 15-day money back guarantee.
          </p>
        </div>
        <div className="container features">
          {false && (
            <div styleName="yearly-widget">
              Monthly Billing <Switch handlesClick={this.toggleDiscount} />{' '}
              <span styleName="yearly-widget__highlight">
                Yearly Billing
                <span styleName="yearly-widget__badge">
                  Save {this.state.discountBase}%
                </span>
              </span>
            </div>
          )}
          {this.state.width < 600 ? (
            plans.map((plan, i) => <PricingTable key={i} plans={[plan]} />)
          ) : (
            <PricingTable plans={plans} />
          )}
        </div>
      </>
    )
  }
}
