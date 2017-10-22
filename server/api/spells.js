import Spell from '../db/models/spell'

class SpellEngine {

  getSpells = (req, res) => {
    const query = { ...Object.keys(req.query).map(key => ({ [this._fixKey(key)]: req.query[key] })) }
    Spell.find(query).sort('name').exec(function(err, spells) {
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
    Spell.remove({ id: req.params.id }, function(err) {
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
