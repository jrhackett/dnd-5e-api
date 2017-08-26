import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from './configureStore'
import RootSpellList from './components/RootSpellList.jsx'
import Header from './components/Header.jsx'
import registerServiceWorker from './registerServiceWorker'

import 'bootstrap/dist/css/bootstrap.css'
import './styles/App.css'

const store = configureStore(); // You can also pass in an initialState here

render(
    <Provider store={store}>
      <div>
        <Header />  
        <RootSpellList />
      </div>
    </Provider>,
    document.getElementById('root')
)
registerServiceWorker()
