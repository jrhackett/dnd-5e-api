import React from 'react'
import ReactDOM, { render } from 'react-dom'
import configureStore from './configureStore'
import Root from './components/Root'
import registerServiceWorker from './registerServiceWorker'

import 'bootstrap/dist/css/bootstrap.css'
import './styles/App.css'

const store = configureStore() // You can also pass in an initialState here

render(
  <Root store={store} />,
  document.getElementById('root')
)

ReactDOM.render(
  <Root store={store} />,
  document.getElementById('root')
)

registerServiceWorker()
