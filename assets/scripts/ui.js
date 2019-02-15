'use strict'

const resizeBoardSquare = () => {
  const width = $('.board-square').width()
  $('.board-square').css('height', width + 'px')
}

module.exports = {
  resizeBoardSquare
}
