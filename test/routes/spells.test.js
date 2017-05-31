import { filterSpells } from '../../app/routes/spells'
var request = require('supertest')

let schools = ['Abjuration', 'Conjuration', 'Divination', 'Enchantment', 'Evocation', 'Illusion', 'Necromancy', 'Transmutation']
let classes = ['Bard', 'Cleric', 'Druid', 'Paladin', 'Ranger', 'Sorcerer', 'Warlock', 'Wizard']

describe('server responds appropriately', () => {
  var server

  beforeEach(function () {
    server = require('../../app/server', { bustCache: true })
  });

  afterEach(function (done) {
    server.close(done)
  });

  it('responds to /', (done) => {
    request(server)
      .get('/')
      .expect(200, done)
  })

  it('responds to /spells', (done) => {
    request(server)
      .get('/spells')
      .expect(200, done)
  })

  it('responds to /spells/level/:level', (done) => {
    for(let i = 0; i < 10; i++) {
      request(server)
        .get('/spells/level/' + i)
        .end( (err, res) => {
          res.body.map(spell => {
            expect(spell.level).toEqual(i.toString())
          })
          done()
        })
    }
  })

  it('responds to /spells/school/:school', (done) => {
    for(let school in schools) {
      request(server)
        .get('/spells/school/' + schools[school])
        .end( (err, res) => {
          res.body.map(spell => {
            expect(spell.school).toBe(schools[school])
          })
          done()
        })
    }
  })

  it('responds to /spells/class/:class', (done) => {
    for(let className in classes) {
      request(server)
        .get('/spells/class/' + classes[className])
        .end( (err, res) => {
          res.body.map(spell => {
            expect(spell.classes).toContain(classes[className])
          })
          done()
        })
    }
  })

  it('responds to /spells?level=:level', (done) => {
    for(let i = 0; i < 10; i++) {
      request(server)
        .get('/spells?level=' + i)
        .end( (err, res) => {
          res.body.map(spell => {
            expect(spell.level).toEqual(i.toString())
          })
          done()
        })
    }
  })

  it('responds to /spells?school=:school', (done) => {
    for(let school in schools) {
      request(server)
        .get('/spells?school=' + schools[school])
        .end( (err, res) => {
          res.body.map(spell => {
            expect(spell.school).toBe(schools[school])
          })
          done()
        })
    }
  })

  it('responds to /spells?class=:class', (done) => {
    for(let className in classes) {
      request(server)
        .get('/spells?school=' + classes[className])
        .end( (err, res) => {
          res.body.map(spell => {
            expect(spell.classes).toContain(classes[className])
          })
          done()
        })
    }
  })

  it('responds to /spells?level=:level&school=:school', (done) => {
    for(let i = 0; i < 10; i++) {
      for(let school in schools) {
        request(server)
          .get('/spells?level=' + i + '&school=' + schools[school])
          .end( (err, res) => {
            res.body.map(spell => {
              expect(spell.level).toEqual(i.toString())
              expect(spell.school).toBe(schools[school])
            })
            done()
          })
      }
    }
  })

  it('responds to /spells?level=:level&class=:class', (done) => {
    for(let i = 0; i < 10; i++) {
      for(let className in classes) {
        request(server)
          .get('/spells?level=' + i + '&class=' + classes[className])
          .end( (err, res) => {
            res.body.map(spell => {
              expect(spell.level).toEqual(i.toString())
              expect(spell.classes).toContain(classes[className])
            })
            done()
          })
      }
    }
  })

  it('responds to /spells?school=:school&class=:class', (done) => {
    for(let school in schools) {
      for(let className in classes) {
        request(server)
          .get('/spells?school=' + schools[school] + '&class=' + classes[className])
          .end( (err, res) => {
            res.body.map(spell => {
              expect(spell.school).toBe(schools[school])
              expect(spell.classes).toContain(classes[className])
            })
            done()
          })
      }
    }
  })

  it('responds to /spells?level=:level&school=:school&class=:class', (done) => {
    for(let i = 0; i < 10; i++) {
      for(let school in schools) {
        for(let className in classes) {
          request(server)
            .get('/spells?level=' + i + '&school=' + schools[school] + '&class=' + classes[className])
            .end( (err, res) => {
              if(res) {
                res.body.map(spell => {
                  expect(spell.level).toEqual(i.toString())
                  expect(spell.school).toBe(schools[school])
                  expect(spell.classes).toContain(classes[className])
                })
              }
              done()
            })
        }
      }
    }
  })

  it('404 random URL', (done) => {
    request(server)
      .get('/foo/bar')
      .expect(404, done)
  });

  it('404 incomplete level', (done) => {
    request(server)
      .get('/level')
      .expect(404, done)
  });

  it('404 incomplete school', (done) => {
    request(server)
      .get('/school')
      .expect(404, done)
  });

  it('404 incomplete class', (done) => {
    request(server)
      .get('/class')
      .expect(404, done)
  });
})