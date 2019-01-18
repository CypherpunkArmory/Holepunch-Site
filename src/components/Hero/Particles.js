import React, { Component } from 'react'

export default class Particles extends Component {
  state = {
    position: 0,
  }

  componentDidMount() {
    window.addEventListener('scroll', this.listenToScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.listenToScroll)
  }

  listenToScroll = () => {
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop

    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight

    const scrolled = winScroll / height

    this.setState({
      position: scrolled,
    })
  }

  calcPosition = (current, exponential) => {
    const { position } = this.state

    return position > 0 ? current + position * exponential : current
  }

  render() {
    return (
      <div ref="particles" className="particles">
        <p style={{ position: 'fixed' }}>{this.state.elem}</p>
        <svg
          width="841"
          height="840"
          viewBox="0 0 841 840"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient
              x1="-2.77%"
              y1="50.07%"
              y2="50%"
              id="linearGradient-blue"
            >
              <stop stopColor="#BA68C8" offset="0%" />
              <stop stopColor="#9C26B0" offset="49.14%" />
              <stop stopColor="#7D1FA1" offset="100%" />
            </linearGradient>
            <linearGradient
              x1="0%"
              y1="50%"
              x2="98.03%"
              y2="47.13%"
              id="linearGradient-purple"
            >
              <stop stopColor="#4FC3F7" offset="0%" />
              <stop stopColor="#03A9F4" offset="51.67%" />
              <stop stopColor="#0888D5" offset="100%" />
            </linearGradient>
          </defs>
          <g id="Page-1" fill="none" fillRule="evenodd" opacity="0.3">
            <g id="Home" transform="translate(-420 -4)" fillRule="nonzero">
              <g id="Group-2" transform="translate(0 -10)">
                <g id="Group" transform="translate(420)">
                  <circle
                    id="particle__oval particle__oval_1"
                    fill="#4FC3F7"
                    cx={this.calcPosition(443, 145)}
                    cy={this.calcPosition(580, -450)}
                    r="22"
                  />
                  <rect
                    id="particle__rectangle particle__rectangle_1"
                    fillOpacity="0.87"
                    fill="url(#linearGradient-blue)"
                    transform="rotate(140 690.81 146.04)"
                    x={this.calcPosition(508.31, -145)}
                    y={this.calcPosition(108.54, -450)}
                    width="365"
                    height="75"
                    rx="35.5"
                  />
                  <rect
                    id="particle__rectangle particle__rectangle_2"
                    fill="url(#linearGradient-purple)"
                    transform="rotate(138 634.4 236.45)"
                    x={this.calcPosition(519.89, -145)}
                    y={this.calcPosition(214.45, -145)}
                    width="229"
                    height="44"
                    rx="22"
                  />
                  <rect
                    id="particle__rectangle particle__rectangle_3"
                    fill="url(#linearGradient-purple)"
                    transform="rotate(60 770.3 470.16)"
                    x={this.calcPosition(655.8, 145)}
                    y={this.calcPosition(448.16, -145)}
                    width="229"
                    height="44"
                    rx="22"
                  />
                  <rect
                    id="particle__rectangle particle__rectangle_4"
                    fill="url(#linearGradient-purple)"
                    transform="rotate(40 621.4 736.4)"
                    x={this.calcPosition(461.9, 145)}
                    y={this.calcPosition(698.89, -145)}
                    width="319"
                    height="75"
                    rx="35.5"
                  />
                  <rect
                    id="particle__rectangle particle__rectangle_5"
                    fillOpacity="0.87"
                    fill="url(#linearGradient-blue)"
                    transform="rotate(50 656.07 708.48)"
                    x={this.calcPosition(551.07, -450)}
                    y={this.calcPosition(670.107, -145)}
                    width="210"
                    height="75"
                    rx="35.5"
                  />
                  <circle
                    id="particle__oval particle__oval_2"
                    fill="#9C26B0"
                    cx={this.calcPosition(421, 145)}
                    cy={this.calcPosition(672, -450)}
                    r="30"
                  />
                  <circle
                    id="particle__oval particle__oval_3"
                    fill="#9C26B0"
                    cx={this.calcPosition(9.5, 145)}
                    cy={this.calcPosition(728.5, -145)}
                    r="9.5"
                  />
                </g>
              </g>
            </g>
          </g>
        </svg>
      </div>
    )
  }
}
