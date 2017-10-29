import * as types from '../actionTypes'

const initialState = {
  selected: []
}

const spellbook = (state = initialState, action) => {
  switch(action.type) {
    case types.TOGGLE_IN_SPELLBOOK:
      return state.selected.includes(action.id) ?
        { ...state, selected: state.selected.filter(i => i !== action.id) } :
        { ...state, selected: [...state.selected, action.id] }
    default:
      return state
  }
}

export default spellbook
