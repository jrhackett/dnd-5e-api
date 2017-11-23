import Spell from '../db/models/spell'
import json2csv from 'json2csv'

class SpellEngine {

  getSpells = (req, res) => {
    const query = this._getQuery(req.query)
    Spell.find(query).sort('name').exec(function(err, spells) {
      if(err) {
        console.log(err)
        res.sendStatus(500) // TODO form a better response than this
      }
      res.json(spells)
    })
  }

  downloadSpells = (req, res) => {
    const query = { ...this._getQuery(req.query), level: '8' }
    Spell.find(query).sort('name').exec(function(err, spells) {
      if(err) {
        console.log(err)
        res.sendStatus(500) // TODO form a better response than this
      }
      json2csv({ data: spells }, function(err, csv) {
        res.setHeader('Content-disposition', 'attachment; filename=data.csv')
        res.set('Content-Type', 'text/csv')
        res.status(200).download(csv)
      })
    })
  }

  createSpell = (req, res) => {
    Spell({ ...req.body }).save(function(err) {
      if(err) {
        console.log(err)
        res.sendStatus(500) // TODO form a better response than this
      }
      res.sendStatus(204)
    })
  }

  updateSpell = (req, res) => {
    Spell.update({ id: req.body.id }, { ...req.body }, { multi: true }, function(err, numAffected) {
      if(err) {
        console.log(err)
        res.sendStatus(500) // TODO form a better response than this
      }
      res.sendStatus(204)
    })
  }

  deleteSpell = (req, res) => {
    Spell.remove({ id: req.params.id }, function(err) {
      if(err) {
        console.log(err)
        res.sendStatus(500) // TODO form a better response than this
      }
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
