/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it
import 'prismjs/themes/prism.css'
import wrapWithProvider from './wrap-with-provider'

export const wrapRootElement = wrapWithProvider

const transitionDelay = 300

export const shouldUpdateScroll = ({
  routerProps: { location },
  prevRouterProps,
  getSavedScrollPosition,
}) => {
  const savedPosition = getSavedScrollPosition(location)
  const targetLocation = savedPosition || [0, 0]
  if (prevRouterProps && location.pathname === prevRouterProps.location.pathname) {
    return false
  }
  window.setTimeout(() => window.scrollTo(...targetLocation), transitionDelay)
  if (location.action === 'PUSH') {
    window.setTimeout(() => window.scrollTo(0, 0), transitionDelay)
  } else {
    window.setTimeout(() => window.scrollTo(...targetLocation), transitionDelay)
  }
  return false
}

// // Handles scroll to anchor links.
export const onRouteUpdate = location => {
  if (location.hash) {
    setTimeout(() => {
      document.querySelector(`${location.hash}`).scrollIntoView()
    }, 0)
  }
}
