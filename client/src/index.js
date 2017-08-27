import React from 'react'
import ReactDOM, { render } from 'react-dom'
import configureStore from './store/configureStore'
import Root from './components/Root'
import registerServiceWorker from './registerServiceWorker'

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