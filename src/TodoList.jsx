import React from 'react'
import TodoListItem from './TodoListItem.jsx'
import PropTypes from 'prop-types'
class TodoList extends React.Component {
  render () {
    const { todos } = this.props
    return (
      <div className="Todo-List">
          {todos.map(todo => <TodoListItem key={todo.id} todo={todo} />)}
      </div>
    )
  }
}

TodoList.propTypes = {
  todos: PropTypes.array
}

export default TodoList
