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
          <nav className="navbar">
            <ul className="nav">
              <li className="item"><Link to='/'>Home</Link></li>
              <li className="item"><Link to='/'>Spells</Link></li>
              <li className="item"><Link to='/'>Spellbook</Link></li>
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
