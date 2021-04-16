import React from 'react'
import PropTypes from 'prop-types'
import { generateId } from './util'
class TodoForm extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      title: '',
      description: '',
      startTime: '',
      endTime: ''
    }
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleTodoSubmit = this.handleTodoSubmit.bind(this)
    this.validateTodoForm = this.validateTodoForm.bind(this)
  }

  componentDidUpdate (prevProps) {
    if (this.props.updatingTodo !== prevProps.updatingTodo) {
      const { title, description, startTime, endTime } = this.props.updatingTodo
      this.setState({ title, description, startTime, endTime })
    }
  }

  handleInputChange (event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleTodoSubmit () {
    const { createTodo, isUpdating, updateEndTodo, updatingTodo } = this.props
    const { isSubmitable, error } = this.validateTodoForm()
    if (isSubmitable) {
      if (isUpdating) {
        updateEndTodo({ id: updatingTodo.id, ...this.state })
      } else {
        createTodo({ id: generateId(), ...this.state })
      }

      this.setState({
        title: '',
        description: '',
        startTime: '',
        endTime: ''
      })
    } else {
      alert(error)
    }
  }

  validateTodoForm () {
    const { title, startTime } = this.state
    if (!title || !startTime) {
      return { isSubmitable: false, error: '제목과 시작일자는 반드시 입력되어야 합니다.' }
    }
    return { isSubmitable: true, error: '' }
  }

  render () {
    const { isUpdating } = this.props
    const { title, description, startTime, endTime } = this.state
    return (
      <div className="Todo-Creator">
          <button className="Todo-Creator__Button Todo-Interface-Button" onClick={this.handleTodoSubmit}>투두 {isUpdating ? '수정' : '생성'}</button>
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
