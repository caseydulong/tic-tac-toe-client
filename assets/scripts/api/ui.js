'use strict'

const store = require('../store.js')
const boardRefresh = require('../game/boardRefresh.js')

const errorMessage = () => {
  $('#api-form-feedback').text('Something went wrong')
}

const indexSuccess = responseData => {
  $('#api-form-feedback').text('Index success')
}

const showSuccess = responseData => {
  $('#api-form-feedback').text(`Game ${responseData.game.id} retrieved`)
  store.game = responseData.game
  boardRefresh.boardRefresh()
}

const createSuccess = responseData => {
  $('#api-form-feedback').text('New game started')
  store.game = responseData.game
  boardRefresh.boardRefresh()
}

const updateSuccess = responseData => {}

module.exports = {
  errorMessage,
  indexSuccess,
  createSuccess,
  updateSuccess,
  showSuccess
}
