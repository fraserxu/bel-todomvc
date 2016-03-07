var bel = require('bel')

var ENTER_KEY = 13

module.exports = function (addTodo) {
  return bel`<header class="header">
    <h1>Things I hate</h1>
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
