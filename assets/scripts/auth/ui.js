'use strict'

const store = require('../store.js')

const failureMessage = () => {
  $('#auth-form-feedback').text('Something went wrong')
}

const signUpSuccess = () => {
  $('#auth-form-feedback').text('Sign up successful')
  $('#sign-up-form').trigger('reset')
}

const signInSuccess = responseData => {
  $('#auth-form-feedback').text('Sign in successful')
  store.user = responseData.user
  $('#sign-in-form').trigger('reset')
}

const changePasswordSuccess = () => {
  $('#auth-form-feedback').text('Change password successful')
  $('#change-password-form').trigger('reset')
}

const signOutSuccess = () => {
  $('#auth-form-feedback').text('Sign out successful')
  store.user = null
}

module.exports = {
  failureMessage,
  signUpSuccess,
  signInSuccess,
  changePasswordSuccess,
  signOutSuccess
}
