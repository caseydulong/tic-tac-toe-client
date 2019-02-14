'use strict'

let playerTurn = 1

const playMove = boardSquare => {
  if (playerTurn === 1) {
    $(`#${boardSquare}`).text('X')
    playerTurn = 2
  } else if (playerTurn === 2) {
    $(`#${boardSquare}`).text('O')
    playerTurn = 1
  }
}

const legalMoveCheck = event => {
  const boardSquare = event.target.id
  if ($(`#${boardSquare}`).text()) {
    $('#user-feedback').text('That is not a legal move.')
  } else {
    playMove(boardSquare)
  }
}

module.exports = {
  legalMoveCheck
}
