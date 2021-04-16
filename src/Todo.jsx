import React from 'react'
import TodoList from './TodoList.jsx'
import TodoForm from './TodoForm.jsx'

class Todo extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      todos: [],
      completedTodos: [],
      filter: '진행중',
      isUpdating: false,
      updatingTodo: null
    }
    this.setFilter = this.setFilter.bind(this)
    this.createTodo = this.createTodo.bind(this)
    this.updateTodo = this.updateTodo.bind(this)
    this.updateEndTodo = this.updateEndTodo.bind(this)
    this.deleteTodo = this.deleteTodo.bind(this)
    this.completeTodo = this.completeTodo.bind(this)
  }

  setFilter (event) {
    this.setState({
      filter: event.target.dataset.filter
    })
  }

  createTodo (todo) {
    this.setState((prevState) => ({
      todos: [...prevState.todos, todo]
    }))
  }

  updateTodo (updatingTodo) {
    this.setState({
      isUpdating: true,
      updatingTodo
    })
  }

  updateEndTodo (updatingTodo) {
    this.setState((prevState) => ({
      todos: prevState.todos.map(todo => {
        if (todo.id === updatingTodo.id) {
          return Object.assign({}, todo, updatingTodo)
        }
        return todo
      }),
      isUpdating: false
    }))
  }

  deleteTodo (deletingTodo) {
    const targetTodos = this.state.filter === '진행중' ? 'todos' : 'completedTodos'
    this.setState((prevState) => ({
      [targetTodos]: prevState[targetTodos].filter(todo => todo !== deletingTodo)
    }))
  }

  completeTodo (completedTodo) {
    this.setState((prevState) => ({
      todos: prevState.todos.filter(todo => todo !== completedTodo),
      completedTodos: [...prevState.completedTodos, completedTodo]
    }))
  }

  render () {
    const { todos, completedTodos, filter, isUpdating, updatingTodo } = this.state
    return (
      <>
        <TodoForm
          createTodo={this.createTodo}
          isUpdating={isUpdating}
          updatingTodo={updatingTodo}
          updateEndTodo={this.updateEndTodo}
        />
        <div className="Todo-Filter" onClick={this.setFilter}>
          <button
            className={`Todo-Filter__Button Todo-Interface-Button ${filter === '진행중' ? '--Filter-Selected' : ''}`}
            data-filter='진행중'
          >
            진행중
          </button>
          <button
            className={`Todo-Filter__Button Todo-Interface-Button ${filter === '완료' ? '--Filter-Selected' : ''}`}
            data-filter='완료'
          >
            완료
          </button>
        </div>
        <TodoList
          todos={filter === '진행중' ? todos : completedTodos}
          filter={filter}
          updateTodo={this.updateTodo}
          deleteTodo={this.deleteTodo}
          completeTodo={this.completeTodo}
        />
      </>
    )
  }
}

export default Todo
