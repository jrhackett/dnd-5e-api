import { filterSpells } from '../server/routes/spells'
import Spell from '../server/db/models/spell'
import chai from 'chai'
import chaiHttp from 'chai-http'
import server from '../server/server'

const should = chai.should()
const expect = chai.expect

const levels = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
const schools = ['Abjuration', 'Conjuration', 'Divination', 'Enchantment', 'Evocation', 'Illusion', 
  'Necromancy', 'Transmutation']
const classes = ['Bard', 'Cleric', 'Druid', 'Paladin', 'Ranger', 'Sorcerer', 'Warlock', 'Wizard']
const testSpell = {
  school: 'Necromancy',
  name: 'Test Spell',
  level: '1',
  ee: '0',
  ritual: 'No',
  casting_time: '1 Action',
  scag: '0',
  source: 'Test book',
  range: '120',
  classes: [ 'Bard', 'Warlock' ],
  components: 'V',
  duration: 'Concentration, up to 1 minute',
  athigherlevel: 'Nothing specified',
  concentration: 'Yes',
  slug: 'test-spell',
  page: '100',
  description: 'Test Spell Description',
  id: '1000001'
}

process.env.NODE_ENV = 'test'

chai.use(chaiHttp)

describe('GET /api/v1/spells', () => {
  
  it('GET /api/v1/spells', (done) => {
    chai.request(server)
      .get('/api/v1/spells')
      .end( (err, res) => {
        res.should.have.status(200)
        res.body.should.be.a('array')
        // TODO test res.body here
        done()
      })
  })

  it('GET /api/v1/spells?level=:level', (done) => {
    levels.map( (level) => {
      chai.request(server)
        .get('/api/v1/spells?level=' + level)
        .end( (err, res) => {
          res.body.map(spell => {
            expect(spell.level).to.equal(level.toString())
          })
          if(level + 1 === levels.length)
            done()
        })
    })
  })

  it('GET /api/v1/spells?school=:school', (done) => {
    schools.map( (school, i) => {
      chai.request(server)
        .get('/api/v1/spells?school=' + school)
        .end( (err, res) => {
          res.body.map(spell => {
            expect(spell.school).to.equal(school)
          })
          if(i + 1 === schools.length)
            done()
        })
    })
  })

  it('GET /api/v1/spells?class=:class', (done) => {
    classes.map( (className, i) => {
      chai.request(server)
        .get('/api/v1/spells?class=' + className)
        .end( (err, res) => {
          res.body.map(spell => {
            expect(spell.classes).to.be.an('array').that.includes(className)
          })
          if(i + 1 === classes.length)
            done()
        })
    })
  })

  it('GET /api/v1/spells?level=:level&school=:school', (done) => {
    levels.map( (level) => {
      schools.map( (school, i) => {
        chai.request(server)
          .get('/api/v1/spells?level=' + level + '&school=' + school)
          .end( (err, res) => {
            res.body.map(spell => {
              expect(spell.level).to.equal(level.toString())
              expect(spell.school).to.equal(school)
            })
            if(level + 1 === levels.length && i + 1 === schools.length)
              done()
          })
      })
    })
  })

  it('GET /api/v1/spells?level=:level&class=:class', (done) => {
    levels.map( (level) => {
      classes.map( (className, i) => {
        chai.request(server)
          .get('/api/v1/spells?level=' + level + '&class=' + className)
          .end( (err, res) => {
            res.body.map(spell => {
              expect(spell.level).to.equal(level.toString())
              expect(spell.classes).to.be.an('array').that.includes(className)
            })
            if(level + 1 === levels.length && i + 1 === classes.length)
              done()
          })
      })
    })
  })

  it('GET /api/v1/spells?school=:school&class=:class', (done) => {
    schools.map( (school, i) => {
      classes.map( (className, j) => {
        chai.request(server)
          .get('/api/v1/spells?school=' + school + '&class=' + className)
          .end( (err, res) => {
            res.body.map(spell => {
              expect(spell.school).to.equal(school)
              expect(spell.classes).to.be.an('array').that.includes(className)
            })
            if(i + 1 === schools.length && j + 1 === classes.length)
              done()
          })
      })
    })
  })

  it('GET /api/v1/spells?level=:level&school=:school&class=:class', (done) => {
    levels.map( (level) => {
      schools.map( (school, i) => {
      classes.map( (className, j) => {
          chai.request(server)
            .get('/api/v1/spells?level=' + level + '&school=' + school + '&class=' + className)
            .end( (err, res) => {
              res.body.map(spell => {
                expect(spell.level).to.equal(level.toString())
                expect(spell.school).to.equal(school)
                expect(spell.classes).to.be.an('array').that.includes(className)
              })
              if(level + 1 === levels.length && i + 1 === schools.length && j + 1 === classes.length)
                done()
            })
        })
      })
    })
  })

  it('GET /api/v1/spells/level/bogus should 404', (done) => {
    chai.request(server)
      .get('/api/v1/spells/level/bogus')
      .end( (err, res) => {
        res.should.have.status(404)
        done()
      })
  })

  it('GET /api/v1/spells/level should 404', (done) => {
    chai.request(server)
      .get('/api/v1/spells/level')
      .end( (err, res) => {
        res.should.have.status(404)
        done()
      })
  })

  it('GET /api/v1/spells/school/bogus should 404', (done) => {
    chai.request(server)
      .get('/api/v1/spells/school/bogus')
      .end( (err, res) => {
        res.should.have.status(404)
        done()
      })
  })

  it('GET /api/v1/spells/school should 404', (done) => {
    chai.request(server)
      .get('/api/v1/spells/school')
      .end( (err, res) => {
        res.should.have.status(404)
        done()
      })
  })

  it('GET /api/v1/spells/class/bogus should 404', (done) => {
    chai.request(server)
      .get('/api/v1/spells/class/bogus')
      .end( (err, res) => {
        res.should.have.status(404)
        done()
      })
  })

  it('GET /api/v1/spells/class should 404', (done) => {
    chai.request(server)
      .get('/api/v1/spells/class')
      .end( (err, res) => {
        res.should.have.status(404)
        done()
      })
  })

})

describe('POST spells', () => {

  it('POST /api/v1/spells', (done) => {
    chai.request(server)
      .post('/api/v1/spells')
      .send(testSpell)
      .end((err, res) => {
        res.should.have.status(204)
        done()
      })
  })

})

describe('DELETE spells', () => {

  it('DELETE /api/v1/spells/:id', (done) => {
    let spellToSave = Spell(testSpell)
    spellToSave.save((err, spell) => {
      chai.request(server)
        .delete('/api/v1/spells/1000001')
        .end((err, res) => {
          res.should.have.status(204)
          done()
        })
    })
  })

})
