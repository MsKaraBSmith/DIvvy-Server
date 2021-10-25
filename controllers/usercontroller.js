const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { Router } = require("express");
// const { User } = require(".");
const { User } = require("../models");
const validateSession = require("../middleware/validate-session");

const router = Router();

router.get('/practice', function(req, res) {
  res.send("Practice route")
});

//Signup
router.post('/register', async function (req, res) {
    User.create({
      groupName: req.body.user.groupName,
      familyUsername: req.body.user.familyUsername,
      username: req.body.user.username,
      password: bcrypt.hashSync(req.body.user.password, 13),
      role: req.body.user.role,
    })
    .then(
      function createSuccessful(user) {
          let token = jwt.sign({id: user.id, username: user.username}, process.env.JWT_SECRET, {expiresIn: 60*60*24});
          let id= user.id;
          
          res.json({
              user: user,
              message: 'User successfully created',
              sessionToken: token,
              ID: id
          });
      }
  )
  .catch(err => res.status(500).json({ error: err }))
});

//User login
router.post('/login', function(req, res) {
 
  User.findOne(
      {where:{
          username: req.body.user.username
      }
  })
  .then(function loginSuccess(user) {
      if (user) {
          bcrypt.compare(req.body.user.password, user.password, function (err, matches) {
              if (matches) {

          let token = jwt.sign({id: user.id}, process.env.JWT_SECRET, {expiresIn: 60 * 60 * 24 })
          let id = user.id

          res.status(200).json({
              user: user,
              message: "User successfully logged in!",
              sessionToken: token,
              ID: id
          })
      } else {
          res.status(502).send({error: "Login Failed"});
      }
      });
  } else {
          res.status(500).json({ error: "User does not exist."})
      }
  })
  .catch(err => res.status(500).json({ error: err }))
});

//Get all users
router.get('/', validateSession, function(req, res) {
  
  User.findAll()
  .then((user) => res.status(200).json(user))
  .catch((err) => res.status(500).json({ error: err }));
});

//Get Users by individual ID

router.get("/get/:id", validateSession, function (req, res) {
  let divvyUser = req.params.id;
  User.findAll({
      where: { id: divvyUser },
  })
      .then((entry) => res.status(200).json(entry))
      .catch((err) => res.status(500).json({ error: err }));
});

//Update individual user

router.put("/update/:id", validateSession, function (req, res) {
  const updateUser = {
    groupName: req.body.user.groupName,
    familyUsername: req.body.user.familyUsername,
    username: req.body.user.username,
    password: req.body.user.password,
    role: req.body.user.role
  };

  const query = { where: { id: req.params.id }}

  User.update(updateUser, query)
  .then((user) => res.status(200).json(user))
  .catch((err) => res.status(500).json({ error: err }));
})


//Delete User

router.delete("/delete/:id", validateSession, function (req, res) {
  let query;
  if(req.user.role == "admin"){
    query = { where: { id: req.params.id } };
  }
  User.destroy(query)
  .then(() => res.status(200).json({ message: "User removed" }))
  .catch((err) => res.status(500).json({ error: err }));
});



module.exports = router;
