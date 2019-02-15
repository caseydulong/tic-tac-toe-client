'use strict'

const gameLogic = require('./gameLogic.js')
const ui = require('./ui.js')

const eventHandlers = () => {
  ui.resizeBoardSquare()
  $('.board-square').on('click', gameLogic.legalMoveCheck)
  $(window).on('resize', ui.resizeBoardSquare)
}

module.exports = {
  eventHandlers
}
