import SpellEngine from '../api/spells'

module.exports = app => {

  const spellEngine = new SpellEngine()

  app.get('/api/v1/spells', (req, res) => {
    if(req.query)
      spellEngine.spellsByQuery(req, res)
    else
      spellEngine.spells(res)
  })

  app.post('/api/v1/spells', (req, res) => {
    spellEngine.createSpell(req, res)
  })

  app.delete('/api/v1/spells', (req, res) => {
    spellEngine.deleteSpell(req, res)
  })

}
