var bel = require('bel')

var Header = require('./header')
var Footer = require('./footer')
var TodoList = require('./todoList')

var todos = [
  'grizzly',
  'polar',
  'brown'
]

function addTodo (newTodo) {
  todos.push(newTodo)
  app.update(createApp(todos))
}

function createApp (data) {
  return bel`<section class="todoapp">
    ${Header(addTodo)}
    <section class="main">
      <input class="toggle-all" type="checkbox" />
      ${TodoList(data)}
    </section>
    ${Footer()}
  </section>`
}

var app = createApp(todos)

document.querySelector('main').appendChild(app)
