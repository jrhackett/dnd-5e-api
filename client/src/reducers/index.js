import { combineReducers } from 'redux'
import spells from './spells'
import spellbook from './spellbook'

export default combineReducers({
  spells,
  spellbook
})
