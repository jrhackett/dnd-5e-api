let chai = require('chai')
let chaiHttp = require('chai-http')
let server = require('../api/server')
let should = chai.should()
let expect = chai.expect

chai.use(chaiHttp);

describe('Server responds appropriately general requests', () => {

  it('GET / responds with {}', (done) => {
    chai.request(server)
      .get('/')
      .end( (err, res) => {
        res.should.have.status(200)
        res.body.should.be.a('object')
        expect(res.body).to.deep.equal({})
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

})