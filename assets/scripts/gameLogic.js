'use strict'

const initialBoardState = ['', '', '', '', '', '', '', '', '']
const boardState = initialBoardState
let playerTurn = 'X'

const legalMoveCheck = event => {
  const boardSquare = event.target
  console.log(event.target.getAttribute('data-type'))
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
  // checkWinCondition()
}

module.exports = {
  legalMoveCheck
}
