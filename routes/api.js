const router = require("express").Router();
const Exercise = require("../models/exercise.js");

router.post("/api/workouts", (req, res) => {
  Exercise.create({})
    .then(dbexercise => {
      res.json(dbexercise);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});


router.get("/api/workouts", (req, res) => {
  Exercise.find()
    .then(dbexercise => {
      res.json(dbexercise);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});
//update by id call the exercise- use the specific function with params and body, alter the exercise body with a push
//if validators are true then re.json the database if everything is all wrong catch the error please
router.put("/api/workouts/:id", ({body,params},res) =>
{
  Exercise.findByIdAndUpdate(
    params.id, 
    {$push:{exercises:body}},
    {new:true,runValidators:true}
  ) .then(dbexercise => {
    res.json(dbexercise);
  })
  .catch(err => {
    res.status(400).json(err);
  });
})

//we are limiting to 7 because we have been told to (only really measuring the week and not beyond)
router.get("/api/workouts/range", (req, res) => {
  Exercise.find().limit(7)
    .then(dbexercise => {
      res.json(dbexercise);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

//get rid of it

router.delete("/api/workouts", ({body}, res) =>{
  Exercise.findByIdAndDelete(
    body.id
  ).then(() => {
    res.json(true);
  })
  .catch(err => {
    res.status(400).json(err);
  });
})

module.exports = router;
