import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navigation from './Navigation'
import RootSpells from './spells/RootSpells'
import RootSpellbook from './spellbook/RootSpellbook'
import RootProfile from './profile/RootProfile'

import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/app.css'

const Root = ({ store }) => (
  <Provider store={store}>
    <div>
      <BrowserRouter>
        <div>
          <Navigation />
          <Switch>
            <Route exact path="/" component={RootSpells} />
            <Route exact path="/spellbook" component={RootSpellbook} />
            <Route exact path="/profile" component={RootProfile} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  </Provider>
)

export default Root
