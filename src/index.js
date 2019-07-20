import React from 'react'
import ReactDOM from 'react-dom'
import App from './app'
import './static/css/base.css'
import './static/css/index.css'
import {createStore} from 'redux'
import TodoApp from './reducers/index'
import {Provider} from 'react-redux'
let store = createStore(TodoApp)

console.log(store.getState())

// 每次 state 更新时，打印日志
// 注意 subscribe() 返回一个函数用来注销监听器
const unsubscribe = store.subscribe(() => {
  console.log(store.getState())
})


unsubscribe()

ReactDOM.render(
  <Provider store={store}>
    <App store={store} />
  </Provider>,
  document.getElementById('root')
)
