'use strict'

const initialBoardState = ['', '', '', '', '', '', '', '', '']
const boardState = initialBoardState
let playerTurn = 'X'

const legalMoveCheck = event => {
  const boardSquare = event.target
  if ($(`#${boardSquare.id}`).text()) {
    $('#user-feedback').text('That is not a legal move.')
    setTimeout(() => $('#user-feedback').text(''), 3000)
  } else {
    playMove(boardSquare)
  }
}

const playMove = boardSquare => {
  if (playerTurn === 'X') {
    $(`#${boardSquare.id}`).text(playerTurn)
    updateBoardState(boardSquare, playerTurn)
    playerTurn = 'O'
  } else if (playerTurn === 'O') {
    $(`#${boardSquare.id}`).text(playerTurn)
    updateBoardState(boardSquare, playerTurn)
    playerTurn = 'X'
  }
}

const updateBoardState = (boardSquare, player) => {
  boardState[boardSquare.getAttribute('data-type')] = player
  console.log(boardState)
  checkGameOver()
}

const checkGameOver = () => {
  if (checkWinCondition()) {
    console.log('You win!')
  } else if (boardState.every(index => index !== '')) {
    // If every board position is full, and no win condidtino is met, draw
    console.log('DRAW')
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
