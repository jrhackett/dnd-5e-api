'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _spell = require('../db/models/spell');

var _spell2 = _interopRequireDefault(_spell);

var _expressCsv = require('express-csv');

var _expressCsv2 = _interopRequireDefault(_expressCsv);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SpellEngine = function SpellEngine() {
  var _this = this;

  _classCallCheck(this, SpellEngine);

  this.getSpells = function (req, res) {
    var query = _this._getQuery(req.query);
    _spell2.default.find(query).sort('name').exec(function (err, spells) {
      if (err) res.status(500).send(err);
      res.json(spells);
    });
  };

  this.downloadSpells = function (req, res) {
    var query = _this._getQuery(req.query);
    _spell2.default.find(query).sort('name').exec(function (err, spells) {
      if (err) res.status(500).send(err);
      var spellsObj = JSON.parse(JSON.stringify(spells));
      res.status(200).csv(spellsObj);
    });
  };

  this.createSpell = function (req, res) {
    (0, _spell2.default)(_extends({}, req.body)).save(function (err) {
      if (err) res.status(500).send(err);
      res.sendStatus(204);
    });
  };

  this.updateSpell = function (req, res) {
    _spell2.default.update({ id: req.body.id }, _extends({}, req.body), { multi: true }, function (err, numAffected) {
      if (err) res.status(500).send(err);
      res.sendStatus(204);
    });
  };

  this.deleteSpell = function (req, res) {
    _spell2.default.remove({ id: req.params.id }, function (err) {
      if (err) res.status(500).send(err);
      res.sendStatus(204);
    });
  };

  this._getQuery = function (query) {
    return _extends({}, Object.keys(query).map(function (key) {
      return _defineProperty({}, _this._fixKey(key), query[key]);
    }));
  };

  this._fixKey = function (key) {
    return key === 'class' ? 'classes' : key;
  };
}

// helper method used to convert url query parameters to keys that match the spells schema
;

exports.default = SpellEngine;