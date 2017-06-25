import { filterSpells } from '../api/routes/spells'

let levels = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
let schools = ['Abjuration', 'Conjuration', 'Divination', 'Enchantment', 'Evocation', 'Illusion', 'Necromancy', 'Transmutation']
let classes = ['Bard', 'Cleric', 'Druid', 'Paladin', 'Ranger', 'Sorcerer', 'Warlock', 'Wizard']

process.env.NODE_ENV = 'test'

let chai = require('chai')
let chaiHttp = require('chai-http')
let server = require('../api/server')
let should = chai.should()
let expect = chai.expect

chai.use(chaiHttp);

describe('Server responds appropriately to spell requests', () => {
  
  it('GET /spells', (done) => {
    chai.request(server)
      .get('/spells')
      .end( (err, res) => {
        res.should.have.status(200)
        res.body.should.be.a('array')
        // TODO test res.body here
        done()
      })
  })

  it('GET /spells/level/:level', (done) => {
    levels.map( (level) => {
      chai.request(server)
        .get('/spells/level/' + level)
        .end( (err, res) => {
          res.body.map(spell => {
            expect(spell.level).to.equal(level.toString())
          })
          if(level + 1 === levels.length)
            done()
        })
    })
  })

  it('GET /spells/school/:school', (done) => {
    schools.map( (school, i) => {
      chai.request(server)
        .get('/spells/school/' + school)
        .end( (err, res) => {
          res.body.map(spell => {
            expect(spell.school).to.equal(school)
          })
          if(i + 1 === schools.length)
            done()
        })
    })
  })

  it('GET /spells/class/:class', (done) => {
    classes.map( (className, i) => {
      chai.request(server)
        .get('/spells/class/' + className)
        .end( (err, res) => {
          res.body.map(spell => {
            expect(spell.classes).to.be.an('array').that.includes(className)
          })
          if(i + 1 === classes.length)
            done()
        })
    })
  })

  it('GET /spells?level=:level', (done) => {
    levels.map( (level) => {
      chai.request(server)
        .get('/spells?level=' + level)
        .end( (err, res) => {
          res.body.map(spell => {
            expect(spell.level).to.equal(level.toString())
          })
          if(level + 1 === levels.length)
            done()
        })
    })
  })

  it('responds to /spells?school=:school', (done) => {
    schools.map( (school, i) => {
      chai.request(server)
        .get('/spells?school=' + school)
        .end( (err, res) => {
          res.body.map(spell => {
            expect(spell.school).to.equal(school)
          })
          if(i + 1 === schools.length)
            done()
        })
    })
  })

  it('responds to /spells?class=:class', (done) => {
    classes.map( (className, i) => {
      chai.request(server)
        .get('/spells?class=' + className)
        .end( (err, res) => {
          res.body.map(spell => {
            expect(spell.classes).to.be.an('array').that.includes(className)
          })
          if(i + 1 === classes.length)
            done()
        })
    })
  })

  it('responds to /spells?level=:level&school=:school', (done) => {
    levels.map( (level) => {
      schools.map( (school, i) => {
        chai.request(server)
          .get('/spells?level=' + level + '&school=' + school)
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

  it('responds to /spells?level=:level&class=:class', (done) => {
    levels.map( (level) => {
      classes.map( (className, i) => {
        chai.request(server)
          .get('/spells?level=' + level + '&class=' + className)
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

  it('responds to /spells?school=:school&class=:class', (done) => {
    schools.map( (school, i) => {
      classes.map( (className, j) => {
        chai.request(server)
          .get('/spells?school=' + school + '&class=' + className)
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

  it('responds to /spells?level=:level&school=:school&class=:class', (done) => {
    levels.map( (level) => {
      schools.map( (school, i) => {
      classes.map( (className, j) => {
          chai.request(server)
            .get('/spells?level=' + level + '&school=' + school + '&class=' + className)
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

  it('GET /spells/level should 404', (done) => {
    chai.request(server)
      .get('/spells/level')
      .end( (err, res) => {
        res.should.have.status(404)
        done()
      })
  })

  it('GET /spells/school should 404', (done) => {
    chai.request(server)
      .get('/spells/school')
      .end( (err, res) => {
        res.should.have.status(404)
        done()
      })
  })

  it('GET /spells/class should 404', (done) => {
    chai.request(server)
      .get('/spells/class')
      .end( (err, res) => {
        res.should.have.status(404)
        done()
      })
  })

})
