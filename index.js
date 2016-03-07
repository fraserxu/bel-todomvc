var bel = require('bel')

var store = require('./store')
var Header = require('./header')
var Footer = require('./footer')
var TodoList = require('./todoList')

function toggleAll () {
  store({
    type: 'TOGGLE_ALL'
  })
}

function render (state) {
  return bel`<section class="todoapp">
    ${Header()}
    <section class="main">
      <input class="toggle-all" type="checkbox" onchange=${function () {
        toggleAll()
      }}/>
      ${TodoList()}
    </section>
    ${Footer()}
  </section>`
}

var app = render(store.initialState())

store.on('*', function (action, state, oldState) {
  app.update(render(state))
})

document.querySelector('main').appendChild(app)
