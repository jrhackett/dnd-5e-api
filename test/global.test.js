let chai = require('chai')
let chaiHttp = require('chai-http')
let server = require('../server/server')
let should = chai.should()
let expect = chai.expect

chai.use(chaiHttp);

describe('Server responds appropriately general requests', () => {

  it('GET / responds with 404', (done) => {
    chai.request(server)
      .get('/')
      .end( (err, res) => {
        res.should.have.status(404)
        done()
      })
  })

  it('404 random URL', (done) => {
    chai.request(server)
      .get('/foo/bar')
      .end( (err, res) => {
        res.should.have.status(404)
        done()
      })
  })

  // TODO add permission tests for users after they're implemented

})
