import React from 'react'

class TodoCreator extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      title: '',
      description: ''
    }
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleTodoSubmit = this.handleTodoSubmit.bind(this)
  }

  handleInputChange (event, stateKey) {
    this.setState({
      [stateKey]: event.target.value
    })
  }

  handleTodoSubmit () {
    const { createTodo } = this.props
    const { title, description } = this.state
    if (title.length > 0) {
      createTodo({ title, description })
      this.setState({
        title: '',
        description: ''
      })
    } else {
      alert('제목은 반드시 입력되어야 합니다.')
    }
  }

  render () {
    const { title, description } = this.state
    return (
        <div className="Todo-Creator">
            <button className="Todo-Creator__Button" onClick={this.handleTodoSubmit}>투두 생성</button>
            <div className="Todo-Creator__Form">
                <div className="Todo-Creator__Form__Row">
                    <span>제목</span>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => { this.handleInputChange(e, 'title') }}
                    />
                </div>
                <div className="Todo-Creator__Form__Row">
                    <span>설명</span>
                    <input
                        type="text"
                        value={description}
                        onChange={(e) => { this.handleInputChange(e, 'description') }}
                    />
                </div>
            </div>
        </div>
    )
  }
}

export default TodoCreator
