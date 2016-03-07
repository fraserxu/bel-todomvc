var bel = require('bel')

var store = require('./store')
var Header = require('./header')
var Footer = require('./footer')
var TodoList = require('./todoList')

function addTodo (newTodo) {
  store({
    type: 'ADD_TODO',
    payload: newTodo
  })
}

function render (state) {
  return bel`<section class="todoapp">
    ${Header(addTodo)}
    <section class="main">
      <input class="toggle-all" type="checkbox" />
      ${TodoList(state.todos)}
    </section>
    ${Footer()}
  </section>`
}

var app = render(store.initialState())

store.on('*', function (action, state, oldState) {
  console.log('app', app)
  app.update(render(state))
})

document.querySelector('main').appendChild(app)
