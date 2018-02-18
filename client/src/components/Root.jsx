import React, { Component } from 'react'
import { Provider, connect } from 'react-redux'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { css } from 'react-emotion'
import Navigation from './Navigation'
import RootSpells from './Spells'
import RootSpellbook from './Spellbook'
import Footer from './Footer'
import { spellsFetchData } from '../actions/spells'

import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/app.css'

const content = css`
  min-height: calc(100vh - 2rem - 20px - 13.7rem)
`

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
              <div className={ content }>
                <Switch>
                  <Route path="/spellbook" component={ RootSpellbook } />
                  <Route path="/" component={ RootSpells } />
                </Switch>
              </div>
              <Footer />
            </div>
          </BrowserRouter>
        </div>
      </Provider>
    )
  }
}

export default connect()(Root)
