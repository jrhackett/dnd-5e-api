import express from 'express'
import SpellEngine from '../api/spells'

const router = express.Router()
const spellEngine = new SpellEngine()

router.get('/', (req, res) => {
  spellEngine.getSpells(req, res)
})

router.post('/', (req, res) => {
  spellEngine.createSpell(req, res)
})

router.put('/', (req, res) => {
  spellEngine.updateSpell(req, res)
})

router.delete('/:id', (req, res) => {
  spellEngine.deleteSpell(req, res)
})

router.get('/export', (req, res) => {
  spellEngine.downloadSpells(req, res)
})

module.exports = router
