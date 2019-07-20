import React from 'react'
import {connect} from 'react-redux'
import {delComplate} from '../reducers/action'
class Footer extends React.Component {
  state = {
    className: '',
  }

  activeClass = name => {
    this.setState({
      className: name,
    })
    this.props.VisibilityFilter(name)
  }

  ClearComplate = () => {
    this.props.dispatch(delComplate())
  }
  render() {
    return (
      <div>
        {this.props.list.length <= 0 ? (
          ''
        ) : (
          <footer className="footer">
            <span className="todo-count">
              <strong>{this.props.list.length}</strong> item left
            </span>
            <ul className="filters">
              <li>
                <a
                  href="#/"
                  onClick={() => this.activeClass('')}
                  className={this.state.className === '' ? 'selected' : ''}>
                  All
                </a>
              </li>
              <li>
                <a
                  href="#/active"
                  onClick={() => this.activeClass('active')}
                  className={
                    this.state.className === 'active' ? 'selected' : ''
                  }>
                  Active
                </a>
              </li>

              <li>
                <a
                  href="#/completed"
                  onClick={() => this.activeClass('complated')}
                  className={
                    this.state.className === 'completed' ? 'selected' : ''
                  }>
                  Completed
                </a>
              </li>
            </ul>
            {this.props.list.every(v => v.isCompleted) ? (
              ''
            ) : (
              <button className="clear-completed" onClick={this.ClearComplate}>
                Clear completed
              </button>
            )}
          </footer>
        )}
      </div>
    )
  }
}
Footer = connect()(Footer)
export default Footer
