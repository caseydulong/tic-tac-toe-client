'use strict'

const store = require('../store.js')
const boardRefresh = require('../game/boardRefresh.js')

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

const errorMessage = () => {
  userFeedback('Something went wrong')
}

const indexSuccess = responseData => {
  hideAll()
  $('#games-played').text(`Games played: ${responseData.games.length}`)
  $('#stats').fadeIn(500)
}

const showSuccess = responseData => {
  userFeedback(`Game ${responseData.game.id} retrieved`)
  store.game = responseData.game
  boardRefresh.boardRefresh()
}

const createSuccess = responseData => {
  userFeedback('New game started')
  hideAll()
  $('main').fadeIn(500)
  store.game = responseData.game
  boardRefresh.boardRefresh()
  console.log('create success')
}

const updateSuccess = responseData => {}

module.exports = {
  errorMessage,
  indexSuccess,
  createSuccess,
  updateSuccess,
  showSuccess
}
