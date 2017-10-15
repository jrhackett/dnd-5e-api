import Spell from '../models/spell'

class SpellDao {
  spells = (filter, res) => {
    Spell.find(filter).sort('name').exec((err, items) => {
      if(err)
        console.log(err) // TODO handle this error
      res.json(items)
    })
  }

  createSpell = (spell) => {
    spell.save(function(err) {
      if(err)
        console.log(err) // TODO handle this error
      res.sendStatus(200);
    })
  }
}

export default SpellDao
