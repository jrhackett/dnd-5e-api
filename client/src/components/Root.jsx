import React, { Component } from 'react'
import { Provider, connect } from 'react-redux'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navigation from './Navigation'
import RootSpells from './Spells'
import RootSpellbook from './Spellbook'
import RootProfile from './Profile'
import { spellsFetchData } from '../actions/spells'

import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/app.css'

class Root extends Component {
  componentDidMount() {
    const { dispatch } = this.props
    dispatch(spellsFetchData('/api/v1/spells'))
  }

  render() {
    return (
      <Provider store={this.props.store}>
        <div>
          <BrowserRouter>
            <div>
              <Navigation />
              <Switch>
                <Route path="/spellbook" component={RootSpellbook} />
                <Route path="/profile" component={RootProfile} />
                <Route path="/" component={RootSpells} />
              </Switch>
            </div>
          </BrowserRouter>
        </div>
      </Provider>
    )
  }
}

export default connect()(Root)
