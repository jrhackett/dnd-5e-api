export function spellsHasErrored(state = false, action) {
    switch (action.type) {
        case 'SPELLS_HAS_ERRORED':
            return action.hasErrored;
        default:
            return state;
    }
}

export function spellsIsLoading(state = false, action) {
    switch (action.type) {
        case 'SPELLS_IS_LOADING':
            return action.isLoading;
        default:
            return state;
    }
}

export function spells(state = [], action) {
    switch (action.type) {
        case 'SPELLS_FETCH_DATA_SUCCESS':
            return action.items;
        default:
            return state;
    }
}