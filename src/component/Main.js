import React from 'react'
import {toggleTodo, delTodo} from '../reducers/action'
import {connect} from 'react-redux'

class Main extends React.Component {
  render() {
    return (
      <section className="main">
        <input id="toggle-all" className="toggle-all" type="checkbox" />
        <label htmlFor="toggle-all">Mark all as complete</label>
        <ul className="todo-list">
          {this.props.list.map(item => {
            return (
              <li className={item.isCompleted ? '' : 'completed'} key={item.id}>
                <div className="view">
                  <input
                    className="toggle"
                    type="checkbox"
                    checked={item.isCompleted ? '' : 'checked'}
                    onChange={() => this.props.dispatch(toggleTodo(item.id))}
                  />
                  <label>{item.content}</label>
                  <button
                    className="destroy"
                    onClick={() => this.props.dispatch(delTodo(item.id))}
                  />
                </div>
                <input className="edit" />
              </li>
            )
          })}
        </ul>
      </section>
    )
  }
}

Main = connect()(Main)
export default Main
