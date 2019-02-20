'use strict'

const store = require('../store.js')
const gameUi = require('./ui.js')

const boardRefresh = () => {
  store.gameOver = store.game.over
  store.playerTurn = playerCheck(store.game.cells)
  store.boardState = store.game.cells
  for (const i in store.boardState) {
    $(`#grid-${i}`).text(store.game.cells[i].toUpperCase())
  }
  gameUi.playerTurn('X player\'s turn')
  gameUi.resizeBoardSquare()
}

const playerCheck = boardState => {
  let xCount = 0
  let oCount = 0
  for (const i in boardState) {
    if (boardState[i] === 'x') {
      xCount++
    } else if (boardState[i] === 'o') {
      oCount++
    }
  }
  if (xCount === oCount) {
    return 'x'
  } else {
    return 'o'
  }
}

module.exports = {
  boardRefresh
}
