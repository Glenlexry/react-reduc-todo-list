import {render} from 'react-dom'
import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './components/App'

const initialState = {
  input: '',
  todos: []
}

const addTodo = text => ({
  type: 'ADD_TODO',
  text
})

const onInputChange = () => ({
  type: 'ON_INPUT_CHANGE'
})

const todos = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TODO':
        return {
          input: state.input,
          todos: [action.text]
        }
    case 'ON_INPUT_CHANGE':
        return {
          input: state.value
        }
      break;
    default:
      return state;
  }
}

const store = createStore(todos, /* preloadedState, */
   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
)
