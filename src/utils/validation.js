import { isEmail } from 'validator'
import { isEmpty } from 'lodash'

export const validateInput = data => {
  let errors = {}

  if (isEmpty(data.email)) {
    errors.email = 'This field is required'
  }
  if (!isEmail(data.email, { domain_specific_validation: true })) {
    errors.email = 'Email is invalid'
  }

  if (isEmpty(data.password)) {
    errors.password = 'This field is required'
  }

  return {
    errors,
    isValid: isEmpty(errors),
  }
}

export const validateEmail = data => {
  let errors = {}

  if (isEmpty(data.email)) {
    errors.email = 'This field is required'
  }
  if (!isEmail(data.email, { domain_specific_validation: true })) {
    errors.email = 'Email is invalid'
  }

  return {
    errors,
    isValid: isEmpty(errors),
  }
}

export const validatePassword = data => {
  let errors = {}

  if (!data.oldPassword && isEmpty(data.oldPassword)) {
    errors.oldPassword = 'This field is required'
  }

  if (!data.newPassword && isEmpty(data.newPassword)) {
    errors.newPassword = 'This field is required'
  }

  return {
    errors,
    isValid: isEmpty(errors),
  }
}
