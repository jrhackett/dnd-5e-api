import User from '../db/models/user'

module.exports = app => {

  app.post('/api/v1/user', (req, res) => {
    if (req.body.username && req.body.password) {
      var userData = {
        username: req.body.username,
        password: req.body.password
      }
      
      User.create(userData, function (err, user) {
        if (err)
          return next(err)
        return res.sendStatus(200);
      })
    }
  })

}
