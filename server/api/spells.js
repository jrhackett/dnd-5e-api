import SpellDao from '../db/daos/spell'

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

  // helper method used to convert url query parameters to keys that match the spells schema
  _fixKey = key => {
    return key === 'class' ? 'classes' : key
  }

}

export default SpellEngine
