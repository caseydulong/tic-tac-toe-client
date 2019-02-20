'use strict'

const api = require('./api.js')
const ui = require('./ui.js')
const getFormFields = require('../../../lib/get-form-fields.js')
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

const onIndex = event => {
  event.preventDefault()

  api.index()
    .then(ui.indexSuccess)
    .catch(ui.errorMessage)
}

const onShow = event => {
  event.preventDefault()

  const data = getFormFields(event.target)

  api.show(data.id)
    .then(ui.showSuccess)
    .catch(ui.errorMessage)
}

const onCreate = event => {
  event.preventDefault()

  api.create()
    .then(ui.createSuccess)
    .catch(ui.errorMessage)
}

// This function does not go in eventHandlers()
// It is instead triggered by the game logic when a legal move is played
const onUpdate = (boardSquare, playerTurn, gameOver) => {
  api.update(boardSquare, playerTurn, gameOver)
    .then(ui.updateSuccess)
    .catch(ui.errorMessage)
}

const statsDone = () => {
  hideAll()
  $('main').fadeIn(500)
  gameUi.resizeBoardSquare()
}

const eventHandlers = () => {
  $('#show-stats-button').on('click', onIndex)
  $('#create-game-button').on('click', onCreate)
  $('#new-game-temp-button').on('click', onCreate)
  $('#get-game-form').on('submit', onShow)
  $('#stats-done').on('click', statsDone)
}

module.exports = {
  eventHandlers,
  onUpdate
}
