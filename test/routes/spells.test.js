import { filterSpells } from '../../app/routes/spells'
var request = require('supertest');

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
      .expect('Content-Type', /json/)
      .expect(200, done)
  })

  it('responds to /spells/level/:level', (done) => {
    for(let i = 0; i < 10; i++) {
      request(server)
        .get('/spells/level/' + i)
        .expect('Content-Type', /json/)
        .expect(200, done)
        .expect( (res) => {
          res.body.map( (obj) => {
            if(obj.level != i)
              return false
          })
          return true
        })
    }
  })

  it('responds to /spells/school/:school', (done) => {
    let schools = ['Abjuration', 'Conjuration', 'Divination', 'Enchantment', 'Evocation', 'Illusion', 'Necromancy', 'Transmutation']
    for(var school in schools) {
      request(server)
        .get('/spells/school/' + schools[school])
        .expect('Content-Type', /json/)
        .expect(200, done)
        .expect( (res) => {
          res.body.map( (obj) => {
            if(obj.school !== i)
              return false
          })
          return true
        })
    }
  })

  it('responds to /spells/class/bard', (done) => {
    let classes = ['Bard', 'Cleric', 'Druid', 'Paladin', 'Ranger', 'Sorcerer', 'Warlock', 'Wizard']
    for(var className in classes) {
      request(server)
        .get('/spells/class/' + classes[className])
        .expect('Content-Type', /json/)
        .expect(200, done)
        .expect( (res) => {
          res.body.map( (obj) => {
            var myClasses = new Set(obj.classes)
            if(!myClasses.has(className))
              return false
          })
          return true
        })
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