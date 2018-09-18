import {render} from 'react-dom'
import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './components/App'

// const store = createStore(todos, /* preloadedState, */
//    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// )

render(
    <App/>,
  document.getElementById('root')
)
