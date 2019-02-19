'use strict'

const api = require('./api.js')
const ui = require('./ui.js')
const getFormFields = require('../../../lib/get-form-fields.js')

const onIndex = () => {
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

const onCreate = () => {
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

const eventHandlers = () => {
  $('#get-games-form').on('submit', onIndex)
  $('#create-game-form').on('submit', onCreate)
  $('#get-game-form').on('submit', onShow)
}

module.exports = {
  eventHandlers,
  onUpdate
}
