var bel = require('bel')

var store = require('./store')

function destroyTodo (todo) {
  store({
    type: 'DESTROY_TODO',
    payload: todo
  })
}

function toggleTodo (todo) {
  store({
    type: 'TOGGLE_TODO',
    payload: todo
  })
}

module.exports = function createList () {
  var todos = store.getState().todos
  return bel`<ul class="todo-list">
    ${todos.map(function (todo) {
      return bel`<li class=${todo.completed ? 'completed' : ''}>
        <div class="view">
          <input class="toggle" type="checkbox" checked=${todo.completed} onchange=${function () {
            toggleTodo(todo)
          }} />
          <label>${todo.title}</label>
          <button class="destroy" onclick=${function () {
            destroyTodo(todo)
          }}></button>
        </div>
      </li>`
    })}
  </ul>`
}
