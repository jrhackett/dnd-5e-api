import React from 'react'
import ReactDOM, { render } from 'react-dom'
import configureStore from './store/configureStore'
import Root from './components/Root'
import registerServiceWorker from './registerServiceWorker'
import { loadState, saveState } from './localStorage'
import throttle from 'lodash/throttle'

const store = configureStore(loadState())

store.subscribe(throttle(() => {
  saveState({
    spellbook: store.getState().spellbook
  })
}, 1000))

render(
  <Root store={ store } />,
  document.getElementById('root')
)

ReactDOM.render(
  <Root store={store} />,
  document.getElementById('root')
)

registerServiceWorker()
