'use strict'

const store = require('../store.js')
const gameUi = require('../game/ui.js')
const apiApi = require('../api/api.js')
const apiUi = require('../api/ui.js')

const hideAll = () => {
  $('#sign-in-form').hide()
  $('#sign-up-form').hide()
  $('#change-password-form').hide()
  $('#auth-forms').hide()
  $('main').hide()
  $('#new-game-temp').hide()
  $('#stats').hide()
}

const userFeedback = message => {
  $('#user-feedback').text(message)
  $('#user-feedback').show()
  setTimeout(() => $('#user-feedback').fadeOut(500), 2500)
}

const failureMessage = () => {
  userFeedback('Something went wrong')
}

const signUpSuccess = () => {
  userFeedback('Sign up successful')
  $('#sign-up-form').trigger('reset')
  $('#sign-up-form').hide()
  $('#sign-in-form').fadeIn(500)
}

const signInSuccess = responseData => {
  store.user = responseData.user
  $('#sign-in-form').trigger('reset')
  $('#dropdown-menu').fadeIn(500)
  apiApi.create()
    .then(apiUi.createSuccess)
    .catch(failureMessage)
}

const changePasswordSuccess = () => {
  userFeedback('Change password successful')
  $('#change-password-form').trigger('reset')
  hideAll()
  $('main').fadeIn(500)
  gameUi.resizeBoardSquare()
}

const signOutSuccess = () => {
  userFeedback('Sign out successful')
  store.user = null
  $('#dropdown-menu').hide()
  hideAll()
  $('#sign-in-form').fadeIn(500)
  $('#auth-forms').fadeIn(500)
}

module.exports = {
  failureMessage,
  signUpSuccess,
  signInSuccess,
  changePasswordSuccess,
  signOutSuccess
}
