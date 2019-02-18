'use strict'

const logic = require('./logic.js')
const ui = require('./ui.js')

const eventHandlers = () => {
  ui.userFeedback('Welcome to the game.  X plays first.')
  ui.resizeBoardSquare()
  $('.board-square').on('click', logic.legalMoveCheck)
  $(window).on('resize', ui.resizeBoardSquare)
}

module.exports = {
  eventHandlers
}
