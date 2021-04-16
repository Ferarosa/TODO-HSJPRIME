import React from 'react'
import PropTypes from 'prop-types'
class TodoListItem extends React.Component {
  render () {
    const { todo, filter, updateTodo, deleteTodo, completeTodo } = this.props
    const { id, title, description, startTime, endTime } = todo
    return (
        <div className="Todo-Item">
          <span className="Todo-Item__Id">#.{id}</span>
          <div className="Todo-Item__Info">
            <h3 className="Info-Item Todo-Item__Info__Title" title={title}>
              <span className="--Text-Highlight --Text-Ellipsis">{title}</span>
            </h3>
            <p className="Info-Item Todo-Item__Info__Description">{description}</p>
            {
              startTime
                ? (
                    <div className="Info-Item">
                      <span className="Info-Item-Date">{startTime}</span>
                      {
                        endTime ? <span className="Info-Item-Date Date-End">{endTime}</span> : null
                      }
                    </div>
                  )
                : null
            }
          </div>
          <div className="Todo-Item__Status">
            <button className="Todo-Item__Status__Button Todo-Interface-Button Todo-Interface-Button--Delete" onClick={deleteTodo.bind(null, todo)}>삭제</button>
            {
              filter === '진행중'
                ? (
                  <>
                    <button className="Todo-Item__Status__Button Todo-Interface-Button" onClick={updateTodo.bind(null, todo)}>수정</button>
                    <button className="Todo-Item__Status__Button Todo-Interface-Button" onClick={completeTodo.bind(null, todo)}>완료</button>
                  </>
                  )
                : null
            }
          </div>
        </div>
    )
  }
}

TodoListItem.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    description: PropTypes.string,
    startTime: PropTypes.string,
    endTime: PropTypes.string
  })
}
export default TodoListItem
