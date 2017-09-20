import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
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
          <nav id="nav-main">
            <ul>
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/'>Spells</Link></li>
              <li><Link to='/'>Spellbook</Link></li>
            </ul>
          </nav>
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
