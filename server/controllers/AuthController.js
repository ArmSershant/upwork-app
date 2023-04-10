const jwt = require('jsonwebtoken')
const { Users, Roles } = require('../util/database')
const passport = require('passport')
class AuthController {
  loggedUser(req, res) {
    if (!req.user) res.json({ username: "Please login" })
    res.json(req.user)
  }

  login = async (req, res, next) => {
    passport.authenticate('login', async (err, user, info) => {
      if (err || !user) {
        res.status(400);
        res.send(info)
      } else {
        req.login(
          user,
          { session: false },
          async () => {
            const token = jwt.sign({ user: req.user }, "TOP_SECRET")
            res.json({ token: token, user: req.user })
          })
      }
    })(req, res, next);
  }

  register = async (req, res, next) => {
    passport.authenticate('signup', async (err, user, info) => {
      let { username, email, roleId, salary, description } = req.body
      let existsUser = await Users.findOne({ where: { username: username } })
      if (existsUser) {
        res.status(400).json({ message: "User already exists" })
      }
      if (err || !user) {
        res.status(400)
        res.send(info)
      } else {
        const findRole = await Roles.findOne({ where: { name: roleId } })
        user.username = username
        user.roleId = findRole.id;
        user.salary = salary
        user.description = description
        let newUser = await Users.create({
          username, email,
          password: user.password,
          roleId: findRole.id,
          salary,
          description
        });
        console.log(newUser)
        const token = jwt.sign({ user: newUser }, "TOP_SECRET")
        res.send({ user, token })
      }
    })(req, res, next)
  }

  isLoggedIn(jwt_payload, done) {
    Users.findOne({ where: { id: jwt_payload.user.id } })
      .then(user => { return done(null, user) })
      .catch(err => {
        return done(err, false, {
          message: "Token not matched"
        })
      })
  }

  async isRegistered(username, password, done) {
    let user = await Users.findOne({ where: { username: username, password: password } })
    if (!user) {
      return done(null, false)
    } else if (user.password === password) {
      return done(null, false)
    }
    return done(null, user)
  }
}

module.exports = new AuthController()
