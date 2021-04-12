import React from 'react'
import TodoItem from './TodoItem.jsx'
import TodoCreator from './TodoCreator.jsx'

class Todo extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      todos: [],
      id: 0
    }
    this.createTodo = this.createTodo.bind(this)
    this.updateTodo = this.updateTodo.bind(this)
    this.deleteTodo = this.deleteTodo.bind(this)
  }

  createTodo (todo) {
    const { todos, id } = this.state
    const nextId = (id + 1)
    todo.id = nextId
    this.setState({
      todos: [...todos, todo],
      id: nextId
    })
  }

  updateTodo (payload) {
    const { id, title, description } = payload
    const { todos } = this.state
    const targetTodo = todos.find(todo => todo.id === id)
    targetTodo.title = title
    targetTodo.description = description
    this.setState()
  }

  deleteTodo (id) {
    const { todos } = this.state
    todos.splice(todos.findIndex(todo => todo.id === id), 1)
    this.setState()
  }

  render () {
    const { todos } = this.state
    return (
        <>
            <TodoCreator createTodo={this.createTodo} />
            <div className="Todo-List">
                {
                    todos.map(todo => <TodoItem key={todo.id} todo={todo} />)
                }
            </div>
        </>
    )
  }
}

export default Todo
