const express = require('express');
const session = require('express-session');
const cors = require('cors');
const { Users } = require('./util/database');
const bcrypt = require('bcrypt')
const app = express();
const passport = require('passport');
const passportJWT = require("passport-jwt");
const LocalStrategy = require('passport-local').Strategy
const JWTStrategy = require('passport-jwt').Strategy
const ExtractJWT = passportJWT.ExtractJwt;
const Auth = require("./middleware/Auth");
const AuthController = require('./controllers/AuthController');
const WorkController = require('./controllers/WorkController');
const FreelancerController = require('./controllers/FreelancerController');


app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(cors({
  origin: 'http://localhost:4200',
  credentials: true
}))
app.use(require('cookie-parser')())
app.use(session({
  secret: 'enter makaveli',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 60 * 60 * 1000 }
}))

app.use(passport.initialize())
app.use(passport.session())


passport.use(
  new JWTStrategy({
    jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey: "TOP_SECRET"
  },
    AuthController.isLoggedIn
  )
)

passport.use('signup', new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password',
}, async (email, password, done) => {
  try {
    console.log(req.body)
    let emailMatches = await Users.findOne({ where: { email: email } })
    if (emailMatches) {
      return done(null, false, { message: "Account with that email already exists" })
    }
    if (password.length <= 4 || !email) {
      return done(null, false, { message: "Your credential don't match our criteria" })
    }
    else {
      const hashedPass = bcrypt.hashSync(password, 10)
      let user = { email, password: hashedPass }
      return done(null, user, { message: `Signed up successfully` })
    }
  } catch (err) {
    return done(err)
  }
},
  AuthController.isRegistered
))

passport.use("login", new LocalStrategy(
  { usernameField: "username", passwordField: "password" },
  async (username, password, done) => {
    try {
      const user = await Users.findOne({ where: { username: username } })
      if (!user) {
        return done(null, false, { message: 'User not found' })
      }
      const passwordMatches = bcrypt.compareSync(password, user.password)
      if (!passwordMatches) {
        return done(null, false, { message: 'Password mismatch' })
      } else {
        return done(null, user, { message: `You are logged in successfully ${username}` })
      }
    } catch (err) {
      console.log(err)
      return done(err)
    }
  },
  AuthController.isLoggedIn
))
app.post('/signup', AuthController.register)
app.post('/login', AuthController.login)
app.get('/profile', Auth(), AuthController.loggedUser)
app.post('/creatework', WorkController.postedWork)
app.get('/allworks', Auth(), WorkController.showAllWorks)
app.get('/work/:id', Auth(), WorkController.singleWork)
app.delete('/delete/:id', Auth(), WorkController.deleteWork)
app.post('/require', WorkController.require)
app.get('/requiredworks', Auth(), WorkController.requiredWorks)
app.post('/apply', WorkController.apply)
app.get('/appliedworks', Auth(), WorkController.appliedWorks)
app.post('/finish', WorkController.finishWork)
app.get('/finishedworks', Auth(), WorkController.finishedWorks)
app.post('/rate', WorkController.rateFinishedWork)
app.get('/allfreelancers', Auth(), FreelancerController.showAllFreelancers)
app.post('/hirefreelancer', FreelancerController.hireFreelancer)
app.post('/searchby', FreelancerController.searchBySalary)
app.post('/filterby', FreelancerController.filterBySalary)
app.get('/hiredfreelancer', Auth(), FreelancerController.getHiredFreelancer)

app.listen(5000, () => {
  console.log('Server is running on port 5000.')
})
