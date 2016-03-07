var bel = require('bel')

// onclick=${function () {
//   console.log(`you clicked ${list}`)
// }}

module.exports = function createList (lists) {
  return bel`<ul class="todo-list">
    ${lists.map(function (list) {
      return bel`<li>
        <div class="view">
          <input class="toggle" type="checkbox" />
          <label>${list}</label>
          <button class="destroy"></button>
        </div>
        <input class="edit" />
      </li>`
    })}
  </ul>`
}
