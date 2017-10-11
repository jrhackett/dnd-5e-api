import SpellDao from '../db/daos/spell'

const spellDao = new SpellDao()

class SpellEngine {

  constructor() {
    this.validLevels = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
    this.validSchools = ['Abjuration', 'Conjuration', 'Divination', 'Enchantment',
    'Evocation', 'Illusion', 'Necromancy', 'Transmutation']
    this.validClasses = ['Bard', 'Cleric', 'Druid', 'Paladin', 'Ranger',
    'Sorcerer', 'Warlock', 'Wizard']
  }

  spells = (res) => {
    spellDao.spells({}, res)
  }

  spellsByQuery = (req, res) => {
    // construct query object from the url query parameters
    let query = Object.assign(
      {},
      ...Object.keys(req.query)
        .map(key => ({[this._fixKey(key)]: req.query[key]}))
    )
    spellDao.spells(query, res)
  }

  // helper method used to convert url query parameters to keys that match the spells schema
  _fixKey = key => {
    return key === 'class' ? 'classes' : key
  }

}

export default SpellEngine
