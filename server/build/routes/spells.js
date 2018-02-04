'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _spells = require('../api/spells');

var _spells2 = _interopRequireDefault(_spells);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();
var spellEngine = new _spells2.default();

router.get('/', function (req, res) {
  spellEngine.getSpells(req, res);
});

router.post('/', function (req, res) {
  spellEngine.createSpell(req, res);
});

router.put('/', function (req, res) {
  spellEngine.updateSpell(req, res);
});

router.delete('/:id', function (req, res) {
  spellEngine.deleteSpell(req, res);
});

router.get('/export', function (req, res) {
  spellEngine.downloadSpells(req, res);
});

module.exports = router;