import Spell from '../models/spell'

class SpellDao {
  spells = (filter, res) => {
    Spell.find(filter).sort('name').exec((err, items) => {
      if(err)
        console.log(err) // TODO handle this error
      res.json(items)
    })
  }

  createSpell = (spell, res) => {
    spell.save(function(err) {
      if(err)
        console.log(err) // TODO handle this error
      res.sendStatus(200);
    })
  }

  deleteSpell = (id, res) => {
    Spell.findById(id, (err, spell) => {
      spell.remove((err, s) => {
        if(err)
          console.log(err) // TODO handle this error
        res.sendStatus(200)
      })
    })
  }
}

export default SpellDao
