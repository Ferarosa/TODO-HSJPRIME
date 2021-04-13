import React from 'react'
import TodoList from './TodoList.jsx'
import TodoForm from './TodoForm.jsx'

class Todo extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      todos: []
    }
    this.createTodo = this.createTodo.bind(this)
    this.updateTodo = this.updateTodo.bind(this)
    this.deleteTodo = this.deleteTodo.bind(this)
  }

  createTodo (todo) {
    this.setState((prevState) => ({
      todos: [...prevState.todos, todo]
    }))
  }

  updateTodo (payload) {
    this.setState((prevState) => ({
      todos: prevState.todos.map(todo => {
        if (todo.id === payload.id) {
          todo = payload
        }
        return todo
      })
    }))
  }

  deleteTodo (id) {
    this.setState((prevState) => ({
      todos: prevState.todos.filter(todo => todo.id !== id)
    }))
  }

  render () {
    const { todos } = this.state
    return (
      <>
        <TodoForm createTodo={this.createTodo} />
        <TodoList todos={todos} />
      </>
    )
  }
}

export default Todo
