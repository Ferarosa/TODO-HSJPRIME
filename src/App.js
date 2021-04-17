import React from 'react'
import Todo from './Todo.jsx'
import { setNextId, STORAGE_NAME } from './util'
class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      storedTodos: null
    }
  }

  componentDidMount () {
    let storedTodos
    if ('localStorage' in window) {
      storedTodos = JSON.parse(window.localStorage.getItem(STORAGE_NAME)) || []
      if (storedTodos.length > 0) {
        setNextId(Math.max.apply(null, storedTodos.map(storedTodo => storedTodo.id)))
      }
    }
    this.setState({ storedTodos })
  }

  render () {
    const { storedTodos } = this.state
    return (
      <div className="App">
        {
          storedTodos ? <Todo storedTodos={storedTodos} /> : null
        }
      </div>
    )
  }
}

export default App
