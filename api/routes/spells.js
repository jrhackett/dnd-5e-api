import Spell from '../models/spell'

module.exports = (app) => {

  app.get('/spells', (req, res) => {
    // construct query object from the url query parameters
    let query = Object.assign(
      {},
      ...Object.keys(req.query)
        .map(key => ({[fixKey(key)]: req.query[key]}))
    )
    filterSpells(query, res)
  })

  app.get('/spells/level/:level', (req, res) => {
    // TODO check level
    filterSpells({level:req.params.level}, res)
  })

  app.get('/spells/school/:school', (req, res) => {
    // TODO check school
    filterSpells({school:capitalize(req.params.school)}, res)
  })

  app.get('/spells/class/:className', (req, res) => {
    // TODO check className
    filterSpells({classes:capitalize(req.params.className)}, res)
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
const capitalize = (word) => {
  return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
}

// helper method used to convert url query parameters to keys that match the spells schema
const fixKey = (key) => {
  return key === 'class' ? 'classes' : key
}