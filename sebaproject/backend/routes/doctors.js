const router = require("express").Router();
const { Compare } = require("@material-ui/icons");
let Doctor = require('../models/doctor.model');


router.route('/').get((req, res) => {
    Doctor.find()
      .then(doctor => res.json(doctor))
      .catch(err => res.status(400).json('Error: ' + err));
});

  
router.route('/search').post(async (req, res) => {
    const myobj = req.body.text;
    //console.log("got a request for " + myobj);
    
    var searchstring = ".*" + myobj + ".*";
    let result = await Doctor.find({name: {$regex : searchstring}},);
    if (!result) return res.status(404).json("doctor not found");

    //console.log("found: " + result);

    return res.status(200).json({
        doctor: result,
        message: "Found (a) doctor",
    });

});

router.route('/add').post((req, res) => {
    const name = req.body.name;
    const city = req.body.city;
    const rating = req.body.rating;
    //console.log("post received: %s %s", username, password);
    const newDoctor = new Doctor({name, city, rating});
  
    newDoctor.save()
      .then(() => res.json('Doctor added!'))
      .catch(err => res.status(400).json('Error: ' + err));
  });

module.exports = router;