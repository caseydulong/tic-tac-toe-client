'use strict'

const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')

const onSignUp = event => {
  event.preventDefault()

  const formData = getFormFields(event.target)
  console.log(formData)

  api.signUp(formData)
    .then(ui.signUpSuccess)
    .catch(ui.failureMessage)
}

const onSignIn = event => {
  event.preventDefault()

  const formData = getFormFields(event.target)
  console.log(formData)

  api.signIn(formData)
    .then(ui.signInSuccess)
    .catch(ui.failureMessage)
}

const onChangePassword = event => {
  event.preventDefault()

  const formData = getFormFields(event.target)
  console.log(formData)

  api.changePassword(formData)
    .then(ui.changePasswordSuccess)
    .catch(ui.failureMessage)
}

const onSignOut = event => {
  event.preventDefault()

  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.failureMessage)
}

const eventHandlers = () => {
  $('#sign-up-form').on('submit', onSignUp)
  $('#sign-in-form').on('submit', onSignIn)
  $('#change-password-form').on('submit', onChangePassword)
  $('#sign-out-form').on('submit', onSignOut)
}

module.exports = {
  eventHandlers
}
