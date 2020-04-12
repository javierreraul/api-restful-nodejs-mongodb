
const User = require('../models/user')
const bcrypt = require('bcrypt')
const service = require('../services')
const saltRounds = 10

function signin (req, res) {
  const user = new User({
    email: req.body.email,
    displayName: req.body.displayName,
    password: bcrypt.hashSync(req.body.password, saltRounds)
  })

  user.save((err) => {
    if (err) return res.status(500).send({ message: `Error creating the user: ${err}` })

    return res.status(201).send({ token: service.createToken(user) })
  })
}

function login (req, res) {
  User.findOne({ email: req.body.email }, function(err, user) {
    if(err) return res.status(500).send({ message: err })
    if(!user) return res.status(404).send({ message: 'User does not exist' })
    if (bcrypt.compareSync(req.body.password, user.password)) {
      res.status(200).send({
        message: 'You have logged correctly',
        token: service.createToken(user)
      })
    }
    else {
      res.status(401).send({ message: 'Invalid email/password' });
    }
  })
}

module.exports = {
  signin,
  login
}
