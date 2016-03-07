var bel = require('bel')

var Header = require('./header')
var Footer = require('./footer')
var TodoList = require('./todoList')

var todos = [
  'grizzly',
  'polar',
  'brown'
]

function createApp () {
  return bel`<section class="todoapp">
    ${Header()}
    <section class="main">
      <input class="toggle-all" type="checkbox" />
      ${TodoList(todos)}
    </section>
    ${Footer()}
  </section>`
}

var app = createApp()

document.querySelector('main').appendChild(app)
