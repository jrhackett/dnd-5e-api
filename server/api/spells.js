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

  spellsByLevel = (level, res) => {
    if(this.validLevels.includes(level))
      spellDao.spells({level:level}, res)
    else
      res.sendStatus(404)
  }

  spellsBySchool = (s, res) => {
    const school = this._capitalize(s)
    if(this.validSchools.includes(school))
      spellDao.spells({school:school}, res)
    else
      res.sendStatus(404)
  }

  spellsByClass = (c, res) => {
    const className = this._capitalize(c)
    if(this.validClasses.includes(className))
      spellDao.spells({classes:className}, res)
    else
      res.sendStatus(404)
  }

  // helper method to capitalize the first character in a string
  _capitalize = word => {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
  }

  // helper method used to convert url query parameters to keys that match the spells schema
  _fixKey = key => {
    return key === 'class' ? 'classes' : key
  }

}

export default SpellEngine
