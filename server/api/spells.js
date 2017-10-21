import Spell from '../db/models/spell'

class SpellEngine {

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
    Spell.find().byQuery(query).exec(function(err, spells) {
      if(err)
        console.log(err) // TODO handle error
      res.json(spells)
    })
  }

  createSpell = (req, res) => {
    const result = Spell.create(Spell({ ...req.body }))
    if(result)
      res.sendStatus(204)
    res.sendStatus(500)
  }

  deleteSpell = (req, res) => {
    Spell.findById(req.body.id).remove()
  }

  // helper method used to convert url query parameters to keys that match the spells schema
  _fixKey = key => {
    return key === 'class' ? 'classes' : key
  }

}

export default SpellEngine
