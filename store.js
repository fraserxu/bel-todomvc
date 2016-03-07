var createStore = require('store-emitter')

var initialState = {
  todos: [
    {
      title: 'grizzly',
      completed: false
    },
    {
      title: 'polar',
      completed: false
    },
    {
      title: 'brown',
      completed: false
    }
  ]
}

function modifier (action, state) {
  if (action.type === 'ADD_TODO') {
    state.todos.push({
      title: action.payload,
      completed: false
    })
    return state
  } else if (action.type === 'DESTROY_TODO') {
    state.todos = state.todos.filter(function (candidate) {
      return candidate.title !== action.payload.title
    })
    return state
  } else if (action.type === 'TOGGLE_TODO') {
    state.todos = state.todos.map(function (candidate) {
      return candidate.title !== action.payload.title ? candidate : {
        title: candidate.title,
        completed: !candidate.completed
      }
    })
    return state
  } else if (action.type === 'TOGGLE_ALL') {
    state.todos = state.todos.map(function (candidate) {
      return  {
        title: candidate.title,
        completed: true
      }
    })
    return state
  }
}

var store = createStore(modifier, initialState)

module.exports = store
