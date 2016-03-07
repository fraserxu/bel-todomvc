var bel = require('bel')

var store = require('./store')

var ENTER_KEY = 13

function addTodo (newTodo) {
  store({
    type: 'ADD_TODO',
    payload: newTodo
  })
}

module.exports = function () {
  return bel`<header class="header">
    <h1>todos</h1>
    <input class="new-todo" placeholder="What needs to be done?" onkeydown=${function (e) {
      if (e.keyCode === ENTER_KEY) {
        e.preventDefault()
        var val = e.target.value.trim()
        if (val) {
          addTodo(val)
        }
      }
    }} autofocus />
  </header>`
}
