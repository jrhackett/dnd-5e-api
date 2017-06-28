import { combineReducers } from 'redux';
import { spells, spellsHasErrored, spellsIsLoading } from './spellsFetch';

export default combineReducers({
    spells,
    spellsHasErrored,
    spellsIsLoading
});