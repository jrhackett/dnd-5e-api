import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import RootSpells from './spells/RootSpells'
import RootSpellbook from './spellbook/RootSpellbook'
import RootProfile from './profile/RootProfile'

import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/App.css'

const Root = ({ store }) => (
  <Provider store={store}>
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={RootSpells} />
          <Route exact path="/spellbook" component={RootSpellbook} />
          <Route exact path="/profile" component={RootProfile} />
        </Switch>
      </BrowserRouter>
    </div>
  </Provider>
)

export default Root
