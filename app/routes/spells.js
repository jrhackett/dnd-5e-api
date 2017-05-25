var Spell = require('../models/spell')

module.exports = function(app) {

  app.get('/spells', function(req, res) {
    Spell.find({}).exec(function (err, items) {
      if (err) {
        return console.log(err);
      }
      res.send(items)
    })
  })

  app.get('/spells/level/:level?', function(req, res) {
    var level = req.params.level
    if (!level) {
        next()
        return
    }
    Spell.find({level:level}).exec(function (err, items) {
      if (err) {
        return console.log(err);
      }
      res.send(items)
    })
  })

  app.get('/spells/school/:school?', function(req, res) {
    var school = req.params.school
    if (!school) {
        next()
        return
    }
    school = school.charAt(0).toUpperCase() + school.slice(1).toLowerCase()
    Spell.find({school:school}).exec(function (err, items) {
      if (err) {
        return console.log(err);
      }
      res.send(items)
    })
  })

  app.get('/spells/class/:className?', function(req, res) {
    var className = req.params.className
    if (!className) {
        next()
        return
    }
    className = className.charAt(0).toUpperCase() + className.slice(1).toLowerCase()
    Spell.find({classes:className}).exec(function (err, items) {
      if (err) {
        return console.log(err);
      }
      res.send(items)
    })
  })
  
}