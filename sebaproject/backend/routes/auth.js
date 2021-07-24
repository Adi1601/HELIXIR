const router = require("express").Router();
const { Compare } = require("@material-ui/icons");
let User = require('../models/user.model');
const jwt = require("jsonwebtoken");
const JwtSecret = "Very Secret";
var isPasswordValid = 0;


//router.post("/login", authController.login);


router.route('/').get((req, res) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const username = req.body.username;
  const email = req.body.email;
  const password = req.body.password;
  //console.log("post received: %s %s", username, password);
  const newUser = new User({username, email, password});

  newUser.save()
    .then(() => res.json('User added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/login').post( async (req, res) => {

  let user = await User.findOne(
      {email : req.body.email,
      });
  if (!user) return res.status(404).json("user not found");
  
  /* replace with bcrypt.compareSync when password is hashed */
  if (req.body.password === user.password) {
    isPasswordValid = 1;
  }
  if (!isPasswordValid) return res.status(401).send({ token: null });

  const token = jwt.sign(
    {username: user.username, email: user.email, password: user.password },
    JwtSecret,
    {
      expiresIn: 86400,
    }
  );

  return res.status(200).json({
    token: token,
    message: "User Logged in Successfully",
  });
})

router.route('/logout').post( async (req, res) => {
    //localStorage.clear();
    return res.status(200).json({message: "User Logged Out"});
})

module.exports = router;