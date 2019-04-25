import React from 'react'
import { Link } from 'gatsby'

import '../styles/download.module.scss'

import * as versions from '../content/version.js'

const Code = ({children}) => <div styleName="code"><code>{children}</code></div>
const Paragraph = ({children}) => <p>{children}</p>

export default {
  pageTitle: 'Download',
  pageSubtitle:
    'Download the holepunch client, punch and start having fun.',
  supportedOS: [
    {
      id: 'mac',
      name: 'Mac OS X',
      icon: () =>  (<svg styleName="platform__logo" viewBox="0 0 92 79" xmlns="http://www.w3.org/2000/svg" > <g fill="#CED4D7" fillRule="nonzero"> <path styleName="icon__shape icon__shape_dark-blue" d="M24.9 58.95a3.92 3.92 0 0 1-1.55-5.27c1-1.9 3.33-2.6 5.2-1.58a36.8 36.8 0 0 0 14.32 4.32c.25-4.91 1-9.16 1.74-12.24h-9.93v-3.9C34.68 28.54 42.6 8.2 46 0H7.69A7.76 7.76 0 0 0 0 7.78v62.58a7.76 7.76 0 0 0 7.69 7.79h38.24a52.79 52.79 0 0 1-2.97-13.91 44.33 44.33 0 0 1-18.06-5.3zM23.43 21.1a3.33 3.33 0 0 1 3.3-3.34c1.82 0 3.3 1.5 3.3 3.34v4.86a3.32 3.32 0 0 1-3.3 3.35c-1.82 0-3.3-1.5-3.3-3.35V21.1z"/> <path styleName="icon__shape icon__shape_light-blue" d="M84.36 0H54.3c-1.28 2.98-9.96 23.47-11.65 36.4H55.2l-1.93 5.25c-.04.1-2.2 6.23-2.7 14.64 4.83-.6 9.52-2.15 13.74-4.6a3.79 3.79 0 0 1 5.22 1.47 3.93 3.93 0 0 1-1.44 5.3c-5.35 3.1-11.31 5-17.45 5.64a44.15 44.15 0 0 0 2.77 12.31c.22.57.28 1.16.24 1.74h30.7c4.2 0 7.65-3.5 7.65-7.79V7.78A7.73 7.73 0 0 0 84.36 0zM69.49 26.02a3.32 3.32 0 0 1-3.29 3.35 3.32 3.32 0 0 1-3.28-3.35v-4.86a3.32 3.32 0 0 1 3.28-3.35c1.82 0 3.3 1.5 3.3 3.35v4.86z"/> </g> </svg>),
      downloadLinks: {
          32: 'https://github.com/CypherpunkArmory/punch/releases/download/' + versions.PunchVersion + '/punch-darwin-386.zip',
          64: 'https://github.com/CypherpunkArmory/punch/releases/download/' + versions.PunchVersion + '/punch-darwin-amd64.zip',
      }
    },
    {
      id: 'win',
      name: 'Windows',
      icon: () =>  <svg styleName="platform__logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14.402 14.402" > <g fill="#030104"> <polygon styleName="icon__shape icon__shape_dark-blue" points="0,7.896 0,12.091 5.989,12.951 5.989,7.896"/> <polygon styleName="icon__shape icon__shape_dark-blue" points="5.989,1.452 0,2.312 0,6.507 5.989,6.507"/> <polygon styleName="icon__shape icon__shape_light-blue" points="14.402,6.507 14.402,0.173 7.379,1.181 7.379,6.507"/> <polygon styleName="icon__shape icon__shape_light-blue" points="7.379,13.222 14.402,14.229 14.402,7.896 7.379,7.896"/> </g> </svg>,
      downloadLinks: {
          32: 'https://github.com/CypherpunkArmory/punch/releases/download/' + versions.PunchVersion + '/punch-windows-386.zip',
          64: 'https://github.com/CypherpunkArmory/punch/releases/download/' + versions.PunchVersion + '/punch-windows-amd64.zip',
      }
    },
    {
        id: 'linux',
        name: 'Linux',
        icon: () =>  <svg styleName="platform__logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 304.998 304.998" > <path styleName="icon__shape icon__shape_dark-blue" d="M274.659 244.888c-8.944-3.663-12.77-8.524-12.4-15.777.381-8.466-4.422-14.667-6.703-17.117 1.378-5.264 5.405-23.474.004-39.291-5.804-16.93-23.524-42.787-41.808-68.204-7.485-10.438-7.839-21.784-8.248-34.922-.392-12.531-.834-26.735-7.822-42.525C190.084 9.859 174.838 0 155.851 0c-11.295 0-22.889 3.53-31.811 9.684-18.27 12.609-15.855 40.1-14.257 58.291.219 2.491.425 4.844.545 6.853 1.064 17.816.096 27.206-1.17 30.06-.819 1.865-4.851 7.173-9.118 12.793-4.413 5.812-9.416 12.4-13.517 18.539-4.893 7.387-8.843 18.678-12.663 29.597-2.795 7.99-5.435 15.537-8.005 20.047a27.296 27.296 0 0 0-2.647 20.505c-1.844 1.281-4.508 3.803-6.757 8.557-2.718 5.8-8.233 8.917-19.701 11.122-5.27 1.078-8.904 3.294-10.804 6.586-2.765 4.791-1.259 10.811.115 14.925 2.03 6.048.765 9.876-1.535 16.826-.53 1.604-1.131 3.42-1.74 5.423-.959 3.161-.613 6.035 1.026 8.542 4.331 6.621 16.969 8.956 29.979 10.492 7.768.922 16.27 4.029 24.493 7.035 8.057 2.944 16.388 5.989 23.961 6.913 1.151.145 2.291.218 3.39.218 11.434 0 16.6-7.587 18.238-10.704 4.107-.838 18.272-3.522 32.871-3.882 14.576-.416 28.679 2.462 32.674 3.357 1.256 2.404 4.567 7.895 9.845 10.724 2.901 1.586 6.938 2.495 11.073 2.495h.001c4.416 0 12.817-1.044 19.466-8.039 6.632-7.028 23.202-16 35.302-22.551a717.87 717.87 0 0 0 7.441-4.065c6.797-3.768 10.506-9.152 10.175-14.771-.276-4.667-3.365-8.761-8.062-10.684zm-150.47-1.353c-.846-5.96-8.513-11.871-17.392-18.715-7.26-5.597-15.489-11.94-17.756-17.312-4.685-11.082-.992-30.568 5.447-40.602 3.182-5.024 5.781-12.643 8.295-20.011 2.714-7.956 5.521-16.182 8.66-19.783 4.971-5.622 9.565-16.561 10.379-25.182 4.655 4.444 11.876 10.083 18.547 10.083 1.027 0 2.024-.134 2.977-.403 4.564-1.318 11.277-5.197 17.769-8.947 5.597-3.234 12.499-7.222 15.096-7.585 4.453 6.394 30.328 63.655 32.972 82.044 2.092 14.55-.118 26.578-1.229 31.289a23.017 23.017 0 0 0-3.08-.221c-7.207 0-9.115 3.934-9.612 6.283-1.278 6.103-1.413 25.618-1.427 30.003-2.606 3.311-15.785 18.903-34.706 21.706-7.707 1.12-14.904 1.688-21.39 1.688-5.544 0-9.082-.428-10.551-.651l-9.508-10.879c3.749-1.851 7.497-5.757 6.509-12.805zm12.065-179.386c-.297.128-.589.265-.876.411a17.713 17.713 0 0 0-.199-1.952c-1.038-5.975-5-10.312-9.419-10.312-.327 0-.656.025-1.017.08-2.629.438-4.691 2.413-5.821 5.213.991-6.144 4.472-10.693 8.602-10.693 4.85 0 8.947 6.536 8.947 14.272 0 .975-.071 1.945-.217 2.981zm37.686 4.607c.444-1.414.684-2.944.684-4.532 0-7.014-4.45-12.509-10.131-12.509-5.552 0-10.069 5.611-10.069 12.509 0 .47.023.941.067 1.411l-.861-.329a19.125 19.125 0 0 1-.962-6.015c0-8.387 5.36-15.211 11.95-15.211 6.589 0 11.95 6.824 11.95 15.211 0 3.489-.963 6.819-2.628 9.465zm-4.859 16.324c-.095.424-.297.612-2.531 1.774-1.128.587-2.532 1.318-4.289 2.388l-1.174.711c-4.718 2.86-15.765 9.559-18.764 9.952-2.037.274-3.297-.516-6.13-2.441a88.441 88.441 0 0 0-2.044-1.362c-5.107-3.351-8.392-7.042-8.763-8.485 1.665-1.287 5.792-4.508 7.905-6.415 4.289-3.988 8.605-6.668 10.741-6.668.113 0 .215.008.321.028 2.51.443 8.701 2.914 13.223 4.718 2.09.834 3.895 1.554 5.165 2.01 4.001 1.374 6.087 3.132 6.34 3.79zm35.947 186.37c2.257-10.181 4.857-24.031 4.436-32.196-.097-1.855-.261-3.874-.42-5.826-.297-3.65-.738-9.075-.283-10.684.09-.042.19-.078.301-.109.019 4.668 1.033 13.979 8.479 17.226 2.219.968 4.755 1.458 7.537 1.458 7.459 0 15.735-3.659 19.125-7.049 1.996-1.996 3.675-4.438 4.851-6.372.257.753.415 1.737.332 3.005-.443 6.885 2.903 16.019 9.271 19.385l.927.487c2.268 1.19 8.292 4.353 8.389 5.853-.001.001-.051.177-.387.489-1.509 1.379-6.82 4.091-11.956 6.714-9.111 4.652-19.438 9.925-24.076 14.803-6.53 6.872-13.916 11.488-18.376 11.488a4.83 4.83 0 0 1-1.461-.206c-4.844-1.51-8.831-8.499-6.689-18.466zM39.917 245.477c-.494-2.312-.884-4.137-.465-5.905.304-1.31 6.771-2.714 9.533-3.313 3.883-.843 7.899-1.714 10.525-3.308 3.551-2.151 5.474-6.118 7.17-9.618 1.228-2.531 2.496-5.148 4.005-6.007.085-.05.215-.108.463-.108 2.827 0 8.759 5.943 12.177 11.262.867 1.341 2.473 4.028 4.331 7.139 5.557 9.298 13.166 22.033 17.14 26.301 3.581 3.837 9.378 11.214 7.952 17.541-1.044 4.909-6.602 8.901-7.913 9.784-.476.108-1.065.163-1.758.163-7.606 0-22.662-6.328-30.751-9.728l-1.197-.503c-4.517-1.894-11.891-3.087-19.022-4.241-5.674-.919-13.444-2.176-14.732-3.312-1.044-1.171.167-4.978 1.235-8.337.769-2.414 1.563-4.91 1.998-7.523.617-4.168-.109-7.561-.691-10.287z"/> </svg>,
        downloadLinks: {
            32: 'https://github.com/CypherpunkArmory/punch/releases/download/' + versions.PunchVersion + '/punch-linux-386.zip',
            64: 'https://github.com/CypherpunkArmory/punch/releases/download/' + versions.PunchVersion + '/punch-linux-amd64.zip',
        }
    },
  ],
  setupSteps: [
    {
      title: 'Unzip the download',
      body: [
        { component: Paragraph, content: "On OSX and Linux you unzip the executable with the following command.  On windows, just double click it." },
        { component: Code, content: "$  unzip /path/to/punch.zip" },
        { component: Paragraph, content: "Note, the actual downloaded filename will be something like punch-linux-amd64.zip" },
      ],
    },
    {
      title: 'Provide account info',
      body: [
        { component: Paragraph, content: "Running this command will log you into your account and guide you through any additional setup required." },
        { component: Code, content: "$  ./punch setup" },
        { component: (props) => <Link to="/signup" {...props}/>, content: "Sign up to create an account." },
      ]
    },
    {
      title: 'Time to punch it',
      body: [
        { component: Paragraph, content: "Check it out by running it from the command line:" },
        { component: Code, content: "$  ./punch" },
        { component: Paragraph, content: "To start a HTTP tunnel on port 80, run this next:" },
        { component: Code, content: "$  ./punch http 80" },
      ]
    },
  ]
}
