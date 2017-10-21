import Spell from '../db/models/spell'

class SpellEngine {

  spells = (res) => {
    Spell.find().exec(function(err, spells) {
      if(err)
        console.log(err) // TODO handle error
      res.json(spells)
    })
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
    Spell({ ...req.body }).save(function(err) {
      if(err)
        console.log(err) // TODO handle error
      res.sendStatus(204)
    })
  }

  deleteSpell = (req, res) => {
    Spell.findByIdAndRemove(req.body.id, function(err) {
      if(err)
        console.log(err) // TODO handle error
      res.sendStatus(204)
    })
  }

  // helper method used to convert url query parameters to keys that match the spells schema
  _fixKey = key => {
    return key === 'class' ? 'classes' : key
  }

}

export default SpellEngine
