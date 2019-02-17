'use strict'

const resizeBoardSquare = () => {
  const width = $('.board-square').width()
  $('.board-square').css('height', width + 'px')
}

const userFeedback = (text) => {
  $('#game-feedback').text(text)
  // setTimeout(() => $('#game-feedback').text(''), 3000)
}

module.exports = {
  resizeBoardSquare,
  userFeedback
}
