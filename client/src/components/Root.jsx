import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import RootSpellList from './RootSpellList'
import RootSpellbook from './RootSpellbook'
import RootProfile from './RootProfile'
import Header from './Header'

const Root = ({ store }) => (
  <Provider store={store}>
    <div>
      <Header />
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={RootSpellList} />
          <Route exact path="/spellbook" component={RootSpellbook} />
          <Route exact path="/profile" component={RootProfile} />
        </Switch>
      </BrowserRouter>
    </div>
  </Provider>
)

export default Root