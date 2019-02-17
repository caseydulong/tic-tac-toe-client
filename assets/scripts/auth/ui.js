'use strict'

const store = require('../store.js')

const failureMessage = () => {
  $('#form-feedback').text('Something went wrong')
}

const signUpSuccess = () => {
  $('#form-feedback').text('Sign up successful')
  $('#sign-up-form').trigger('reset')
}

const signInSuccess = responseData => {
  $('#form-feedback').text('Sign in successful')
  store.user = responseData.user
  console.log(store.user.token)
  $('#sign-in-form').trigger('reset')
}

const changePasswordSuccess = () => {
  $('#form-feedback').text('Change password successful')
  $('#change-password-form').trigger('reset')
}

const signOutSuccess = () => {
  $('#form-feedback').text('Sign out successful')
  store.user = null
}

module.exports = {
  failureMessage,
  signUpSuccess,
  signInSuccess,
  changePasswordSuccess,
  signOutSuccess
}
