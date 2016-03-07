var bel = require('bel')

var store = require('./store')

function destroyTodo (todo) {
  store({
    type: 'DESTROY_TODO',
    payload: todo
  })
}

// onclick=${function () {
//   console.log(`you clicked ${list}`)
// }}

module.exports = function createList (todos) {
  return bel`<ul class="todo-list">
    ${todos.map(function (todo) {
      return bel`<li>
        <div class="view">
          <input class="toggle" type="checkbox" />
          <label>${todo}</label>
          <button class="destroy" onclick=${function () {
            destroyTodo(todo)
          }}></button>
        </div>
        <input class="edit" />
      </li>`
    })}
  </ul>`
}
