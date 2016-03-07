var bel = require('bel')

module.exports = function (items) {
  return bel`<header class="header">
    <h1>todos</h1>
    <input class="new-todo" placeholder="What needs to be done?" autofocus onchange=${function () {
      console.log('on input change...')
    }} />
  </header>`
}
