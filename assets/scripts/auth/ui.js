'use strict'

const store = require('../store.js')

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
  $('#user-feedback').text('Create a new game to begin playing')
  store.user = responseData.user
  $('#sign-in-form').trigger('reset')
  hideAll()
  $('#new-game-temp').fadeIn(500)
  $('#dropdown-menu').fadeIn(500)
}

const changePasswordSuccess = () => {
  userFeedback('Change password successful')
  $('#change-password-form').trigger('reset')
  hideAll()
  $('main').fadeIn(500)
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
