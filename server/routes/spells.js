import SpellEngine from '../api/spells'

module.exports = app => {

  const spellEngine = new SpellEngine()

  app.get('/api/v1/spells', (req, res) => {
    if(req.query)
      spellEngine.spellsByQuery(req, res)
    else
      spellEngine.spells(res)
  })

  app.get('/api/v1/spells/level/:level', (req, res) => {
    spellEngine.spellsByLevel(req.params.level, res)
  })

  app.get('/api/v1/spells/school/:school', (req, res) => {
    spellEngine.spellsBySchool(req.params.school, res)
  })

  app.get('/api/v1/spells/class/:className', (req, res) => {
    spellEngine.spellsByClass(req.params.className, res)
  })

}
