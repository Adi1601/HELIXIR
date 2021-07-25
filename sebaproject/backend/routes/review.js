const router = require("express").Router();
let Review = require('../models/review.model');
let Doctor = require('../models/doctor.model');


router.route('/').get((req, res) => {
  Review.find()
    .then(review => res.json(reviews))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post(async (req, res) => {
  const rating = parseInt(req.body.rating);
  const comment = req.body.comment;
  const id_doc = req.body.id_doc;
  
  let doctor = await Doctor.findById({_id : id_doc});
  var avg_rat = doctor.avg_rating;
  var num_rat = doctor.num_ratings;

  avg_rat = (((avg_rat * num_rat) + rating) / (num_rat + 1));

  doctor = await Doctor.findByIdAndUpdate({_id : id_doc},
     {avg_rating : avg_rat});
  doctor = await Doctor.findByIdAndUpdate({_id : id_doc},
     {$inc : {'num_ratings' : 1}});

  const newReview = new Review({rating, comment, id_doc});


  newReview.save()
    .then(() => res.json('Review added!'))
    .catch(err => res.status(400).json('Error: ' + err));
  });

router.route('/loadprofile').post(async (req,res) => {
  var id_doctor = req.body.doctor_id;
  var avg_rating = 0;
  var num_ratings = 0;  

  let result = await Review.find({id_doc: id_doctor});
  
  if (!result) return res.status(404).json("Doctor not found");
  else {
    num_ratings = result.length;
    for (let index = 0; index < num_ratings; index++) {
        avg_rating += result[index].rating;
    }
    avg_rating = avg_rating / num_ratings;
  }

  
  return res.status(200).json({
    rating: avg_rating,
    review: result,
    message: "Found review for doctor",
  });
})

module.exports = router;