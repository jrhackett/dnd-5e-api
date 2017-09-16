import Spell from '../db/models/spell'
import SpellDao from '../db/daos/spell'

module.exports = app => {

  const spellDao = new SpellDao()

  app.get('/api/v1/spells', (req, res) => {
    // construct query object from the url query parameters
    let query = Object.assign(
      {},
      ...Object.keys(req.query)
        .map(key => ({[fixKey(key)]: req.query[key]}))
    )
    spellDao.spells(query, res)
  })

  app.get('/api/v1/spells/level/:level', (req, res) => {
    const level = req.params.level
    return validLevels.includes(level) ? spellDao.spells({level:level}, res) : res.sendStatus(404)
  })

  app.get('/api/v1/spells/school/:school', (req, res) => {
    const school = capitalize(req.params.school)
    return validSchools.includes(school) ? spellDao.spells({school:school}, res) : res.sendStatus(404)
  })

  app.get('/api/v1/spells/class/:className', (req, res) => {
    const className = capitalize(req.params.className)
    return validClasses.includes(className) ? spellDao.spells({classes:className}, res) : res.sendStatus(404)
  })

}

// helper method to capitalize the first character in a string
const capitalize = word => {
  return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
}

// helper method used to convert url query parameters to keys that match the spells schema
const fixKey = key => {
  return key === 'class' ? 'classes' : key
}

const validLevels = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
const validSchools = ['Abjuration', 'Conjuration', 'Divination', 'Enchantment',
    'Evocation', 'Illusion', 'Necromancy', 'Transmutation']
const validClasses = ['Bard', 'Cleric', 'Druid', 'Paladin', 'Ranger',
    'Sorcerer', 'Warlock', 'Wizard']