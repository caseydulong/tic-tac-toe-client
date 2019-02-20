'use strict'

const resizeBoardSquare = () => {
  const width = $('.board-square').width()
  $('.board-square').css('height', width + 'px')
}

const playerTurn = message => {
  $('#player-turn').text(message)
}

const userFeedback = message => {
  $('#user-feedback').text(message)
  $('#user-feedback').show()
  setTimeout(() => $('#user-feedback').fadeOut(500), 2500)
}

module.exports = {
  resizeBoardSquare,
  userFeedback,
  playerTurn
}
