var createStore = require('store-emitter')

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
  } else if (action.type === 'DESTROY_TODO') {
    state.todos = state.todos.filter(function (candidate) {
      return candidate !== action.payload
    })
    return state
  }
}

var store = createStore(modifier, initialState)

module.exports = store
