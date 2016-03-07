var bel = require('bel')

module.exports = function (items) {
  return bel`<footer class="footer">
    <span class="todo-count">
      <strong></strong>
    </span>
    <ul class="filters">
      <li><a href="#/"></a>All</li>
      <li><a href="#/"></a>Active</li>
      <li><a href="#/"></a>Completed</li>
    </ul>
  </footer>`
}
