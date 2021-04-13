import React from 'react'
import PropTypes from 'prop-types'
class TodoListItem extends React.Component {
  render () {
    const { id, title, description, startTime, endTime } = this.props.todo
    return (
        <div className="Todo-Item">
          <span className="Todo-Item__Id">#.{id}</span>
          <div className="Todo-Item__Info">
            <h3 className="Todo-Item__Info__Title">
              <span className="--Text-Highlight">{title}</span>
            </h3>
            <span className="Todo-Item__Info__Description">{description}</span>
            <span>{startTime}</span>
            <span>{endTime}</span>
          </div>
          <div className="Todo-Item__Status">

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
