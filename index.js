var bel = require('bel')
var createStore = require('store-emitter')

var Header = require('./header')
var Footer = require('./footer')
var TodoList = require('./todoList')

var initialState = {
  todos: [
    'grizzly',
    'polar',
    'brown'
  ]
}

function modifier (action, state) {
  if (action.type === 'ADD_TODO') {
    state.todos.push(action.payload)
    return state
  }
}

var store = createStore(modifier, initialState)

function addTodo (newTodo) {
  store({
    type: 'ADD_TODO',
    payload: newTodo
  })
}

store.on('*', function (action, state, oldState) {
  app.update(render(state))
})

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

var app = render(initialState)

document.querySelector('main').appendChild(app)
