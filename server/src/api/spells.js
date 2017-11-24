import Spell from '../db/models/spell'
import json2csv from 'json2csv'

class SpellEngine {

  getSpells = (req, res) => {
    const query = this._getQuery(req.query)
    Spell.find(query).sort('name').exec(function(err, spells) {
      if(err)
        res.status(500).send(err)
      res.json(spells)
    })
  }

  downloadSpells = (req, res) => {
    const query = this._getQuery(req.query)
    Spell.find(query).sort('name').exec(function(err, spells) {
      if(err)
        res.status(500).send(err)
      json2csv({ data: spells, fields: Object.keys(spells[0]) }, function(err, spellscsv) {
        if(err)
          res.status(500).send(err)
        res.header('Content-Disposition', 'attachment; filename=spells.csv')
        res.type('text/csv')
        res.status(200).send(spellscsv)
      })
    })
  }

  createSpell = (req, res) => {
    Spell({ ...req.body }).save(function(err) {
      if(err)
        res.status(500).send(err)
      res.sendStatus(204)
    })
  }

  updateSpell = (req, res) => {
    Spell.update({ id: req.body.id }, { ...req.body }, { multi: true }, function(err, numAffected) {
      if(err)
        res.status(500).send(err)
      res.sendStatus(204)
    })
  }

  deleteSpell = (req, res) => {
    Spell.remove({ id: req.params.id }, function(err) {
      if(err)
        res.status(500).send(err)
      res.sendStatus(204)
    })
  }

  _getQuery = query => {
    return { ...Object.keys(query).map(key => ({ [this._fixKey(key)]: query[key] })) }
  }

  // helper method used to convert url query parameters to keys that match the spells schema
  _fixKey = key => {
    return key === 'class' ? 'classes' : key
  }

}

export default SpellEngine
