const mongoose = require('mongoose')

const spellSchema = mongoose.Schema({
  school: { type: String, default: '' },
  name: { type: String, default: '' },
  level: { type: String, default: '' },
  ee: { type: String, default: '' },
  ritual: { type: String, default: '' },
  casting_time: { type: String, default: '' },
  scag: { type: String, default: '' },
  id: { type: String, default: '' },
  source: { type: String, default: '' },
  range: { type: String, default: '' },
  classes: [ { type: String } ],
  components: { type: String, default: '' },
  duration: { type: String, default: '' },
  athigherlevel: { type: String, default: '' },
  concentration: { type: String, default: '' },
  slug: { type: String, default: '' },
  page: { type: String, default: '' },
  description: { type: String, default: '' }
})

module.exports = mongoose.model('Spell', spellSchema)
