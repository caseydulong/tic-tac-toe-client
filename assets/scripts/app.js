'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

const gameEvents = require('./game/events.js')
const authEvents = require('./auth/events.js')
const apiEvents = require('./api/events.js')

const hideAll = () => {
  $('#sign-in-form').hide()
  $('#sign-up-form').hide()
  $('#change-password-form').hide()
  $('#auth-forms').hide()
  $('main').hide()
  $('#new-game-temp').hide()
  $('#stats').hide()
}

$(() => {
  hideAll()
  $('#dropdown-menu').hide()
  $('#auth-forms').show()
  $('#sign-in-form').show()
  gameEvents.eventHandlers()
  authEvents.eventHandlers()
  apiEvents.eventHandlers()
  $('#cover').fadeOut(1000)
})
