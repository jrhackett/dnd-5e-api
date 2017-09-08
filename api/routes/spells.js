import Spell from '../models/spell'

module.exports = app => {

  app.get('/api/v1/spells', (req, res) => {
    // construct query object from the url query parameters
    let query = Object.assign(
      {},
      ...Object.keys(req.query)
        .map(key => ({[fixKey(key)]: req.query[key]}))
    )
    filterSpells(query, res)
  })

  app.get('/api/v1/spells/level/:level', (req, res) => {
    const level = req.params.level
    return validLevels.includes(level) ? filterSpells({level:level}, res) : res.sendStatus(404)
  })

  app.get('/api/v1/spells/school/:school', (req, res) => {
    const school = capitalize(req.params.school)
    return validSchools.includes(school) ? filterSpells({school:school}, res) : res.sendStatus(404)
  })

  app.get('/api/v1/spells/class/:className', (req, res) => {
    const className = capitalize(req.params.className)
    return validClasses.includes(className) ? filterSpells({classes:className}, res) : res.sendStatus(404)
  })

}

// queries database for spells that match the filter object and sends a json response
export const filterSpells = (filter, res) => {
  Spell.find(filter).sort('name').exec( (err, items) => {
    if (err) 
      console.log(err)
    res.json(items)
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