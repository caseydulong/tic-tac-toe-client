'use strict'

const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')
const gameUi = require('../game/ui.js')

const hideAll = () => {
  $('#sign-in-form').hide()
  $('#sign-up-form').hide()
  $('#change-password-form').hide()
  $('#auth-forms').hide()
  $('main').hide()
  $('#new-game-temp').hide()
  $('#stats').hide()
}

const onSignUp = event => {
  event.preventDefault()

  const formData = getFormFields(event.target)

  api.signUp(formData)
    .then(ui.signUpSuccess)
    .catch(ui.failureMessage)
}

const onSignIn = event => {
  event.preventDefault()

  const formData = getFormFields(event.target)

  api.signIn(formData)
    .then(ui.signInSuccess)
    .catch(ui.failureMessage)
}

const onChangePassword = event => {
  event.preventDefault()

  const formData = getFormFields(event.target)

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

const changePasswordShow = () => {
  hideAll()
  $('#change-password-form').show()
  $('#auth-forms').fadeIn(500)
}

const changePasswordHide = () => {
  $('#change-password-form').trigger('reset')
  hideAll()
  $('main').fadeIn(500)
  gameUi.resizeBoardSquare()
}

const signUpShow = () => {
  $('#sign-in-form').hide()
  $('#sign-up-form').fadeIn(500)
}

const signInShow = () => {
  $('#sign-up-form').hide()
  $('#sign-in-form').fadeIn(500)
}

const eventHandlers = () => {
  $('#sign-up-form').on('submit', onSignUp)
  $('#sign-in-form').on('submit', onSignIn)
  $('#sign-out-button').on('click', onSignOut)
  $('.sign-up-toggle').on('click', signUpShow)
  $('.sign-in-toggle').on('click', signInShow)
  $('#change-password-submit').on('click', onChangePassword)
  $('#change-password-button').on('click', changePasswordShow)
  $('#change-password-cancel').on('click', changePasswordHide)
}

module.exports = {
  eventHandlers
}
