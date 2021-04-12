import React from 'react'

class TodoItem extends React.Component {
  render () {
    const { id, title, description } = this.props.todo
    return (
        <div>
            <span>{id}</span>
            <span>{title}</span>
            <span>{description}</span>
        </div>
    )
  }
}

export default TodoItem
