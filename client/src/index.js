import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './configureStore';
import SpellList from './components/SpellList';
const store = configureStore(); // You can also pass in an initialState here
render(
    <Provider store={store}>
        <SpellList />
    </Provider>,
    document.getElementById('root')
);
