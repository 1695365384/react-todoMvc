import React from 'react'
import {connect} from 'react-redux'
import {addTodo} from '../reducers/action'
class Headers extends React.Component {
  state = {
    content: '',
  }

  newTodo = e => {
    this.setState({
      content: e.target.value,
    })
  }

  commit = e => {
    if (e.keyCode === 13 && this.state.content !== '') {
      this.props.dispatch(addTodo(this.state.content))
      this.setState({
        content: '',
      })
    }
  }
  render() {
    return (
      <header className="header">
        <h1>todos</h1>
        <input
          className="new-todo"
          placeholder="What needs to be done?"
          autoFocus
          value={this.state.content}
          onChange={this.newTodo}
          onKeyDown={this.commit}
        />
      </header>
    )
  }
}

Headers = connect()(Headers)

export default Headers
