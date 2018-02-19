import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import spells from './spells'
import spellbook from './spellbook'

export default combineReducers({
  spells,
  spellbook,
  routing: routerReducer
})
