const router = require("express").Router();
const { Compare } = require("@material-ui/icons");
let Doctor = require('../models/doctor.model');


router.route('/').get((req, res) => {
    Doctor.find()
      .then(doctor => res.json(doctor))
      .catch(err => res.status(400).json('Error: ' + err));
});

  
router.route('/search').post(async (req, res) => {
    const myobj_name = req.body.sname;
    const myobj_city = req.body.scity;
    const myobj_spec = req.body.sspec;
    
    var searchname = ".*" + myobj_name + ".*";
    var searchcity = ".*" + myobj_city + ".*";
    var searchspec = ".*" + myobj_spec + ".*";
    let result = await Doctor.find({name: {$regex : new RegExp(searchname, "i")},
                                    city: {$regex : new RegExp(searchcity, "i")},
                                    speciality: {$regex : new RegExp(searchspec, "i")}},)
                            .collation({'locale' : 'en'})
                            .sort([['name', 1]]);
    if (!result) return res.status(404).json("doctor not found");


    return res.status(200).json({
        doctor: result,
        message: "Found (a) doctor",
    });

});

router.route('/add').post((req, res) => {
    const name = req.body.name;
    const city = req.body.city;

    const newDoctor = new Doctor({name, city});
  
    newDoctor.save()
      .then(() => res.json('Doctor added!'))
      .catch(err => res.status(400).json('Error: ' + err));
  });

module.exports = router;