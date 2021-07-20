const router = require("express").Router();
let Review = require('../models/review.model');


//router.post("/login", authController.login);


router.route('/').get((req, res) => {
  Review.find()
    .then(review => res.json(reviews))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const rating = req.body.rating;
  const comment = req.body.comment;
  const id_doc = req.body.id_doc;
  //console.log("post received: %s %s", username, password);
  const newReview = new Review({rating, comment, id_doc});

  newReview.save()
    .then(() => res.json('Review added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;