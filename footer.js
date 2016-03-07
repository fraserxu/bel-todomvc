var bel = require('bel')

var store = require('./store')

module.exports = function () {
  var todos = store.getState().todos

  var activeTodoCount = todos.reduce(function (accum, todo) {
    return todo.completed ? accum : accum + 1
  }, 0)

  return bel`<footer class="footer">
    <span class="todo-count">
      <strong>${activeTodoCount}</strong> item left
    </span>
    <ul class="filters">
      <li><a href="#/">All</a></li>
      <li><a href="#/">Active</a></li>
      <li><a href="#/">Completed</a></li>
    </ul>
  </footer>`
}
