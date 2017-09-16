import Spell from '../models/spell'

class SpellDao {
  spells = (filter, res) => {
    Spell.find(filter).sort('name').exec((err, items) => {
      res.json(items)
    })
  }
}

export default SpellDao