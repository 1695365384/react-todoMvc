export const controlTodo = {
  ADD_TODO: 'ADD_TODO',
  TOGGLE_TODO: 'TOGGLE_TODO',
  DEL_TODO: 'DEL_TODO',
  DEL_COMPLATE: 'DEL_COMPLATE',
}

let ids = 1
export const addTodo = todo => {
  return {
    type: 'ADD_TODO',
    id: ids++,
    content: todo,
  }
}

export const toggleTodo = complate => {
  return {
    type: 'TOGGLE_TODO',
    id: complate,
  }
}

export const delTodo = del => {
  return {
    type: 'DEL_TODO',
    id: del,
  }
}

export const delComplate = () => {
  return {
    type: 'DEL_COMPLATE',
  }
}
