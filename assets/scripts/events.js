'use strict'

const gameLogic = require('./gameLogic.js')

const eventHandlers = () => {
  $('.board-square').on('click', gameLogic.legalMoveCheck)
}

module.exports = {
  eventHandlers
}
