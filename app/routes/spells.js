var Spell = require('../models/spell')

module.exports = (app) => {

  app.get('/spells', (req, res) => {
    filterSpells({}, res)
  })

  app.get('/spells/level/:level?', (req, res) => {
    var level = req.params.level
    if (!level) {
      next()
      return
    }
    filterSpells({level:level}, res)
  })

  app.get('/spells/school/:school?', (req, res) => {
    var school = req.params.school
    if (!school) {
      next()
      return
    }
    filterSpells({school:capitalize(school)}, res)
  })

  app.get('/spells/class/:className?', (req, res) => {
    var className = req.params.className
    if (!className) {
      next()
      return
    }
    filterSpells({classes:capitalize(className)}, res)
  })

}

export const filterSpells = (filter, res) => {
  Spell.find(filter).sort('name').exec( (err, items) => {
    if (err) 
      return console.log(err);
    res.send(items)
  })
}

const capitalize = (word) => {
  return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
}