import mongoose from 'mongoose'
import bcrypt from 'bcrypt'

const userSchema = mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: true,
    trim: true
  },
  username: {
    type: String,
    unique: true,
    required: true,
    trim: true
  },
  password: {
    type: String,
    required: true,
  }
})

userSchema.pre('save', function (callback) {
  const user = this

  // Break out if the password hasn't changed
  if (!user.isModified('password')) return callback()

  // Password changed so we need to hash it
  bcrypt.genSalt(5, function(err, salt) {
    if (err) return callback(err)

    bcrypt.hash(user.password, salt, null, function(err, hash) {
      if (err) return callback(err)
      user.password = hash
      callback()
    })
  })
})

userSchema.methods.verifyPassword = function(password, callback) {
  bcrypt.compare(password, this.password, function(err, isMatch) {
    if (err) return callback(err)
    callback(null, isMatch)
  })
}

module.exports = mongoose.model('User', userSchema)
