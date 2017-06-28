import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from './configureStore'
import VisibleSpellList from './containers/VisibleSpellList'

import 'bootstrap/dist/css/bootstrap.css';

const store = configureStore(); // You can also pass in an initialState here

render(
    <Provider store={store}>
        <VisibleSpellList />
    </Provider>,
    document.getElementById('root')
)
