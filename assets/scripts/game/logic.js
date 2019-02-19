'use strict'

const gameUi = require('./ui.js')
const store = require('../store.js')
const apiEvents = require('../api/events.js')

store.boardState = ['', '', '', '', '', '', '', '', '']

const updateBoard = () => {
  for (const i in store.boardState) {
    $(`#grid-${i}`).text(store.boardState[i].toUpperCase())
  }
}

const legalMoveCheck = event => {
  const boardSquare = event.target
  if (store.gameOver === true) {
    gameUi.userFeedback('The game is over.')
  } else if ($(`#${boardSquare.id}`).text()) {
    gameUi.userFeedback('That is not a legal move.')
  } else {
    // Update local boardState
    store.boardState[boardSquare.getAttribute('data-id')] = store.playerTurn
    // Update board UI
    updateBoard()
    // Check if game is over
    checkGameOver(boardSquare)
  }
}

const checkGameOver = boardSquare => {
  if (checkWinCondition()) {
    store.gameOver = true
    gameUi.userFeedback(`Game over: ${store.playerTurn} wins!`)
    apiEvents.onUpdate(boardSquare.getAttribute('data-id'), store.playerTurn.toLowerCase(), store.gameOver)
  } else if (store.boardState.every(index => index !== '')) {
    // If every board position is full, and no win condidtino is met, draw
    store.gameOver = true
    gameUi.userFeedback('Game over: draw.')
    apiEvents.onUpdate(boardSquare.getAttribute('data-id'), store.playerTurn.toLowerCase(), store.gameOver)
  } else {
    apiEvents.onUpdate(boardSquare.getAttribute('data-id'), store.playerTurn.toLowerCase(), store.gameOver)
    // Toggle turn
    if (store.playerTurn === 'x') {
      gameUi.userFeedback('O player\'s turn.')
      store.playerTurn = 'o'
    } else if (store.playerTurn === 'o') {
      gameUi.userFeedback('X player\'s turn.')
      store.playerTurn = 'x'
    }
  }
}

const checkWinCondition = () => {
  const b = store.boardState
  const winConditions = [ [ b[0], b[1], b[2] ], [ b[3], b[4], b[5] ], [ b[6], b[7], b[8] ], [ b[0], b[3], b[6] ], [ b[1], b[4], b[7] ], [ b[2], b[5], b[8] ], [ b[0], b[4], b[8] ], [ b[2], b[4], b[6] ] ]
  for (let i = 0; i < winConditions.length; i++) {
    if (winConditions[i][0] !== '' &&
      winConditions[i][0] === winConditions[i][1] &&
      winConditions[i][1] === winConditions[i][2]) {
      return true
    }
  }
  return false
}

module.exports = {
  legalMoveCheck
}
