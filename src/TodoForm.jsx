import React from 'react'
import PropTypes from 'prop-types'
import { getCurrentDateTime } from './util'
class TodoForm extends React.Component {
  constructor (props) {
    super(props)
    this.id = 0
    this.state = {
      title: '',
      description: '',
      startTime: getCurrentDateTime(),
      endTime: ''
    }
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleTodoSubmit = this.handleTodoSubmit.bind(this)
  }

  handleInputChange (event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleTodoSubmit () {
    const { createTodo } = this.props
    if (this.state.title.length > 0) {
      createTodo({ id: this.id++, ...this.state })
      this.setState({
        title: '',
        description: '',
        startTime: '',
        endTime: ''
      })
    } else {
      alert('제목은 반드시 입력되어야 합니다.')
    }
  }

  render () {
    const { title, description, startTime, endTime } = this.state
    return (
      <div className="Todo-Creator">
          <button className="Todo-Creator__Button" onClick={this.handleTodoSubmit}>투두 생성</button>
          <div className="Todo-Creator__Form">
              <div className="Todo-Creator__Form__Row">
                  <label htmlFor="title">제목
                    <input
                        id="title"
                        name="title"
                        type="text"
                        value={title}
                        onChange={this.handleInputChange}
                    />
                  </label>
              </div>
              <div className="Todo-Creator__Form__Row">
                  <label htmlFor="description">설명
                    <input
                        id="description"
                        name="description"
                        type="text"
                        value={description}
                        onChange={this.handleInputChange}
                    />
                  </label>
              </div>
              <div className="Todo-Creator__Form__Row">
                  <label htmlFor="startTime">시작 일자
                    <input
                      id="startTime"
                      name="startTime"
                      type="date"
                      value={startTime}
                      onChange={this.handleInputChange}
                    />
                  </label>
              </div>
              <div className="Todo-Creator__Form__Row">
                  <label htmlFor="endTime">종료 일자
                    <input
                      id="endTime"
                      name="endTime"
                      type="date"
                      value={endTime}
                      onChange={this.handleInputChange}
                    />
                  </label>
              </div>
          </div>
      </div>
    )
  }
}

TodoForm.propTypes = {
  createTodo: PropTypes.func,
  updateTodo: PropTypes.func
}

export default TodoForm
