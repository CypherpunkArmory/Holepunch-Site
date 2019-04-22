const origin =
  process.env.NODE_ENV === 'development' ? 'http://localhost:5000/' : 'https://api.holepunch.io/'

export default {
  // Accounts
  emailLogin: `${origin}login`,
  logout: `${origin}logout`,
  register: `${origin}user`,
  resetPassword: `${origin}reset_password`,
  updateUser: `${origin}app/user`,
}
