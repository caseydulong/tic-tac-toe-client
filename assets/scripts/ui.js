'use strict'

const resizeBoardSquare = () => {
  const width = $('.board-square').width()
  $('.board-square').css('height', width + 'px')
}

const userFeedback = (text) => {
  $('#user-feedback').text(text)
  // setTimeout(() => $('#user-feedback').text(''), 3000)
}

module.exports = {
  resizeBoardSquare,
  userFeedback
}
