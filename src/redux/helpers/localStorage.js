export const setTokens = JWTokens => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('authToken', JSON.stringify(JWTokens))
    return true
  }
  return false
}

export const clearTokens = () => {
  return localStorage.removeItem('authToken')
}

export const getTokens = () => {
  try {
    const JWTokens = JSON.parse(localStorage.getItem('authToken')) || undefined
    return JWTokens
  } catch (err) {
    return undefined
  }
}
