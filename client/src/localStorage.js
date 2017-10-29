export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('spellbook')
    if(serializedState === null)
      return undefined
    const json = JSON.parse(serializedState)
    return {
      spellbook: {
        selected: [...json]
      }
    }
  }
  catch(err) {
    return undefined
  }
}

export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state.spellbook.selected)
    localStorage.setItem('spellbook', serializedState)
  }
  catch(err) {
    console.log(`Error while saving state to localStorage: ${err}`)
  }
}
