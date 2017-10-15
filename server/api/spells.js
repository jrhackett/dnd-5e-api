import SpellDao from '../db/daos/spell'
import Spell from '../db/models/spell'

const spellDao = new SpellDao()

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
    spellDao.spells(query, res)
  }

  createSpell = (req) => {
    // TODO check that all fields in req.body are relevant
    let newSpell = Spell({ ...req.body })
    spellDao.createSpell(newSpell)
  }

  // helper method used to convert url query parameters to keys that match the spells schema
  _fixKey = key => {
    return key === 'class' ? 'classes' : key
  }

}

export default SpellEngine
