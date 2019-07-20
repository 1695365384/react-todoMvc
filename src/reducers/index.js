import {controlTodo} from './action'
import {combineReducers} from 'redux'

let {ADD_TODO, DEL_TODO, TOGGLE_TODO, DEL_COMPLATE} = controlTodo

function todos(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        {id: action.id, content: action.content, isCompleted: true},
        ...state,
      ]

    case DEL_TODO:
      let arr = state.filter(item => item.id !== action.id)
      return arr

    case TOGGLE_TODO:
      return state.map(item => {
        if (item.id === action.id) {
          item.isCompleted = !item.isCompleted
        }
        return item
      })

    case DEL_COMPLATE:
      return state.filter(item => item.isCompleted)

    default:
      return state
  }
}

const TodoApp = combineReducers({
  todos,
})

export default TodoApp
