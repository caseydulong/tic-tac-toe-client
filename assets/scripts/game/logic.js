'use strict'

const ui = require('./ui.js')
const initialBoardState = ['', '', '', '', '', '', '', '', '']
const boardState = initialBoardState
let gameInProgress = true
let playerTurn = 'X'

const legalMoveCheck = event => {
  const boardSquare = event.target
  if (gameInProgress === false) {
    ui.userFeedback('The game is over.')
  } else if ($(`#${boardSquare.id}`).text()) {
    ui.userFeedback('That is not a legal move.')
  } else {
    playMove(boardSquare)
  }
}

const playMove = boardSquare => {
  boardState[boardSquare.getAttribute('data-id')] = playerTurn
  updateBoard()
  checkGameOver()
}

const updateBoard = () => {
  for (const i in boardState) {
    $(`#grid-${i}`).text(boardState[i])
  }
}

const checkGameOver = () => {
  if (checkWinCondition()) {
    gameInProgress = false
    ui.userFeedback(`Game over: ${playerTurn} wins!`)
    console.log(`Game over: ${playerTurn} wins!`)
  } else if (boardState.every(index => index !== '')) {
    // If every board position is full, and no win condidtino is met, draw
    gameInProgress = false
    ui.userFeedback('Game over: draw.')
  } else {
    // Toggle turn
    if (playerTurn === 'X') {
      ui.userFeedback('O player\'s turn.')
      playerTurn = 'O'
    } else if (playerTurn === 'O') {
      ui.userFeedback('X player\'s turn.')
      playerTurn = 'X'
    }
  }
}

const checkWinCondition = () => {
  const b = boardState
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
